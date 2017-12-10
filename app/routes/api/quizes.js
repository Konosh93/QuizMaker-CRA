var utils = require('../../utils');
var passport = require('passport');
var User = require('../../models/user.js');
var Quiz = require('../../models/quiz.js');
var Trial = require('../../models/trial.js');
var router = require('express').Router();
var auth = require('./middleware/auth');
var mongoose = require('mongoose');

router.get('/me', auth.required, getMyQuizes, errHandler);
router.get('/one/:slug', getOneQuiz, errHandler);
router.get('/', getAllQuizes, errHandler);
router.post('/', auth.required, postQuiz, errHandler);
router.post('/answers', auth.optional, postQuizAnswers, errHandler);

function errHandler(err, req, res, next) {
	if (err) {
		return res.status(500).json({errors: { message: "sorry, something unexpected happened"}});
	}
}


function getOneQuiz(req, res) {
	Quiz.findOne({ slug: req.params.slug }, (err, quiz) => {
		if (err) return res.status(500).json({ errors: {message: "Something is wrong with our server"}});
		if (!quiz) return res.status(422).json({ errors: { message: "No quiz found"}});
		return res.status(200).json({ quiz: utils.convertToClientFormat(quiz) });
	});
}

function getAllQuizes(req, res){
	Quiz.find({}, (err, quizes) => {
		if (err) {
			return res.status(500).json({ errors: {message: "Something is wrong with our server"}});
		}
		if (!quizes || quizes.length === 0) {
			return res.status(422).json({ errors: { message: "No valid quizes found"}})
		}
		const _quizes = [];
		quizes.forEach(quiz => {
			const { title, slug } = quiz;
			_quizes.push({ title, slug });
		});
		return res.status(200).json({ quizes: _quizes});
	});
}

function getMyQuizes(req, res){
	Quiz.find({user: mongoose.Types.ObjectId(req.user.id)}, (err, quizes) => {
		if (err) return res.status(500).json({ errors: {message: "Something is wrong with our server"}});
		if (!quizes) return res.status(200).json({ message: "You have no quizes, make some"});
		return res.status(200).json({quizes});
	});
}

function putQuiz(req, res) {
	const id = req.body.quiz._id;
	Quiz.findById(id, (err, _quiz) => {
		if (err) return res.status(500).json({ errors: { message: "Something is wrong with our server"}});
		if (!_quiz) return res.status(422).json({ errors: { message: "This quiz does not exist anymore"}});
		if (req.user.id !== _quiz.user.toString()) return res.status(422).json({ errors: { message: "You have no permission to edit this quiz"}})
        const { title, problems } = req.body.quiz;
		if (!title || typeof title !== 'string') {
			return res.status(422)
				.json({errors: {title: 'Quiz must have a valid title'}});
		}
		if (!problems || !(problems instanceof Array)) {
			return res.status(422)
				.json({errors: {problems: 'Quiz must have at least one valid problem'}});
		}
		_quiz.title = title
		_quiz.problems = problems
		return _quiz.save(function(err){
			if (err) return standardErrResponse(res, 'quiz could not be saved');
			return res.status(200).json({ quiz: _quiz });
	})
	});
}

function postQuiz(req, res) {
	const id = req.body.quiz._id;
	if (id !== 'new-quiz') {
		return putQuiz(req, res);
	}
	const quiz = {title: req.body.quiz.title, problems: req.body.quiz.problems}
	if (!quiz.title || typeof quiz.title !== 'string') {
		return res.status(422)
				  .json({errors: {title: 'Quiz must have a valid title'}});
	}
	if (!quiz.problems || !(quiz.problems instanceof Array)) {
		return res.status(422)
				  .json({errors: {problems: 'Quiz must have at least one valid problem'}});
	}
	Quiz.findOne({title: quiz.title, user: req.user.id}, function(err, _quiz){
		if (err) {
			throw err;
		}
		if (!_quiz) {
			var _quiz = new Quiz(quiz);
			_quiz.user = mongoose.Types.ObjectId(req.user.id);
		}
		return _quiz.save(function(err){
			if (err) {
				return standardErrResponse(res, 'quiz could not be saved');
			}
			return res.status(200).json({ quiz: _quiz });
		})
		
	});
}


function postQuizAnswers(req, res) {
	const { _id, problems } = req.body.answers;
	if (_id === 'new-quiz') {
		standardErrResponse(res, 'Submit this quiz before you submit answers');
	}
	if (!problems || !(problems instanceof Array)) {
		return res.status(422)
				  .json({errors: {problems: 'Quiz must have at least one valid problem'}});
	}
	Quiz.findOne({ _id }, function(err, _quiz){
		if (err) {
			return res.status(500).json({ errors: { message: 'Something went wrong, we are sorry.'}})
		}
		if (!_quiz) {
			return res.status(422).json({ errors: { message: 'This quiz no longer exists'}})			
		}
		let score = 0;
		score = _quiz.problems.reduce((acc, problem) => {
			for (let p of problems) {
				if (p.id !== problem.id) continue;
				if (p.correct === problem.correct) {
					return acc + 1;
				}
				return acc;
			}
		}, 0);	
		recordScore(req, score);
		return res.status(200).json({ score });	
	});
}

const standardErrResponse = (res, message) => (
	res.status(422).json({errors: { message }})
);

const recordScore = (req, score) => {
	const userId = req.user ? req.user.id : null;
	const { _id } = req.body.answers;
	const trial = new Trial({
		quiz: mongoose.Types.ObjectId(_id),
		user: userId ? mongoose.Types.ObjectId(userId) : null,
		score,
	});
	trial.save(err => {
		if (err) return console.log(err);
	});
}


module.exports = router;
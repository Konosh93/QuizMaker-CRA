var passport = require('passport');
var User = require('../../models/user.js');
var Quiz = require('../../models/quiz.js');
var router = require('express').Router();
var auth = require('./middleware/auth');

router.get('/me', auth.required, getMyQuizes, errHandler);;
router.get('/', getAllQuizes, errHandler);
router.post('/', auth.required, postQuiz, errHandler);;

function errHandler(err, req, res, next) {
	if (err) {
		return res.status(500).json({errors: { message: "sorry, something unexpected happened"}});
	}
}


function getAllQuizes(req, res){
	Quiz.find({}, (err, quizes) => {
		if (err) {
			return res.status(500).json({ errors: {message: "Something is wrong with our server"}});
		}
		return res.status(200).json({quizes});
	});
}

function getMyQuizes(req, res){
	return res.json({message: 'Welcome to the quizes pagee'});
}

function postQuiz(req, res) {
	const id = req.body.quiz._id;console.log(id)
	if (id !== 'new-quiz') {
		standardErrResponse(res, 'This is not a new quiz');
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
		}
		return _quiz.save(function(err){
			if (err) {
				return standardErrResponse(res, 'quiz could not be saved');
			}
			return res.status(200).json({message: 'success', quiz: {data: _quiz, id: _quiz._id}});
		})
		
	});
}

const standardErrResponse = (res, message) => (
	res.status(422).json({errors: { message }})
);

module.exports = router;
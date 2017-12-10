var mongoose = require('mongoose');
var User = mongoose.model('User');
var Quiz = mongoose.model('Quiz');

var TrialSchema = new mongoose.Schema({
	quiz: {type:mongoose.Schema.Types.ObjectId, ref: 'Quiz'},
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true, strict:false, minimize: false});

module.exports = mongoose.model('Trial', TrialSchema);























//var Sequelize = require('sequelize');
// var sequelize = new Sequelize('postgres://quiz_user:pass@127.0.0.1:5432/quiz');
//sequelize
//  .authenticate()
//  .then(() => {
//    console.log('Connection has been established successfully.');
//  })
//  .catch(err => {
//    console.error('Unable to connect to the database:', err);
//  });


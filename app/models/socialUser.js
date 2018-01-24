var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config').secret;


var socialUserSchema = new mongoose.Schema({
	name: {type: String, required:[true, "can't be empty"]},
	provider: { type: String, required:[true, "can't be empty"]},
	socialId: { type: String, required:[true, "can't be empty"], unique: true},
	email: {type: String, lowercase: true, unique: true, required:[false, "can be blank"], match:[/\S+@\S+\.\S+/, 'invalid email'], index: true},
}, {timestamps: true});

socialUserSchema.plugin(uniqueValidator, {message: 'is already taken'});

socialUserSchema.methods.generateJWT = function(){
	return jwt.sign({
		id: this._id,
		name: this.name,
		exp: parseInt(Date.now()+600000)
	}, secret)
}

socialUserSchema.methods.toAuthJSON = function (){
	return {
		name: this.name,
		token: this.generateJWT(),
	}
}

module.exports = mongoose.model('SocialUser', socialUserSchema);
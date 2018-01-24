var User = require('../models/user.js');
var SocialUser = require('../models/socialUser.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var linkedinStrategy = require('passport-linkedin-oauth2').Strategy;
var credentials = require('./credentials');
//linkedin: https://stackoverflow.com/questions/48088337/linkedin-oauth-pictureurl-leading-to-a-500-error/48103276
passport.use('linkedin', new linkedinStrategy({
    clientID: credentials.linkedin.clientID,
    clientSecret: credentials.linkedin.clientSecret,
    callbackURL: credentials.linkedin.callbackURL,
    profileFields: [
                "formatted-name",
                "headline",
                "id",
                "public-profile-url",
                "email-address",
                "location",
            ],
    scope: [ 'r_basicprofile', 'r_emailaddress'],
}, function(token, tokenSecret, profile, done){
	process.nextTick(function () {
		SocialUser.findOne({'provider': profile.provider, socialId: profile.id}, function(err, user){
			if (err) return done(err);
			if (!user) {
				var user = new SocialUser({
					provider: profile.provider,
					name: profile.displayName,
					socialId: profile.id,
					email: profile.emails['value'],
				});
				user.save(function (err, user) {
					if (err) return done(err);
					return done(null, user);
				})
			}else{
				return done(null, user);
			}
			return done(null, user);
		});
      
    });
}));

passport.use('local-signup', new LocalStrategy({
		usernameField: 'user[email]',
		passwordField: 'user[password]',
		passReqToCallback: true,
	},
	function(req, email, password, done){
		process.nextTick( function(){
			User.findOne({'email': email.toLowerCase()}, function(err, user) {
				if (err) {
					return done(err);
				}
				if (user || !req.body.user.name) {
					return done(null, false);
				}else{
					var user = new User({
						name: req.body.user.name,
						email:email,
					});
					user.setPassword(password);
					user.save(function(err, user){
						if (err) {
							return done(err);
						}
						return done(null, user);
					})
				}
			})				
		})
	}
));

passport.use('local-login', new LocalStrategy({
		usernameField: 'user[email]',
		passwordField: 'user[password]',
		passReqToCallback: true,
	},
	function(req, email, password, done){
		process.nextTick( function(){
			User.findOne({'email': email.toLowerCase()}, function(err, user){
				if (err) {
					return done(err);
				}
				if (!user) {
					return done(null, false);
				}
				if (!user.validPassword(password)) {
					return done(null, false);
				}
				return done(null, user);
			})				
		})
	}
));


module.exports = passport;
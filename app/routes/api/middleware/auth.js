var router = require('express').Router();
var jwt = require('express-jwt');
var UnauthorizedError = require('express-jwt/lib').UnauthorizedError;
console.log(UnauthorizedError);
var secret = require('../../../config').secret;

function fromHeaderOrQuerystring (req) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
      req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
  } else if (req.query && req.query.token) {
    return req.query.token;
  }
  return null;
}

var required = router.use(jwt({
	secret,
	userProperty: 'user',
	getToken: fromHeaderOrQuerystring,
}), (req, res, next) => {
	if (req.user.exp < Date.now()) {
	   return next(new UnauthorizedError('Token-expired', { message: 'Token is is expired' }));
	}
	next();
});

var optional = router.use(jwt({
	secret,
	userProperty: 'user',
	getToken: fromHeaderOrQuerystring,
	credentialsRequired: false,
}));

module.exports = {required, optional};
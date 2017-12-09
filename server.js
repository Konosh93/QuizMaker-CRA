var express = require('express'),
	port = process.env.PORT || 3001,
 	passport = require('passport'),
 	bodyParser = require('body-parser'),
 	morgan = require('morgan'),
 	cors = require('cors'),
 	mongoose = require('mongoose');

let MONGODB_URI;
if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_CONFIG_DIR = './app/config/json';
  config = require('config')
  MONGODB_URI = config.url;
} else {
	MONGODB_URI = process.env.MONGODB_URI;
}

mongoose.connect(MONGODB_URI, {useMongoClient: true});

var app = express();
//if(config.util.getEnv('NODE_ENV') !== 'test') {
//    //use morgan to log at command line
//    app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
//}
app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/build'));


app.get('/:gate*?', function(req,res,next){
  if (req.params.gate !== 'api') {console.log(req.params.gate)
  	return res.sendFile(__dirname + '/build/index.html');
  }
  return next();
})


require('./app/config/passport.js');

/* historyFallBack to serve index.html in case of refresh
app.get('/*', (req, res) => {
	res.sendFile('../fe/server/index.html');
})
*/
app.use('/api', require('./app/routes/api'));

if(!module.parent){ 
	app.listen(port, () => {
		console.log('	Listening at port ' + port);
	})
}

module.exports = app;


function logger (data) {
	console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
	console.log(data);
	console.log('VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');
}
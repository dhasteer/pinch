const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['http://localhost:3000', 'https://localhost:3001'];
var corsOptionsDelegate = (req, callback) => {
	var corsOptions;
	console.log(req.header('Origin'));

	if(whitelist.indexOf(req.header('Origin')) !== -1) {
		console.log("In whitelist");
		corsOptions = { origin: true };
		callback(null, corsOptions);
	}
	else {
		console.log("Not in whitelist");
		corsOptions = { origin: false };
		callback(new Error('Not allowed by CORS'), corsOptions);
	}
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);
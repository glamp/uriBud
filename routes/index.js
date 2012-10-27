var parseURI = require('./parser').parseURI;



/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Enter Your MongoDB URI', parsed: ""});
};

exports.parse = function(req, res, next){
  
  var mongoCommand = parseURI(req.body.uri); 
  
  res.render('index', { title: 'Your Parsed URI', parsed: mongoCommand});
};





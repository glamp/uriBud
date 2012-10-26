
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Enter Your MongoDB URI', parsed: ""});
};

exports.parse = function(req, res, next){
  
  rgxMongo = new RegExp("[\/@:]+")
  parsed = req.body.uri.split(rgxMongo)
  
  mongo_command = "mongo "
  mongo_command += "--host " + parsed[3] + " "
  mongo_command += "--username " + parsed[1] + " "
  mongo_command += "--password " + parsed[2] + " "
  mongo_command += "--port " + parsed[4] + " "
  mongo_command += parsed[5]
  
  res.render('index', { title: 'Your Parsed URI', parsed: mongo_command});
};





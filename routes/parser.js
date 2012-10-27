
DEFAULT_URL = 'mongodb://localhost:27017/default';

parseURI = function(url, callback) {
  // Match the url format
  var urlRE = new RegExp('^mongo(?:db)?://(?:|([^@/]*)@)([^@/]*)(?:|/([^?]*)(?:|\\?([^?]*)))$');

  var match = urlRE.exec(url)

  var auth = match[1]
  var host = match[2]
  var db   = match[3]

  var mongoOpts = "mongo"
  if (auth!=undefined) {
    mongoOpts += " --username " + auth.split(':')[0]
    if (auth.split(':').length > 1) {
      mongoOpts += " --password " + auth.split(':')[1]
    }
  }  
  if (host!=undefined) {
    mongoOpts += " --host " + host.split(':')[0]
    mongoOpts += " --port " + host.split(':')[1] || "27017"
  }
  if (db!=undefined) {
    mongoOpts += " " + db
  }

  return mongoOpts
}


exports.parseURI = parseURI;



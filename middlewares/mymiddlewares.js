var somemiddleware = function() {
  return function(req, res, next){
    req.body = req.body || {message: "fucker"};
    if(!req.body.hasOwnProperty('message')) req.body.message = "hello there";
    next();
  }
}

module.exports.somemiddleware = somemiddleware;
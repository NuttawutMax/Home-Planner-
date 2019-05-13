module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller
  if (undefined){
  	console.log('show isAdmin ', undefined);
     // if the session.id is continuted next() will go on
  }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
    return res.forbidden('You are not allowed in this section please contact us if you dont know shite.');
};
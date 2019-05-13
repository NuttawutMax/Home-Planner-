/**
 * RegisterController
 *
 * @description :: Server-side logic for managing registers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  register:function(req, res){
  var username = req.param('username');
  var password = req.param('password');
  var first_name = req.param('first_name');
  var last_name = req.param('last_name');

  res.view('user/registerStatus', {
    username: username,
    password: password,
    first_name: first_name,
    last_name: last_name
  });
 }
}


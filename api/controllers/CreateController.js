module.exports = {
  register: function (req, res) {
    var username = req.param('username');
    var password = req.param('password');
    var first_name = req.param('first_name');
    var last_name = req.param('last_name');
    var email = req.param('email');

    console.log(password);
    console.log(last_name);

    User.create({username:username, password:password, first_name:first_name, last_name:last_name, email:email}).exec(function (err, data){
      if(err) {
        return res.send('cannot add user to database');
      }

      res.redirect('/login');
      });
    },

  edit:function (req, res){  //edit function provides for the users that want to recreate their profiles.
      var id = req.param('id');
      var first_name = req.param('first_name');
      var last_name = req.param('last_name');
      var email = req.param('email');

      // id:id where, find the id if it correct 
      User.update({id:id},{first_name:first_name, last_name:last_name, email:email}).exec(function(err,data){ 
        if(err){
          return res.send('cannot update');
        }
        res.send('update success');
      });
    }
  }

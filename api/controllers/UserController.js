/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getUser:function(req,res){
    User.find().exec(function(err, results){// test is name of function, req = request, res = respone
      if(err){
        console.error(err);
        return res.send('err');
      }
      console.log('successfully calling users');
      return res.view('user/users',{users:results});
    });
  },

  login:function(req,res){
    var username = req.param('username'); 
    var password = req.param('password');
    //findOne find only one data info that first found.
    User.findOne({username:username,password:password}).exec(function(err, result){
      if(err){
        return res.send(err);
      }
      if(result){
        console.log(result);
        req.session.userid = result.id;
        req.session.usertype = result.type;
        return res.redirect('/diy');
      }
       return res.view('user/login',{error:"username or password incorrect"});
    }); //find the data infomation from the database
  },

  logout:function(req,res){
    req.session.destroy();
    res.view('user/login',{error:"thank for visiting"});
  },
  
  profile:function(req,res){
    var id = req.session.userid;
    var first_name = req.session.first_name;
    var last_name = req.session.last_name;
    var email = req.session.email;
    var createdAt = req.session.createdAt;
    console.log("user id " + id);
    User.findOne({id:id}).exec(function (err,result) {
    if(err){
        return res.send(err);
      }
      if(result){
        console.log(result);
    
        return res.view('user/profile',{users:result});
      }
       
       return res.send("profile not found");
    });
  },

  edit:function(req,res){
    User.findOne({id:req.session.userid}).exec(function(err,result){
      if(err){
        return res.send(err);
      }
        return res.view('user/edit',{users:result});
      });
  },

  update: function(req,res){
    var id = req.session.userid;
    var first_name = req.param('first_name');
    var last_name = req.param('last_name');
    var email = req.param('email');

    User.update({id:req.session.userid},{first_name:first_name, last_name:last_name, email:email}).exec(function(err,result){
      if(err){
        console.log(err);
        return res.send('err');
      }
         console.log('result'+result);
         res.redirect('/profile');
    });
  
  },
  
 delete: function (req, res){
    console.log(req.param('id'));
    User.destroy({id:req.param('id')}).exec(function(err){
      if(err){

          return res.send('cannot delete')
        }
        // res.send('category has been added');
        console.log('deleted ');
        res.redirect('/user');
    });
    return false;

}

}
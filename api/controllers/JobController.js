var request = require('request');
var request2 = require('fs');
module.exports = {


	job: function(req, res, options){
		var user_id = req.session.userid;
		var name = req.param('name');
		var user_name = req.param('user_name');
		var price = req.param('price');
		var width = req.param('width');
		var height = req.param('height');
		var job_path = req.param('job_path').replace(/^data:image\/png;base64,/, "");
		var picture_name = Date.now()+".png";

		Job.create({user_id:req.session.userid,name:name, user_name:user_name, price:parseInt(price), width:width, height:height, job_path:job_path, picture_name:picture_name}).exec(function(err,data){
			if(err){
				console.log(err);
				return res.send('err');
			}

		
		require('fs').writeFile("./assets/"+picture_name, job_path, 'base64', function(err){
			if(err){
				return res.send(err);
			}
		

			request.post({
	 			form: { method: 'credit',
	 					username: 'max13',
	 					password: '0eb8e1',
	 					from: '0000',
	 					to: '0864113601',
	 					message: 'user has sent a job'
	 			       				},
	 		
	 					url: 'http://www.thsms.com/api/rest',
			}, function(err, httpResponse, body) {
  			if (err) {
   			 console.log('Error :', err);
   			 return
			  }
			 console.log(' Body :', body);	
			 res.redirect('/diy');
			});
		});
		});
	
	},

		dojob: function(req, res){
			Job.find().exec(function(err, results){
				if(err){
					return res.send('err');
				}
				res.view('job/dojob',{jobs:results});
			});
		},

		jobowner: function(req, res){
			Job.find({user_id:req.session.userid}).exec(function(err, results){
				if(err){
					return res.send('err');
				}
				res.view('job/edit',{jobs:results});
	
		});
	},

		delete: function(req, res){ 

		 console.log(req.param('id'));
		Job.destroy({id:req.param('id')}).exec(function(err){
			if(err){

					return res.send('cannot delete')
				}
				// res.send('category has been added');
				res.redirect('/job/dojob');
		});
		return false;
	},

}
// 	sendsms: function(options, messages){
// 		    request.post({
// 	 			form: { method: 'send',
// 	 					username: 'max13',
// 	 					password: '0eb8e1',
// 	 					from: '0000',
// 	 					to: '0864113601',
// 	 					message: 'user has sent a job'
// 	 			       				},
	 		
// 	 			url: 'http://www.thsms.com/api/rest',
// 			}, function(err, httpResponse, body) {
//   			if (err) {
//    			 console.log('Error :', err)
//    			 return
// 			  }
// 			 console.log(' Body :', body)	
// 		});
// 	},

// }

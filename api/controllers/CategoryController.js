module.exports ={
	category: function (req, res){
    
    	Category.find().exec(function(err, results){// test is name of function, req = request, res = respone
			if(err){
        		console.error(err);
        		return res.send('err');
      		}
      		console.log('success');
      		return res.view('category/index',{categories:results});
    	});
	
	},
	addcategory: function (req, res){
			var name = req.param('name');
			
			Category.create({name:name}).exec(function (err, data){
				if(err){
					console.log(err);
					return res.view('category/addcategory',{error:'cannot add category'});
				}
				// res.send('category has been added');
				res.redirect('/category'); 
			});
	},
	delete: function(req, res){
		console.log(req.param('id'));
		Category.destroy({id:req.param('id')}).exec(function(err){
		
			if(err){

					return res.send('cannot delete')
				}
				// res.send('category has been added');
				res.redirect('/category');
		});
		return false;
	},
	edit: function(req, res){
		Category.findOne({id:req.param('id')}).exec(function(err,result){
			if(err){

				return res.view('category/index',{error:'cannot edit this one'});
			}
				return res.view('category/edit', {categories: result});
		});
	},
	update: function(req,res){
		var id = req.param('id');
		var name = req.param('name');

		Category.update({id:id},{name:name}).exec(function(err){
			if(err){
				return res.send('cannot update');
			}
			res.redirect('/category');
		
		});

	}

}
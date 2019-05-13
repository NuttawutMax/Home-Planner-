module.exports = {

	addview: function (req, res){
		this.showAddView(res, '');
	},

	add: function (req, res){ //add shopping list to the shop
		var category_id = req.param('category_id');
		var title = req.param('title');
		var description = req.param('description');
		var width = req.param('width');
		var height = req.param('height');
		var price = req.param('price');

		var _this = this;

		Item.create({category_id:parseInt(category_id), title:title, description:description, width:width, height:height, price:parseInt(price)}).exec(function(err,data){
			if(err) {
	        return _this.showAddView(res, 'cannot add item');
	      }
	      res.redirect('/item');
		});
	},




	showAddView: function(res, errMessage){
		Category.find().exec(function(err,results){
			if(err){
				console.log(err);
				return res.send('cannot processed');
			}
			return res.view('item/additem',{categories:results, error:errMessage});
		});
	},

	item: function (req,res){
		Item.find().exec(function(err, results){
			if(err){
				console.log(err);
				return res.send('err');
			}
			console.log('item has been called')
			 return res.view('item/doitem',{items:results});
		});
	},

	edit: function (req, res){
		Item.findOne({id:req.param('id')}).exec(function(err,result){
			if(err){
				return res.send('cannot edit');
			}
			Category.find().exec(function(err, category){
				if(err){
					return res.send('err');
				}
				return res.view('item/edit',{items:result, categories:category});
			});
		});
	},

	update: function (req, res){
		var id = req.param('id');
		var category_id = req.param('category_id'); 
		var title = req.param('title');
		var description = req.param('description');
		var width = req.param('width');
		var height = req.param('height');
		var price = req.param('price');
		var picture_path = req.param('picture_path');
		
		console.log(id);

			// picture_path = fileName;
			// id = fileUID;
		Item.update({id:id},{category_id:parseInt(category_id),title:title, description:description, width:width, height:height, price:parseInt(price)}).exec(function(err){
			if(err){
				console.log(err);
				return res.send('life is suck');
			}
				res.redirect('/item');
		});
	},
	
	trash: function (req, res){
		console.log(req.param('id'));
		Item.destroy({id:req.param('id')}).exec(function(err){
			if(err){

					return res.send('cannot delete')
				}
				// res.send('category has been added');
				res.redirect('/item');
		});
		return false;
	},

	edit2: function (req, res){
		Item.findOne({id:req.param('id')}).exec(function(err,result){
			if(err){
				return res.send('cannot edit');
			}
			Category.find().exec(function(err, category){
				if(err){
					return res.send('err');
				}
				return res.view('item/upload',{items:result, categories:category});
			});
		});
	},

	// 	uploadFiles: function(req, res){
	// 	var id = req.param('id');
	// 	var picture_path = req.param('picture_path');
		

	// 	req.file('picture_path').upload({dirname: "../../assets/pic_items"},function (err, uploadedFiles){
	// 		if (err) {
	// 			return res.send(err);
	// 		}	
	// 		// console.log(uploadedFiles);
	// 		//  return res.json({message: uploadedFiles.length + ' files(s) uploaded successfully'});
	// 		console.log(uploadedFiles);
	// 		if (uploadedFiles.length === 0){
	// 			console.log(uploadedFiles);
	// 			return res.serverError('no file was uploaded'); 

	// 		}

	// 		// var fileName = uploadedFiles[0].filename;
	// 		picture_path = uploadedFiles[0].fd.split('\\').pop();
			
	// 		// picture_path = fileName;
	// 		// id = fileUID;

	// 		Item.update({id:id},{picture_path:picture_path}).exec(function(err){
	// 			if (err){
	// 				return res.send(err);
	// 			} 
	// 				return res.redirect('/diy');
	// 		});	
	// 	});
	// },

	uploadFiles: function(req, res){
		var id = req.param('id');
		var picture_path = req.param('picture_path');
		

		req.file('picture_path').upload({dirname: "../../assets/pic_items"},function (err, uploadedFiles){
			if (err) {
				return res.send(err);
			}	
			// console.log(uploadedFiles);
			//  return res.json({message: uploadedFiles.length + ' files(s) uploaded successfully'});
			console.log(uploadedFiles);
			if (uploadedFiles.length){
				picture_path = uploadedFiles[0].fd.split('\\').pop();
			}  
			// var fileName = uploadedFiles[0].filename;
			// picture_path = fileName;

			Item.update({id:id},{picture_path:picture_path}).exec(function(err){
				if (err){
					return res.send(err);
				} 
					return res.redirect('/item');

			});	
		});
	},
	
		uploadAnimes: function(req, res){
		var id = req.param('id');
		var anime_path = req.param('anime_path');
		
		req.file('anime_path').upload({dirname: "../../assets/anime_items"},function (err2, uploadedFile){
			if (err2) {
				return res.send(err2);
			}
			if (uploadedFile.length){
				anime_path = uploadedFile[0].fd.split('\\').pop();
			} 


			Item.update({id:id},{anime_path:anime_path}).exec(function(err){
				if (err){
					return res.send(err);
				} 
					return res.redirect('/item');

			});	
		});
	},
}
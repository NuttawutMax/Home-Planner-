module.exports = { //export function
	login:function(req,res){
	var username = req.param('username');// test is name of function, req = request, res = respone
	var password = req.param('password');
		res.send(username+password); // res.send, export est
	}
}

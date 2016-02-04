var data = require("../data.json");

exports.addFriend = function(req, res) {  
	// Your code goes here
	var newFriend = {
		"name": req.query.name,
		"desc:" : req.query.description,
		"image" : "http://lorempixel.com/400/400/people"
	};
	
	data["friends"].push(newFriend);
	res.render('add');
}
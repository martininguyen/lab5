// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('index',{
		'friends':[
		{
			'image': 'http://lorempixel.com/500/500/people',
			'name' : 'Doug Engelbart',
			'desc' : 'All my friends are imaginary.'
		},
		{
			'image': 'http://lorempixel.com/500/500/people',
			'name' : 'Ivan Sutherland',
			'desc' : 'All my friends are imaginary.'
		},
		{
			'image': 'http://lorempixel.com/500/500/people',
			'name' : 'JCR Licklider',
			'desc' : 'All my friends are imaginary.'
		},
		]
	});
};
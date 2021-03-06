var fs = require('fs');

module.exports = function(app, express, vars){
    fs.readdir(__dirname + '/controllers', function(err, files){
	    if (err) throw err;
	    files.forEach(function(file){
		    var name = file.replace('.js', '');
		    if (name[name.length - 1] != '~'
			&& name[name.length - 1] != '#'
			&& name[0] != '.')
			require('./controllers/' + name)(app, express, vars);
		});
	});
};


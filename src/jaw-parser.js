var fs = require("fs");
var DomParser = require("dom-parser");
var parser = new DomParser();



//parser puts the scripts object in the right place
var jaw_parser = function(filename){
	//getDocument(filename, function(err, document){
		/*
		if(err) throw new JawError(err);
		scripts = document.body.getElementsByTagName("script");
		for(var script in scripts){
			directories = scripts.getAttribute("directory");
			content = scripts.value;
			fs.writeFile(directory, content, function(err, response){
				if(err) throw new JawError(err);
				else new SuccessHandler(response);
			});
		}*/
	//});
}




function getDocument(filename, callback){
	fs.readFileSync(filename, function(err, html){
		cosole.log(html);
		/*if(err) callback(err);
		else {
			callback(html);
		}*/
	});
}




function JawError(err){
	return Error(err);
}




function SuccessHandler(response){
	return console.log(response);
}





module.exports = {
	parse:jaw_parser
};
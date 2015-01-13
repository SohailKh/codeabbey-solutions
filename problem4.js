// var text = input();
function minimumOfTwo(text) {
	var input = text.split('\n');
	var output = '';
	for (var i = 0; i < input.length; i++) {
		if (i === 0) continue; //Skip # of lines
		var line = input[i].split(' ');
		var lineMin = (parseInt(line[0]) > parseInt(line[1])) ? parseInt(line[1]) : parseInt(line[0]);
		output += (lineMin + ' ');
	}
	console.log(output);
		// output(output);
}

fs = require('fs');
fs.readFile('problem4_input.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log("Error in reading file: "+err);
  }
 	minimumOfTwo(data);
});

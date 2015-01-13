// var text = input();
function minimumOfLine(text) {
	var input = text.split('\n');
	var output = '';
	for (var i = 0; i < input.length; i++) {
		if (i === 0) continue; //Skip # of lines
		var line = input[i].split(' ');
		var lineMin = '';
		for (var n = 0; n < line.length; n++) {
			lineMin = (parseInt(lineMin) < parseInt(line[n])) ? lineMin : line[n];
		}
		output += (lineMin + ' ');
	}
	console.log(output);
		// output(output);
}

fs = require('fs');
fs.readFile('problem5_input.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log("Error in reading file: "+err);
  }
 	minimumOfLine(data);
});

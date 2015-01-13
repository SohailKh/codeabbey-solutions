function returnCombinedLines(text) {
	var input = text.split('\n');
	var output = '';
	for (var i = 0; i < input.length; i++) {
		if (i === 0) continue; //Skip # of lines
		var line = input[i].split(' ');
		var lineSum = parseInt(line[0]) + parseInt(line[1]);
		if (lineSum % 1 === 0) {output += (lineSum + ' ');} // Check for integer
	}
	console.log(output);
}

fs = require('fs');
fs.readFile('problem2_input.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log("Error in reading file: "+err);
  }
 	returnCombinedLines(data);
});

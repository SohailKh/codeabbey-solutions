fs = require('fs');
fs.readFile('problem2_input.txt', 'utf8', function (err,data) {
  if (err) {return console.log("Error in reading file: "+err);}
  
 	var output = 0;
  var line = data.split('\n')[1].split(' ');
  for (i = 0; i < line.length; i++) {
  	output += parseInt(line[i]);
  }

  console.log(output);

});

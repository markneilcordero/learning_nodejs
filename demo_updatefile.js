var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Lalala', function (err) {
	if (err) throw err;
	console.log('Replaced!');
});
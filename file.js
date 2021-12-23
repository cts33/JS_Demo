const fs = require('fs');

fs.readFile('./9.DOM上.html', 'utf-8', (err, doc) => {
	//if err not nul，打印出来
	if (err) {
		console.log(err);
	} else {
		console.log(doc);
	}
});

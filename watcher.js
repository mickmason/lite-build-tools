const fs = require('fs');

fs.watch('./app', {
		recursive: true	
	}, (eventType, filename) => {
		console.log(`--watcher.js: ${eventType}`);	
		console.log(`--watcher.js: ${filename}`);
});
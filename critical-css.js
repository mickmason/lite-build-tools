const fs = require('fs');
const path = require('path');
const critical = require('critical');
const arguments = process.argv;


/* 
	For all HTML files
	
	I need a path for a CSS file
	I need a single filepath or a directory path for HTML file(s)
		Check if a filepath or a directory name has been given
			if argv[2] == .html 
			else if argv[2] == path
			
		Then	if filepath do
				create critical options with filename as HTMLsource, CSS
				fs.readFile(filepath)
					critical.generate()  
			else if directory do
				foreach htmlfile
					create critical options with htmlFile, CSS file
					fs.readFile(filepath)
					critical.generate() with filename as HTMLsource
*/

let cssPath = null;
let sourcePathType = 'F'; 
let criticalOptions = {
	base: './',
	inline: true,
	minify: true,
	src: '',	
	dimensions: [{
			width: 360,
			height: 640
		 },
		 {
			width: 1366,
			height: 768
		 },
		{
			width: 1440,
			height: 900
		},
		{
			width: 1920,
			height: 1080
	}]
};

if (!arguments[2] || !arguments[3]) {
	throw new Error('Critical path CSS: Arguments must be a CSS filepath or directory name.');
	process.exit(1);
}
try {
	if (fs.statSync(arguments[2]).isFile()) {
		criticalOptions.src = arguments[2];
		criticalOptions.dest = arguments[2];
		critical.generate(criticalOptions);
	} else if (fs.statSync(arguments[2]).isDirectory()) {
		sourcePath = arguments[2];
		sourcePathType = 'D';
	} else {
		throw new Error('Critical path CSS: Arguments must be a HTML filepath or directory name.');
	}
	
} catch (e) {
	console.error('Critical path CSS: Arguments must be a HTML filepath or directory name, followed by a CSS filepath');
	console.error(e.message);
	process.exit(1);
}


/*


*/

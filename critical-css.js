(function () {
	const fs = require('fs');
	const path = require('path');
	const critical = require('critical');
	const yargs = require('yargs');
	const arguments = process.argv.slice(2);

	/*
	 *** Set up Command line arguments to the script 
	*/
	const argv = yargs.option('base', {
		alias: 'b',
		description: 'Critical base directory',
		type: 'string'
	}).option('inline', {
		alias: 'i',
		description: 'Write critical styles inline',
		type: 'boolean'
	}).option('css', {
		alias: 'c',
		description: 'CSS source file',
		type: 'string'
	}).array('css').option('width', {
		alias: 'w',
		description: 'Target viewport width',
		type: 'number'
	}).option('height', {
		alias: 't',
		description: 'Target viewport height',
		type: 'number'
	}).option('dimensions', {
		alias: 'n',
		description: 'Target viewport dimensions',
		type: 'string'
	}).array('dimensions').option('dest', {
		alias: 'd',
		description: 'Provide a file for output',
		type: 'string'
	}).option('minify', {
		alias: 'm',
		description: 'Minify output',
		type: 'boolean'
	}).option('ignore', {
		alias: 'g',
		description: 'Minify output',
		type: 'string'
	}).array('ignore')
	.argv;	
	
	/*
	 *** Options for critical 
	*/
	let criticalOptions = {} ;

	/* 
	 *** Search for config file 
	*/
	const fsFiles = fs.readdirSync('./'); 
	if (fsFiles.includes('critical-css.config.js')) {
			Object.assign(criticalOptions, require('./'+fsFiles[fsFiles.indexOf('critical-css.config.js')]));
	}
	
	/* 
	 *** Handle command line arguments 
	*/	
	criticalOptions.base = (argv.base) ? (argv.base) : criticalOptions.base; 
	criticalOptions.inline = (argv.inline || argv.dest === undefined) ? true : criticalOptions.inline;
	criticalOptions.minify = (argv.minify) ? true : criticalOptions.minify;
	criticalOptions.src = (argv._[0]) ?  (argv._[0]) : criticalOptions.src;	
	criticalOptions.dest = (argv.dest) ? (argv.dest) : (criticalOptions.dest !== undefined) ? criticalOptions.dest : criticalOptions.src; 
	criticalOptions.css = (argv.css) ? (argv.css) : criticalOptions.css; 
	criticalOptions.width = (argv.width) ? (argv.width) : criticalOptions.width; 
	criticalOptions.height = (argv.height) ? (argv.height) : criticalOptions.height; 
	criticalOptions.dimensions = (argv.dimensions) ? (argv.dimensions) : criticalOptions.dimensions;
	
	/* Give it a twirl */
	try {
		critical.generate(criticalOptions);
	} catch (e) {
		console.error('Critical path CSS: Arguments must be a HTML filepath or directory name, followed by a CSS filepath');
		console.error(e.message);
	}
	
	/* Fin */
})();
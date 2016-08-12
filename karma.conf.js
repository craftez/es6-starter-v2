module.exports = function(config) {
	var configuration = {
		// base path used to resolve all patterns
		basePath: '',
		
		//frameworks to use for testing
		frameworks: ['mocha', 'chai'],
		
		//files globs to load
		files: [{pattern: 'spec.bundle.js', watched: false}],
		
		exclude: [],
		
		//preprocessors to use
		preprocessors: { 'spec.bundle.js': ['webpack', 'sourcemap']},
		
		//webpack config
		webpack: {
			devtool: 'inline-source-map',
			module: {
				loaders: [
					{ test: /\.js/, exclude: [/app\/lib/, /node_modules/], loader: 'istanbul-instrumenter!babel' },
					{ test: /\.html/, loader: 'raw' },
					{ test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap']},
					{ test: /\.css$/, loader: 'style!css' }
				]
			}
		},

		webpackServer: {
		  noInfo: true // prevent console spamming when running in Karma!
		},
		
		reporters: ['mocha', 'progress', 'coverage'],

		coverageReporter: {
			dir: 'coverage/',
			reporters: [
				{type: 'text-summary'},
				{type: 'html'}
			]
		},


		port: 9876,
		
		colors:true,
		
		logLevel: config.LOG_INFO,
		
		autoWatch: true,
		
		browsers: ['Chrome'],
		
		// if true, Karma runs tests once and exits
		singleRun: true
		
	};
	
	config.set(configuration);
}
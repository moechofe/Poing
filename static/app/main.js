require({
	paths: {
		'asset': '../lib/asset',
		'json': '../lib/json',
		'log': '../lib/log',
		'text': '../lib/text'
	},
	shim: {
	},
	config: {
		config: {
			debug: true
		}
	}
},
['app'],
function(app){(function(document,window){

console.log("Running app");

})(document,window);});


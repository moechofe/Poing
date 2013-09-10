define(['asset','cfg'], function(Asset,cfg){

var asset = new Asset(cfg.assetLoadingParallel);

function Loading(){};

Loading.prototype = {

run: function LoadingRun(cb)
{
	console.log("Loading assets");

	asset.load([

		// List of ordered assets to load.
		'gfx/1/ball.png'

	],function(err,files){if(err)return cb(err);(function(

		// Reference ot the orderer loaded assets.
		ball_1

	){

		console.log("Initializing assets");

		cb(null);

	}).apply(this, files);});
}

};

return new Loading;

});

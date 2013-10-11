define(['game','asset','cfg'], function(Game,Asset,cfg){

var asset = new Asset(cfg.assetLoadingParallel);

function Loading(){};

Loading.prototype = {

run: function LoadingRun(cb)
{
	console.log("Loading assets");

	asset.load([

		// List of ordered assets to load.
		'gfx/1/ball.png',

		'gfx/1/bricks.png',

	],function(err,files){if(err)return cb(err);(function(

		// Reference ot the orderer loaded assets.
		ball_1,

		bricks_1

	){

		console.log("Initializing assets");

		Game.ball.init(0,0, 3,3, ball_1);

		Game.bricks[0].init(0,0, 7,11, bricks_1);

		cb(null);

	}).apply(this, files);});
}

};

return new Loading;

});

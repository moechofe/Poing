define(['env'], function(env){

var config = null;

// Temporary value used to swap two values.
var t = 0;

function Config(){}

Config.prototype = {

assetLoadingParallel: 4,

maxScale: 1,

ballMax: 16,

brickWidth: 7,
brickHeight: 11,
brickSpace: 1,

bricksRows: 15,
bricksCols: 27,
bricksOffsetSingle: 20,

borderThickness: 1,
borderStyle: '#fff',
wallThickness: 1,
wallStyle: '#00f',
paddleThickness: 3,
safeWidth: 60,

ballToOriginX: -1,
ballToOriginY: -1,

ballsClear: 'rgba(0,0,0,1)',
ballsCover: 'rgba(0,0,0,0.125)',

collidesBoard: '#00f',
collidesWall: '#0f0',

collidesReactions: {
	length: 8,
	// Horizontal wall
	0: {model:new Uint8Array([0,0,0, 0,0,0, 1,1,1]), apply:function(b){b.sy = -b.sy;}},
	1: {model:new Uint8Array([1,1,1, 0,0,0, 0,0,0]), apply:function(b){b.sy = -b.sy;}},
	// Vertical wall
	2: {model:new Uint8Array([0,0,1, 0,0,1, 0,0,1]), apply:function(b){b.sx = -b.sx;}},
	3: {model:new Uint8Array([1,0,0, 1,0,0, 1,0,0]), apply:function(b){b.sx = -b.sx;}},
	// Corner
	4: {model:new Uint8Array([0,0,1, 0,0,1, 1,1,1]), apply:function(b){b.sx = -b.sx; b.sy = -b.sy; console.log("Gotcha! model 4");}},
	5: {model:new Uint8Array([1,0,0, 1,0,0, 1,1,1]), apply:function(b){b.sx = -b.sx; b.sy = -b.sy; console.log("Gotcha! model 5");}},
	6: {model:new Uint8Array([1,1,1, 1,0,0, 1,0,0]), apply:function(b){b.sx = -b.sx; b.sy = -b.sy; console.log("Gotcha! model 6");}},
	7: {model:new Uint8Array([1,1,1, 0,0,1, 0,0,1]), apply:function(b){b.sx = -b.sx; b.sy = -b.sy; console.log("Gotcha! model 7");}},
	// Vertex
	8: {model: new Uint8Array([1,0,0, 0,0,0, 0,0,0]), apply:function(b){t=b.sx; b.sx = -b.sy; b.sy = -t;}},
	9: {model: new Uint8Array([0,0,1, 0,0,0, 0,0,0]), apply:function(b){t=b.sx; b.sx = -b.sy; b.sy = -t;}},
	10: {model: new Uint8Array([0,0,0, 0,0,0, 1,0,0]), apply:function(b){t=b.sx; b.sx = -b.sy; b.sy = -t;}},
	11: {model: new Uint8Array([0,0,0, 0,0,0, 0,0,1]), apply:function(b){t=b.sx; b.sx = -b.sy; b.sy = -t;}},
}

};

config = new Config;
if(env.debug) window.Config = config;
return config;

});

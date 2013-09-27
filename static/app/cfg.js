define(['env'], function(env){

var config = null;

function Config(){}

Config.prototype = {

assetLoadingParallel: 4,

maxScale: 1,

ballMax: 16,

brickWidth: 7,
brickHeight: 11,
brickSpace: 1,

tileRows: 15,
tileCols: 27,

borderThickness: 1,
borderStyle: '#fff',
wallThickness: 1,
paddleThickness: 3,
safeWidth: 60,

ballsClear: 'rgba(0,0,0,1)',
ballsCover: 'rgba(0,0,0,0.125)',

collidesBoard: '#00f',
collidesWall: 'rgb(0,255,0)',

collidesReactions: {
	length: 4,
	// Horzontal wall
	0: {model:new Uint8Array([0,0,0, 0,0,0, 1,1,1]), apply:function(b){b.sy = -b.sy;}},
	1: {model:new Uint8Array([1,1,1, 0,0,0, 0,0,0]), apply:function(b){b.sy = -b.sy;}},
	// Vertical wall
	2: {model:new Uint8Array([0,0,1, 0,0,1, 0,0,1]), apply:function(b){b.sx = -b.sx;}},
	3: {model:new Uint8Array([1,0,0, 1,0,0, 1,0,0]), apply:function(b){b.sx = -b.sx;}}
}

};

config = new Config;
if(env.debug) window.Config = config;
return config;

});

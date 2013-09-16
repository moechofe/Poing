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
wallThickness: 1,
paddleThickness: 3,
safeWidth: 60,

};

config = new Config;
if(env.debug) window.Config = config;
return config;

});

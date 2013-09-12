define(['env'], function(env){

var config = null;

function Config(){}

Config.prototype = {

assetLoadingParallel: 4,

ballMax: 16,

brickWidth: 7,
brickHeight: 11,
brickSpace: 1

};

config = new Config;
if(env.debug) window.Config = config;
return config;

});

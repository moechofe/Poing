define(['env'], function(env){

var game = null;

function Game(){}

Game.prototype = {

ball: {
	1: null,
	2: null,
	3: null,
	4: null,
	5: null }

};

game = new Game;
if(env.debug) window.Game = game;
return game;

});

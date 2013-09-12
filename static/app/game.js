define(['env'], function(env){

var game = null;

function Game(){}

Game.prototype = {

ballImage: null

};

game = new Game;
if(env.debug) window.Game = game;
return game;

});

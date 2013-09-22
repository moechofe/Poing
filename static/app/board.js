define(['tiles','render','cfg','env'], function(Tiles,Render,cfg,env){

var board = null;

function Board()
{
	this.tileX = 0;
}

Board.prototype = {

reset: function BoardReset(tileX)
{
	this.tileX = tileX;
},

update: function BoardUpdate()
{
	Render.rect(Render.walls, 0,0, this.width,cfg.borderThickness, cfg.borderStyle);
	Render.rect(Render.walls, 0,this.height-cfg.borderThickness, this.width,cfg.borderThickness, cfg.borderStyle);

	Render.rect(Render.collides, 2,180,300,2, cfg.collidesBoard);
	Render.rect(Render.collides, 304,2,2,180, cfg.collidesBoard);
	Render.rect(Render.collides, 0,0,2,180, cfg.collidesBoard);
	Render.rect(Render.collides, 0,0,300,2, cfg.collidesBoard);
},

// Compute the size of the board.
height: Tiles.height + cfg.borderThickness + cfg.borderThickness,
width: Tiles.width + cfg.wallThickness + cfg.paddleThickness + cfg.safeWidth*2,

};

board = new Board;
if(env.debug) window.Board = board;
return board;

});

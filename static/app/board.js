define(['bricks','render','cfg','env'], function(Bricks,Render,cfg,env){

var board = null;

function Board()
{
	this.brick_pos = 0;
}

Board.prototype = {

reset: function BoardReset(brick_pos)
{
	this.brick_pos = brick_pos;
},

update: function BoardUpdate()
{
	Render.rect(Render.walls, 0,0, this.width,cfg.borderThickness, cfg.borderStyle);
	Render.rect(Render.walls, 0,this.height-cfg.borderThickness, this.width,cfg.borderThickness, cfg.borderStyle);

	Render.rect(Render.collides, 0,0, this.width,cfg.borderThickness, cfg.collidesBoard);
	Render.rect(Render.collides, 0,this.height-cfg.borderThickness, this.width,cfg.borderThickness, cfg.collidesBoard);
	Render.rect(Render.collides, 0,cfg.borderThickness, cfg.wallThickness,this.height-cfg.borderThickness-cfg.borderThickness, cfg.collidesWall);
	Render.rect(Render.collides, this.width-cfg.wallThickness,cfg.borderThickness, this.width,this.height-cfg.borderThickness-cfg.borderThickness, cfg.collidesWall);
},

// Compute the size of the board.
height: Bricks.height + cfg.borderThickness + cfg.borderThickness,
width: Bricks.width + cfg.wallThickness + cfg.paddleThickness + cfg.safeWidth*2,

};

board = new Board;
if(env.debug) window.Board = board;
return board;

});

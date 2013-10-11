define(['brick','cfg','env'], function(Brick,cfg,env){

// For cols and rows iterator.
var c = 0;
var r = 0;

// Singleton instance of the Bricks object.
var bricks = null;

function Bricks(cols, rows)
{
	this.cols = cols;
	this.rows = rows;

	this.list = new Array(cols);
	for (c=0; c<cols; c++)
		this.list[c] = new Array(rows);
}

Bricks.prototype = {

// Compute the size of the zones occupied by the Brick Sprites.
width: (cfg.bricksCols * cfg.brickWidth) + (cfg.bricksRows * cfg.brickSpace) + cfg.brickSpace,
height: (cfg.bricksRows * cfg.brickHeight) + (cfg.bricksCols * cfg.brickSpace) + cfg.brickSpace,

init: function BricksInit(bricks_sprite)
{
	Brick.sprite = bricks_sprite;
	Brick.container = bricks;

	for (c=0; c<this.cols; c++)
		for (r=0; r<this.rows; r++)
			this.list[c][r] = new Brick(c,r);
}

};

bricks = new Bricks(cfg.bricksCols, cfg.bricksRows);
if(env.debug) window.Bricks = bricks;
return bricks;

});

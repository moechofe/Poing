define(['brick','render','cfg','env'], function(Brick,Render,cfg,env){

// For cols and rows iterator.
var c = 0;
var r = 0;

// For coords in pixels of current drawn Brick.
var x = 0;
var y = 0;

// Singleton instance of the Bricks object.
var bricks = null;

// Reference to the list that contain the Sprite objects that contain the Bricks gfx.
var sprites = null;

function Bricks(cols, rows)
{
	this.cols = cols;
	this.rows = rows;

	this.list = new Array(cols);
	for (c=0; c<cols; c++)
		this.list[c] = new Array(rows);

	// Offset of the whole bricks zone in pixels.
	this.x = 0;
	this.y = 0;
}

Bricks.prototype = {

// Compute the size of the zones occupied by the Brick Sprites.
width: (cfg.bricksCols * cfg.brickWidth) + (cfg.bricksRows * cfg.brickSpace) + cfg.brickSpace,
height: (cfg.bricksRows * cfg.brickHeight) + (cfg.bricksCols * cfg.brickSpace) + cfg.brickSpace,

// Offset of the zone.
top: cfg.borderThickness + cfg.brickSpace,
left: cfg.wallThickness + cfg.brickSpace,

spaceX: cfg.brickWidth + cfg.brickSpace,
spaceY: cfg.brickHeight + cfg.brickSpace,

init: function BricksInit(bricks_sprites)
{
	Brick.sprites = sprites = bricks_sprites;
	Brick.container = bricks;

	for (c=0; c<this.cols; c++)
		for (r=0; r<this.rows; r++)
			this.list[c][r] = new Brick(c,r);

	this.y = bricks.top;
},

reset: function BricksReset()
{
	// TODO: Clean the screen and the collision canvas
	return this;
},

setUpLeft: function BricksSetUpLeft()
{
	this.x = this.left + cfg.bricksOffsetSingle;

	this.placeOne(0,0,0);
	this.placeOne(0,1,0);
	this.placeOne(0,1,1);
},

placeOne: function BricksPlaceOne(i,c,r)
{
	x = c * this.spaceX + this.x;
	y = r * this.spaceY + this.y;

	this.list[c][r].reset();

	Render.drawSprite(Render.walls, x, y, sprites[i]);
}

};

bricks = new Bricks(cfg.bricksCols, cfg.bricksRows);
if(env.debug) window.Bricks = bricks;
return bricks;

});

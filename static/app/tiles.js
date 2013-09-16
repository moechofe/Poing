define(['tile','cfg','env'], function(Tile,cfg,env){

var i = 0;

var tiles = null;

function Tiles(rows, cols)
{
	this.len = rows * cols;
	this.list = new Array(this.len);
}

Tiles.prototype = {

// Compute the size of the zones occupied by the tiles sprites.
width: (cfg.tileCols * cfg.brickWidth) + (cfg.tileRows * cfg.brickSpace) + cfg.brickSpace,
height: (cfg.tileRows * cfg.brickHeight) + (cfg.tileCols * cfg.brickSpace) + cfg.brickSpace,

init: function TilesInit()
{
	i = this.len;
	while(i--)
		this.list[i] = new Tile(i);
}

};

tiles = new Tiles(cfg.tileRows, cfg.tileCols);
if(env.debug) window.Tiles = tiles;
return tiles;

});

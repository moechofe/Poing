define(['frame','cfg'], function(Frame,cfg){

var s = 0;

var fx = 0;
var fy = 0;
var fw = 0;
var fh = 0;

function Sprite()
{
	switch(cfg.maxScale)
	{
	case 5: this[5] = new Frame();
	case 4: this[4] = new Frame();
	case 3: this[3] = new Frame();
	case 2: this[2] = new Frame();
	case 1: this[1] = new Frame();
	}
}

Sprite.prototype = {

init: function SpriteInit(x,y,w,h)
{
	for(s=0, a=Array.prototype.slice.call(arguments,4); s<a.length; s++)
	{
		fx += x;
		fy += y;
		fw += w;
		fh += h;
		this[s+1].init(arguments[s+4], fx,fy, fw,fh);
	}
}

};

return Sprite;

});

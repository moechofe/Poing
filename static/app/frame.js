define([], function(){

function Frame()
{
	this.img = null;

	this.x = 0;
	this.y = 0;
	this.w = 0;
	this.h = 0;
}

Frame.prototype = {

init: function FrameInit(img, x,y,w,h)
{
	this.img = img;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
}

};

return Frame;

});

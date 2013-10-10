define(['cfg'], function(cfg){

var s = 0;

function Sprite()
{
	this.x = 0;
	this.y = 0;
	this.w = 0;
	this.h = 0;
}

(function(){
var proto = {

init: function SpriteInit()
{
	for(s=0; s<arguments.length; s++)
		this[s] = arguments[s];
}

};

for(s=0; s<cfg.maxScale-1; s++) proto[i] = null;

Sprite.prototype = proto;
})();

return Sprite;

});

define(['cfg'], function(cfg){

var s = 0;

function Sprite(){}

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

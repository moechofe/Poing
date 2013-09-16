define(['env'], function(env){

var s = 0;

function Sprite()
{
    var scale = new Array(env.maxScale-1);
}

Sprite.prototype = {

init: function SpriteInit()
{
    for(s=1; s<arguments.length; s++)
        this.scale[s] = arguments[s];
}

};

return Sprite;

});

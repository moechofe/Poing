define(['render'], function(Render){
// {{{ Brick()

function Brick(col, row)
{
	// Index of the Brick in the Bricks.list
	this.col = col;
	this.row = row;
}

// Reference to the Sprite object that contain the Bricks gfx.
var sprite = null;

// Reference to the container object.
var container = null;

// }}}
Brick.prototype = {
// {{{ .init()

init: function BrickInit()
{
}

// }}}
};
// {{{ sprite, container

Brick.__defineSetter__('sprite', function BrickSpriteSetter(s){
	sprite = s;
});

Brick.__defineSetter__('container', function BrickContainerSetter(c){
	container = c;
});

// }}}

return Brick;

});

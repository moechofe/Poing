define(['render'], function(Render){

// Reference to the list that contain the Sprite objects that contain the Bricks gfx.
var sprites = null;

// Reference to the container object.
var container = null;
// {{{ Brick()

function Brick(col, row)
{
	// Index of the Brick in the Bricks.list
	this.col = col;
	this.row = row;
}

// }}}
Brick.prototype = {
// {{{ .init()

init: function BrickInit()
{
},

reset: function BrickReset()
{
	// TODO: setup life point behavoir of the brick.
}

// }}}
};
// {{{ sprite, container

Brick.__defineSetter__('sprites', function BrickSpritesSetter(s){
	sprites = s;
});

Brick.__defineSetter__('container', function BrickContainerSetter(c){
	container = c;
});

// }}}

return Brick;

});

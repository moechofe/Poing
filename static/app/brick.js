define(['render'], function(Render){

// {{{ Brick()

function Brick(i)
{
	// Index of the Brick in the Bricks.list
	this.i = i;
}

// }}}
Brick.prototype = {
// {{{ .sprites, .container

// List of references to the Sprite objects.
sprites: null,

// Reference to the Sprite object.
container: null,

// }}}
// {{{ .init()

init: function BrickInit()
{
}

// }}}

};

});

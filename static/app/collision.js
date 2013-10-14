define(['env'], function(env){

// References to the canvas context use to check the collisions.
var collides = null;

// Singleton instance of the Collision object.
var collision = null;

// Coords use to populate the data.
var x = 0, y = 0;

// Index in the pixels array.
var i = 0;

// Index in the data array.
var j = 0;

// Two vars used inside a for.
var m = 0, n = 0;

// Offset from the last index of the previous row of pixel to the first of the next row.
var o = 0;

function Collision()
{
	this.pixels = null;
	this.data = new Uint8Array(3*3);
}

Collision.prototype = {

init: function CollisionInit(c)
{
	collides = c;
},

read: function CollisionRead()
{
	this.pixels = collides.getImageData(0,0, collides.canvas.width,collides.canvas.height).data;
},

test: function CollisionTest(px,py)
{
	// Should not be negative or greater than the canvas size if the collisions masks are correctly placed.
	x = px - 1;
	y = py - 1;

	p = y * collides.canvas.width;
	p += x;

	d = 0;

	o = collides.canvas.width - 3;

	for (n=0; n<3; n++)
	{
		for (m=0; m<3; m++)
		{
			if(this.pixels[p]) debugger;
			this.data[d] = this.pixels[p];
			p++;
			d++;
		}
		p += o;
	}
}

};

collision = new Collision();
if(env.debug) window.Collision = collision;
return collision;

});

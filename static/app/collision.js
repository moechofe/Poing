define([], function(){

// References to the canvas use to check the collisions.
var collides = null;

// Singleton instance of the Collision object.
var collision = null;

function Collision()
{
}

Collision.prototype = {

init: function CollisionInit()
{
}

};

Collision.__defineSetter__('collides', function CollisionCollidesSetter(c){
	collides = c;
});

collision = new Collision();
return collision;

});

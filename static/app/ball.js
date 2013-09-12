define(['cfg'], function(cfg){

function Ball()
{
    // Coords
    this.x = 0.0;
    this.y = 0.0;

    // Angle & Speed
    this.a = -1.0;
    this.s = 1.0;
}

Ball.prototype = {

init: function BallInit()
{
}

};

return Ball;

});

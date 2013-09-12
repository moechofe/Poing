define(['ball','cfg','env'], function(Ball,cfg,env){

var i = 0;
var balls = null;

function Balls(length)
{
    this.len = length;
    this.used = new Uint8Array(length);
    this.list = new Array(length);
}

Balls.prototype = {

init: function BallsInit()
{
    i = this.len;
    while(i--)
    {
        this.used[i] = false;
        this.list[i] = new Ball(i);
    }
}

};

balls = new Balls(cfg.ballMax);
if(env.debug) window.Balls = balls;
return balls;

});

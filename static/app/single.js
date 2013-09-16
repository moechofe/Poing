define(['board','env'], function(Board,env){

var single = null;

function Single(){}

Single.prototype = {

init: function SingleInit()
{
},

reset: function SingleReset()
{
	Balls.reset().setUpLeft();
	return this;
},

start: function SingleStart()
{

}

};

single = new Single;
if(env.debug) window.Single = single;
return single;

});

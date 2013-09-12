define(['env'], function(env){

var single = null;

function Single(){}

Single.prototype = {

init: function SingleInit()
{
},

start: function SingleStart()
{
}

};

single = new Single;
if(env.debug) window.Single = single;
return single;

});

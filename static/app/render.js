define(['cfg','env'], function(cfg,env){

function Render()
{
}

Render.prototype = {

init: function RenderInit()
{
}

};

var render = new Render;

if(env.debug) window.Render = render;

return render;

});

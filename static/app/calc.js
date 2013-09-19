define(['env'], function(env){

var calc = null;

var divisions = 512;

function Calc()
{
	this.cos = new Float32Array(divisions);
	this.sin = new Float32Array(divisions);
};

Calc.prototype = {

mod: function CalcMod(a)
{
    return a % divisions;
},

init: function CalcInit()
{
	for(var i=0, m=2*Math.PI/divisions, precision = divisions; i<divisions; i++)
	{
		this.cos[i] = ~~( Math.cos(i*m) * precision ) / precision;
		this.sin[i] = ~~( Math.sin(i*m) * precision ) / precision;
	}
}

};

calc = new Calc;
if(env.debug) window.Calc = calc;
return calc;

});

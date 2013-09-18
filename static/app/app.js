define(['single','loading','balls','board','game','render','calc','env'],function(Single,Loading,Balls,Board,Game,Render,Calc,env){

var app = null;

// Reference to callback functions binded to theirs respective objects.
var game = null;
var warm = null;

function App()
{
	if(env.debug) console.warn("Debug mode is enabled");
}

App.prototype = {

init: function AppInit(document, window)
{
	Render.init('canvas', document, window, Board.width, Board.height);
	Game.init();

	game = this.game.bind(this);
	warm = this.warm.bind(this);
	return this;
},

run: function AppRun()
{
	this.loading();
},

loading: function AppLoading()
{
	Loading.run(warm);
},

warm: function AppWarm()
{
	Calc.init();
	Balls.init(Game.ball);
	Single.init();
	game();
},

game: function AppGame()
{
	Single.reset().start();
}

};

app = new App;
if(env.debug) window.App = app;
return app;

});

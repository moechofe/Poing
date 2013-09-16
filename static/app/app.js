define(['single','loading','balls','board','render','env'],function(Single,Loading,Balls,Board,Render,env){

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

	Balls.context = Render.balls;

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
	Balls.init(Render.balls);
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

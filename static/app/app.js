define(['single','loading','balls','env'],function(Single,Loading,Balls,env){

var app = null;

// Reference to callback functions binded to theirs respective objects.
var game = null;
var warm = null;

function App()
{
    if(env.debug) console.warn("Debug mode is enabled");
}

App.prototype = {

init: function AppInit()
{
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
    Balls.init();
    Single.init();
    game();
},

game: function AppGame()
{
    Single.start();
}

};

app = new App;
if(env.debug) window.App = app;
return app;

});

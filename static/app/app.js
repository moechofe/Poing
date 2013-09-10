define(['loading','env'],function(Loading,env){

// Reference to callback functions binded to theirs respective object.s
var game = null;

function App()
{
}

App.prototype = {

init: function AppInit()
{
	game = this.game.bind(this);
},

run: function AppRun()
{
	this.loading();
},

loading: function AppLoading(cb)
{
	Loading.run(game);
},

game: function AppGame(cb)
{
	console.log("HERE");
}

};

var app = new App;

if(env.debug) window.App = app;

return app;

});

/**
*	Application Main File
*/

var AB = AB || {};

(function( ns ){
	var router = new ns.Router();
		
	var nameView = new ns.view.NameView({
		collection: new ns.collection.NameCollection(),
		el: "#nameList"
	});
	
	// Start history
	Backbone.history.start();
	
	ns.appState = {};
	
	ns.appState.view = {};
	ns.appState.view.name = nameView;
	ns.appState.router = router;
	
	// CSS selector for current view container
	ns.appState.$currentView = $("#addressView");
}( AB ));
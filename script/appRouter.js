/**
*	Application Router
*/

var AB = AB || {};

(function( ns ){
	ns.Router = Backbone.Router.extend({
		routes: {
			"address/:id": "hAddress"
		},
		
		hAddress: function( id ){
			var modelURL = "data/" + id + ".json";
			
			// Remove current view
			if ( ns.appState && ns.appState.currentView ){
				//ns.appState.currentView.remove();
			}
			
			// Clear current view from browser
			if ( ns.appState && ns.appState.$currentView ){
				ns.appState.$currentView.empty();
			}
			
			var addressView = new ns.view.AddressView({
				model: new ns.model.AddressModel({urlRoot: modelURL}),
				el: "#addressView"
			});
			
			// save current view 
			ns.appState = ns.appState || {};
			ns.appState.currentView = addressView;
		}
	});
}( AB ));
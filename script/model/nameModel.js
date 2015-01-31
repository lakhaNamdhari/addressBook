/**
*	Application File
*/

var AB = AB || {};

(function( ns ){
	ns.model = ns.model || {};
	
	ns.model.NameModel = Backbone.Model.extend({
		defaults: {
			name: {
				first : "Test",
				last : "Singh"
			}
		}
	});
}( AB ));
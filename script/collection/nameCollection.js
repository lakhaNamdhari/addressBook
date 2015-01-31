/**
*	Application File
*/

var AB = AB || {};

(function( ns ){
	ns.model = ns.model || {};
	ns.collection = ns.collection || {};
	
	ns.collection.NameCollection = Backbone.Collection.extend({
		model: ns.model.NameModel,
		url: "data/names.json"
	});
}( AB ));
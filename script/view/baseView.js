/**
*	Base View for App.
*
*	All views extend this view
*/

var AB = AB || {};

(function( ns ){
	ns.view = ns.view || {};
	
	ns.view.BaseView = Backbone.View.extend({
		templateURL: '',
		
		loadTemplate : function(){
			if ( this.templateURL.length ){
				return $.ajax({
					url: this.templateURL,
					dataType: "html"
				});
			}
		}
	});
}( AB ));
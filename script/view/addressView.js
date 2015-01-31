/**
*	View for Name component
*/

var AB = AB || {};

(function( ns ){
	ns.view = ns.view || {};
	
	ns.view.AddressView = ns.view.BaseView.extend({
		templateURL: "template/address.html",
		
		initialize: function(){
			var defTemplate = this.loadTemplate();
			
			var defModel = $.Deferred();
			
			var that = this;
			
			// populate collections
			this.model.fetch({
				success: function( collection ){
					defModel.resolve();
				},
				
				error: function(){
					defModel.reject();
				}
			})
			
			// Render, when template and data are successfully loaded
			$.when( defTemplate, defModel ).then(function( data ){
				// Lets compile the template
				that.template = Handlebars.compile( data.shift() );	

				that.render();
			});
		},
		
		render: function(){
			this.$el.append( this.template( { address: this.model.toJSON() } ) );
		}
	});
}( AB ));
/**
*	View for Name component
*/

var AB = AB || {};

(function( ns ){
	ns.view = ns.view || {};
	
	ns.view.NameView = ns.view.BaseView.extend({
		templateURL: "template/name.html",
		
		events: {
			"click a" : "hNameClick"
		},
		
		initialize: function(){
			var defTemplate = this.loadTemplate();
			
			var defCollection = $.Deferred();
			
			var that = this;
			
			// populate collections
			this.collection.fetch({
				success: function( collection ){
					defCollection.resolve();
				},
				
				error: function(){
					defCollection.reject();
				}
			})
			
			// Render, when template and data are successfully loaded
			$.when( defTemplate, defCollection ).then(function( data ){
				// Lets compile the template
				that.template = Handlebars.compile( data.shift() );	
				
				that.render();
			});			
		},
		
		hNameClick: function( e ){
			var item = $( e.target ),
				ul = item.closest("ul"),
				prevItem = ul.data("clicked");
			
			if ( prevItem && prevItem.length ){
				prevItem.removeClass("active")
			}
			item.addClass("active");
			ul.data("clicked", item);
		},
		
		render: function(){
			var i;
			
			this.$el.append( this.template( { names: this.collection.toJSON() } ) );
		}	
	});
}( AB ));
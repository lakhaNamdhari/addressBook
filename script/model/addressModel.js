/**
*	Application File
*/

var AB = AB || {};

(function( ns ){
	ns.model = ns.model || {};
	
	ns.model.AddressModel = Backbone.Model.extend({		
		initialize: function( attr ){
			this.urlRoot = attr.urlRoot;
		},
		
		defaults: {
			name: {
				first : "Test",
				last : "Singh"
			},
			address : {
				line1 : "Some line1 Data",
				city : "Test city",
				state : "Test State",
				zip : "000000",
				country : "Nowhere"
			},
			image : "image/avatar.png",
			phone : "1111111111",
			email : "test@gmail.com"
		}
	});
}( AB ));
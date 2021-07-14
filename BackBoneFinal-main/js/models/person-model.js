app = app || {};

app.models.Person = Backbone.Model.extend({
	defaults: {
		'jmbg': '',
		'Ime': '',
		'Prezime': '',
		'godinarodjenja': '',
		'mestostanovanja': '',
		'adresastanovanja': '',
		'brojclanovaporodice': '',
		'brojtelefona': '',
		'emailadresa': '',
		'status': ''
	},
	
	initialize: function() {
		var self = this;
		if(this.get('status') !== '') {
			self.set('type', 'student');
		} else {
			self.set('type', 'radnik');
		}
	}
	
});

app.collections.People = Backbone.Collection.extend({
	
	model: app.models.Person,
	
	comparator: function(person) {
		return person.get('prezime');
	}
	
});
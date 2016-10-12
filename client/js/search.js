Template.search.rendered = function() {
	$("#search-link").addClass('selected');
	$("#profile-link").removeClass('selected');
	$("#rankings-link").removeClass('selected');
	$("#jokes-link").removeClass('selected');
	$("#login-link").removeClass('selected');
}

Template.search.helpers({
	inputAttributes: function() {
		return { 'class': 'easy-search-input', 'placeholder': 'Start Searching' };
	},
	players: function() {
		return Jokes.find({}, { sort: { createdAt: -1 } });
	},
	selectedName: function() {
		var joke = JokesIndex.config.mongoCollection.findOne({ __originalId: Session.get("selectedJoke") });
		return joke && joke.jokeName;
	},
	index: function () {
		return JokesIndex;
	},
	resultsCount: function() {
		return JokesIndex.getComponentDict().get('count');
	},
	showMore: function() {
		return false;
	},

	renderTmpl: () => Template.renderTemplate

});

Template.User.helpers({
	selected: function() {
		return Session.equals("selectedJoke", this.__originalId) ? "selected" : '';
	},
});

Template.User.events({
	'click': function() {
		Session.set("selectedJoke", this.__originalId);
	}
});
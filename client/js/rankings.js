Template.rankings.rendered = function() {
	$("#rankings-link").addClass('selected');
	$("#profile-link").removeClass('selected');
	$("#jokes-link").removeClass('selected');
	$("#search-link").removeClass('selected');
	$("#login-link").removeClass('selected');
}

Template.rankings.helpers({
	laughKing: function() {
		var laughKing = Meteor.users.findOne({}, {sort: {'profile.laughScore': -1}});
		return laughKing;
	},
	laughKingPic: function() {
		var laughKing = Meteor.users.findOne({}, {sort: {'profile.laughScore': -1}});
		var username = laughKing.username;
		var userId = laughKing.userId;
		var URL = UserImages.findOne({username: username}, {userId: userId});
		return URL
	},

	frownKing: function() {
		var frownKing = Meteor.users.findOne({}, {sort: {'profile.frownScore': -1}});
		return frownKing;
	},
	frownKingPic: function() {
		var laughKing = Meteor.users.findOne({}, {sort: {'profile.frownScore': -1}});
		var username = laughKing.username;
		var userId = laughKing.userId;
		var URL = UserImages.findOne({username: username}, {userId: userId});
		return URL
	},

	pukeKing: function() {
		var pukeKing = Meteor.users.findOne({}, {sort: {'profile.pukeScore': -1}});
		return pukeKing;
	},
	pukeKingPic: function() {
		var laughKing = Meteor.users.findOne({}, {sort: {'profile.pukeScore': -1}});
		var username = laughKing.username;
		var userId = laughKing.userId;
		var URL = UserImages.findOne({username: username}, {userId: userId});
		return URL
	},

});	
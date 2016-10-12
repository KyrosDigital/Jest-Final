if (Meteor.isClient) {
	Meteor.subscribe('Jokes');
	Meteor.subscribe('Users');
	Meteor.subscribe('ProfileImages');
	Meteor.subscribe('UserImages');
}
if (Meteor.isServer) {
	Meteor.methods({
		// Method for adding jokes
		addJokes: function(jokeName, jokePost) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				var username = Meteor.user().username;
				var year = new Date().getFullYear();
				var month = new Date().getMonth() + 1;
				var day = new Date().getDate();
				var date = (month + "/" + day + "/" + year).toString();

				Jokes.insert({
					jokeName: jokeName,
					jokePost: jokePost,
					author: username,
					date: date,
					createdAt: new Date(),
					laughScore: 0,
					frownScore: 0,
					pukeScore: 0,
					voted: [username],
					userId: Meteor.userId(), 
				});

			}
		},

		removeJoke: function(jokesId) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Jokes.remove(jokesId);
			}
		},

		countVote: function(thisJoke, Name) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Jokes.update(thisJoke, { $addToSet: { voted: Name}});
			}
		},

		userPointLaugh: function(jokeAuthor) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Meteor.users.update(jokeAuthor, { $inc: {'profile.laughScore': +1}});
			}
		},

		laughVote: function(thisUser, thisJoke) {
			if (!thisUser) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				Jokes.update(thisJoke, {$inc: {laughScore: +1}});
			}
		},

		userPointFrown: function(jokeAuthor) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Meteor.users.update(jokeAuthor, { $inc: {'profile.frownScore': +1}});
			}
		},

		frownVote: function(thisUser, thisJoke) {
			if (!thisUser) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				Jokes.update(thisJoke, {$inc: {frownScore: +1}});
			}
		},

		userPointPuke: function(jokeAuthor) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Meteor.users.update(jokeAuthor, { $inc: {'profile.pukeScore': +1}});
			}
		},

		pukeVote: function(thisUser, thisJoke) {
			if (!thisUser) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				Jokes.update(thisJoke, {$inc: {pukeScore: +1}});
			}
		},

	});
	
}















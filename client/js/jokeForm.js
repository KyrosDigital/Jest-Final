Template.jokeForm.rendered = function() {

}

Template.jokeForm.events({
	"submit .joke-post": function() {
		var jokeName = event.target.jokeName.value;
		var jokePost = event.target.jokePost.value;

		if (isNotEmpty(jokeName) &&
			isNotEmpty(jokePost)) {

			Meteor.call('addJokes', jokeName, jokePost);

			event.target.jokeName.value = "";
			event.target.jokePost.value = "";

			Bert.alert("Your Joke Was Posted!", "success", "growl-top-right");

		} else {
			
			Bert.alert("something went wrong", "danger", "growl-top-right");
		}

		return false; // prevent submit
	}
});

// Validation Rules

var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("Please fill in all fields", "danger", "growl-top-right");
	return false;
};
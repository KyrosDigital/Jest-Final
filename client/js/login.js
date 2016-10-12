Tracker.autorun(function(){
	if(Meteor.userId()){
		Router.go("/jokes");
	}
});

Template.login.rendered = function() {
	$("#login-link").addClass('selected');
	$("#profile-link").removeClass('selected');
	$("#rankings-link").removeClass('selected');
	$("#search-link").removeClass('selected');
	$("#jokes-link").removeClass('selected');
}

Template.login.events({
	"submit .form-signin": function(event){
		var email = trimInput(event.target.email.value);
		var password = trimInput(event.target.password.value);

		if(isNotEmpty(email) &&
			isNotEmpty(password) &&
			isEmail(email) &&
			isValidPassword(password)){

			Meteor.loginWithPassword(email, password, function(err){
				if(err) {
					Bert.alert(err.reason, "danger", "growl-top-right");
					return false;
				} else {
					Router.go("/jokes");
					Bert.alert("You are now logged in", "success", "growl-top-right");
				}
			});

		}

		return false // Prevent Submit
	}

});

// Validation Rules

// Trim Helper
var trimInput = function(val){
	return val.replace(/^\s*|\s*$/g, "");
};

var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("Please fill in all fields", "danger", "growl-top-right");
	return false;
};

// Validate Email
isEmail = function(value) {
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(filter.test(value)) {
		return true;
	}
	Bert.alert("Please use a valid email address", "danger", "growl-top-right");
	return false;
};

// Check Password Field
isValidPassword = function(password){
	if(password.length <6) {
		Bert.alert("Password must be at least 6 characters", "danger", "growl-top-right");
		return false;
	}
	return true;
};
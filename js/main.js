		 /////////////////////////////////////
		// Validator Script for index.html //
	   /////////////////////////////////////


	
$(document).ready(function () {
	var validator = $("#registration-form").bootstrapValidator({
		fields : {

			// Username Validator //

			username : {
				message : "Username is required",
				validators : {
					notEmpty : {
						message : "Please provide a username"
					},
					stringLength : {
						min : 6,
						message : "Username must be at least 6 characters long"
					},
				}
			},				

			// Email Validator //

			email : {
				message : "Email address is required",
				validators : {
					notEmpty : {
						message : "Please provide an email address"
					},
					stringLength : {
						min : 6,
						max : 35,
						message : "Email address must be between 6 and 35 characters"
					},
					emailAddress : {
						message : "Email address is invalid"
					}
				}
			},

			// Password Validator //	

			password : {
				validators : {
					notEmpty : {
						message : "Password is required"
					},
					stringLength : {
						min : 8,
						message : "Password must be at least 8 characters long"
					},
					different : {
						field : "email",
						message : "Email address and password must be different"
					},
					different : {
						field : "username",
						message : "Username and password must be different"
					}						
				}
			},

			// Confirm Password Validator //				

			confirmpassword : {
				validators : {
					notEmpty : {
						message : "Please confirm password"
					},
					stringLength : {
						min : 8,
						message : " "
					},						
					identical : {
						field : "password",
						message : "Passwords must match"
					}
				}
			}
		}
	});
});


		 //////////////////////////////////////
		// Validator Script for webapp.html //
	   //////////////////////////////////////
		


$(document).ready(function () {
	var validator = $("#event-form").bootstrapValidator({
		fields : {

			// Event Name Validator //

			eventname : {
				message : "Event name is required",
				validators : {
					notEmpty : {
						message : "Please provide a name for the event"
					}
				}
			},				

			// Event Type Validator //

			eventtype : {
				message : "Event type is required",
				validators : {
					notEmpty : {
						message : "What type of event is it?"
					}
				}
			},	

			// Event Host Validator //

			eventhost : {
				message : "Event host is required",
				validators : {
					notEmpty : {
						message : "Who is hosting the event?"
					}
				}
			},	

			// Start Date Validator //				

			startdate : {
				validators : {
					notEmpty : {
						message : "Please select the start date"
					}
				}
			},

			// End Date Validator //				

			enddate : {
				validators : {
					notEmpty : {
						message : "Please select the end date"
					}
				}
			},

			// Guest List Validator //

			guestlist : {
				message : "Guest list is required",
				validators : {
					notEmpty : {
						message : "Who is attending?"
					}
				}
			},

			// Location Validator //				

			location : {
				validators : {
					notEmpty : {
						message : "Please enter a location"
					}
				}
			}				
		}
	});

	// Catching "success (submit)" event //

	validator.on("success.form.bv", function (e) {
		e.preventDefault ();
		$("#event-form").addClass("hidden");
		$("#confirmation").removeClass("hidden");
	});

});
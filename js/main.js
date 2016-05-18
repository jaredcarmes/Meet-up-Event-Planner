




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
     	  //Script for Date/time Picker Plugin//
	     //////////////////////////////////////		
	

	
	$(document).ready(function () {

		$("#dt1").datepicker({
			dateFormat: "mm/dd/yy",
			minDate: 0,
			onSelect: function (date) {
				var dt2 = $('#dt2');
				var startDate = $(this).datepicker('getDate');
				var minDate = $(this).datepicker('getDate');
				dt2.datepicker('setDate', minDate);
				startDate.setDate(startDate.getDate() + 30);
				//sets dt2 maxDate to the last day of 30 days window
				dt2.datepicker('option', 'maxDate', startDate);
				dt2.datepicker('option', 'minDate', minDate);
				$(this).datepicker('option', 'minDate', minDate);
			}
		});
		$('#dt2').datepicker({
			dateFormat: "mm/dd/yy"
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






	      /////////////////////////////////////
		 //Script for Location Picker Plugin//
	    /////////////////////////////////////	
	

	$(document).ready(function($){
		$('#us3').locationpicker({
			location: {
				latitude: 0,
				longitude: 0
			},
			radius: 300,
			inputBinding: {
				locationNameInput: $('#location')
			},
			enableAutocomplete: true,
			onchanged: function (currentLocation, radius, isMarkerDropped) {
			}
		});
	});
		

	




	      /////////////////////////////////////
 		 //Script for Document Writer Plugin//
	    /////////////////////////////////////		
	

	
		$(document).ready(function($){
			$('#event-form').submit(function(e){
				var val = $(this).find('#eventname').val();
				$('ul.list').append('<li class="list-group-item">' + val + '</li>');
				e.preventDefault();
			});
		})(jQuery);	
	

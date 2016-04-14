// Show/hide full post on click of read more button

$("#learn_more").click(function(){
    $(".show_more").toggle("slow");
    var text=$(this).text();
    if (text==="Read More"){
    	$(this).text("Read More");
    } else {
    	$(this).text("Read Less");
    }
});


// Send email addresses to Google Sheet


$("#cta").on('submit', function (){


	var baseURL = "https://docs.google.com/forms/d/11fbuJuuQRFwdOihMtse6NLjT6Ab9bgh8dKq0Zp7bB1c/formResponse?";
	var submitRef = "&fvv=1"
	var theirEmail = encodeURIComponent($('#email').val());
	var emailID = "entry.479366799";

	var submitURL = (baseURL + emailID + "=" + theirEmail + submitRef);

	console.log(submitURL);
	$(this)[0].action=submitURL;
	$('#emailInput').addClass('active').val('Thank You!');

});
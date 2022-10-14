$(document).ready(function(){
	$(".login-button").hover(function(){
		$(this).css("cursor","pointer");
	})

	$(".login-button").on("click",function(){
		window.open("login.html");
	})

	$("#navicon").hover(function(){
		$(this).css({
			"cursor":"pointer"
		});
	})

	$(".icons").hover(function(){
		$(this).css({
			"cursor":"pointer"
		})
	})

	$('.team-animation-left').waypoint(function(direction){
		$('.team-animation-left').addClass('animated fadeInLeft')
	},{
		offset:"50%"
	});

	$('.team-animation-right').waypoint(function(direction){
		$('.team-animation-right').addClass('animated fadeInRight')
	},{
		offset:"50%"
	})

	$('.team-animation-center').waypoint(function(direction){
		$('.team-animation-center').addClass('animated fadeInUp')
	},{
		offset:"50%"
	})

	$('.event-animation-right').waypoint(function(direction){
		$('.event-animation-right').addClass('animated fadeInRight')
	},{
		offset:"50%"
	})

	$('.event-animation-left').waypoint(function(direction){
		$('.event-animation-left').addClass('animated fadeInLeft')
	},{
		offset:"50%"
	});

	$('#About').waypoint(function(direction){
		$("#About").addClass('animated fadeIn')
	},{
		offset:"50%"
	});

	$('#contact-form').waypoint(function(direction){
		$("#contact-form").addClass('animated fadeIn')
	},{
		offset:"100%"
	});

	$('#contact-form textarea').keyup(function(){
        if(!$(this).val()){
            $(this).addClass("error");
        } else{
            $(this).removeClass("error");
        }
    });

	$('#contact-form input').keyup(function(){
        if(!$(this).val()){
            $(this).addClass("error");
        } else{
            $(this).removeClass("error");
        }
    });

	$('form').submit(function(){
		alert("Thanks for feedback");
	})
});
function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  var body1 = document.getElementById("Our-team");
  var currentClass1 = body1.className;
  body1.className = currentClass1 == "dark-mode" ? "light-mode" : "dark-mode";
  var body2 = document.getElementById("contact");
  var currentClass2 = body2.className;
  body2.className = currentClass2 == "dark-mode" ? "light-mode" : "dark-mode";
}



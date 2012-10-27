// JavaScript Document

$(function() {
		   
		   	$('.purple').click(function() {
									   
									   $('#site-content').stop().animate({"top" : "0px"}, 500);
									   $('#site-content').animate({"left" : "0px"}, 500);
									   
									   });
			

			$('.pink').click(function() {
									   
									   $('#site-content').stop().animate({"top" : "0px"}, 500);
									    $('#site-content').animate({"left" : "-815px"}, 500);
									   
									   });


		   	$('.teal').click(function() {
									   
									   
									   $('#site-content').stop().animate({"left" : "0px"}, 500);
									   $('#site-content').animate({"top" : "-890px"}, 500);
									   
									   });


		   	$('.orange').click(function() {
									   
									   $('#site-content').stop().animate({"top" : '-890px'}, 500);
									   $('#site-content').animate({"left" : '-815px'}, 500);
									   
									   });

			
			
		   
		   });
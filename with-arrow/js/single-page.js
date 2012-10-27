// JavaScript Document

$(function() {
		   
		   	$('.purple').click(function() {
									   
									   $('#site-content').animate({"left" : "0px"}, {"duration" : "slow" , "easing": "easeOutBack"});
									   
									   });
			

			$('.pink').click(function() {
									   
									    $('#site-content').animate({"left" : "-865px"}, {"duration" : "slow" , "easing": "easeOutBack"});
									   
									   });


		   	$('.teal').click(function() {
									   
									   
									   $('#site-content').animate({"left" : "-1730px"}, {"duration" : "slow" , "easing": "easeOutBack"});
									   
									   });


		   	$('.orange').click(function() {
									   
									   $('#site-content').animate({"left" : '-2595px'}, {"duration" : "slow" , "easing": "easeOutBack"});
									   
									   });
			


					
			
			$('a.next').click(function() {
									  
									  		var p = $('#site-content').position();
											
											if ( p.left >= 0 ) {
										   
												   $('#site-content').stop().animate({"left" : "-865px"}, 1200);
												   p.left += (-865);
												   console.log(p.left);
												   
												
											} else if ( p.left >= -865 ) {
												
												  $('#site-content').stop().animate({"left" : "-1730px"}, 1200);
												  p.left += (-865);
												   console.log(p.left);
												  
												
												} else if ( p.left >= -1730) {
												
  												$('#site-content').stop().animate({"left" : "-2595px"}, 1200);
												p.left += (-865);
												   console.log(p.left);
													
												
												};
											
												
										   });

			
			$('a.previous').click(function() {
										   
										   var p = $('#site-content').position();
										   
										   $('#site-content')
									  
												
										   });
		   
		   });
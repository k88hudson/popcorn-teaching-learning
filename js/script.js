/* Author: Kate

*/

var direction = '0';


$(document).ready(function() {

	//Fade in effect 
	$("body").fadeIn('slow');
	
	//capture site :
	
	//Scroll watcher and clicker for notepad
	$(document).scroll(function(e){
	
		var scrollTop = $(window).scrollTop();
		//$("aside").css("margin-top", scrollTop);
		
	});
	
	$("aside").click(function() {
		OpenNotePad();
	});
	
	
	//Draggable items
	$('.example-table').draggable();
	log('working');
	
	$("#holder").droppable({
		drop: function( event, ui ) {
			makeCircle();
			$('.example-table').fadeOut();	
		},
		tolerance: "touch"
	});
			
}); // Doc ready

// Utility functions

//Put the selected text in the notepad
function GetSelectedText() {
	 if (window.getSelection) {
	 	var theText = window.getSelection().toString();
	 	$('aside ul').append('<li><div class="content">'+theText+'</div><div class="notes"></div></li>')
	 	$('aside').animate({
	 	    right: '0',
	 	  }, 200, 'easeOutElastic', function() {
	 		direction = '-10%';
	 	  	console.log(direction);
	 	});
	 } else {

	}
}

//Change the context menu
if (document.addEventListener) {
       document.addEventListener('contextmenu', function(e) {
       		$("#saveme").css({left:e.pageX,top:e.pageY,display:'block'});
       		e.preventDefault();
       		$("#saveme").delay(1000).fadeOut();
          
       }, false);
   } else {
       document.attachEvent('oncontextmenu', function() {
           alert("You've tried to open context menu");
           window.event.returnValue = false;
       });
   }


//Open the pad
function OpenNotePad() {
	$("aside").animate({
	    right: direction,
	  }, 200, 'easeOutElastic', function() {
	  	if (direction == '0') {
	  		direction = '-10%';
	  	} else {
	  		direction = '0';
	  	}
	});
}



// ------------ DRAFTS ------

//DRAFT:    A function that grabs the position of the selected text relative to a stored string.
function GetSelectedTextOrig () 
{
    var fullString = "I feel there is no built-in functions for getting start and end position of selection code. you need to write some JS coding for getting these position. I've wrote just simple coding. I'm not sure whether it will be useful or not. But, check it out.";
    if (window.getSelection) 
        { 
        	console.log(window.getSelection().toString());              
            var range = window.getSelection();                     
            var startPosition = fullString.search(range);
            var getPosition = range.toString();
            var endPosition = parseInt(getPosition.length) + parseInt(startPosition)
            alert ("Start position : " + startPosition + " and End position : " + endPosition);        
        }
    else
        {
            if (document.selection.createRange)
            {
                var range = document.selection.createRange ();
                var startPosition = fullString.search(range.text);
                var getPosition = range.text;
                var endPosition = parseInt(getPosition.length) + parseInt(startPosition);
                alert ("Start position : " + startPosition + " and End position : " + endPosition);
            }
        }       
}





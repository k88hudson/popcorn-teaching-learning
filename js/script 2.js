/* Author: Kate

*/

var paper = Raphael("holder", 200, 300);
var circle = paper.circle(100, 150, 50);
circle.attr("fill", "#ff0000");

var direction = '0';


$(document).ready(function() {

	//Fade in effect 
	$("body").fadeIn('slow');
	$("#foo").css('right','-10%');
	
	
	//Scroll watcher and clicker for notepad
	$(document).scroll(function(e){
		var scrollTop = $(window).scrollTop();
		var scrollBottom = $(window).scrollTop() + $(window).height();
		var scrollLeft = $(window).scrollLeft();
		
		if (scrollLeft>15 && direction == '0') {
			OpenNotePad();
		}	
	});
	
	$("#foo").click(function() {
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
	 	$('#foo ul').append('<li>'+theText+'</li>')
	 	$('#foo').animate({
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
	$("#foo").animate({
	    right: direction,
	  }, 200, 'easeOutElastic', function() {
	  	if (direction == '0') {
	  		direction = '-10%';
	  	} else {
	  		direction = '0';
	  	}
	});
}

// Create the circle for pie chart example
function makeCircle() {
	var pie = paper.piechart(100, 150, 70, [55, 20, 13, 32, 5, 1, 2]);
	paper.text(100,50,"Confused?").attr({font: "20px sans-serif" });
	
	pie.hover(function(){
		this.sector.stop();
		this.sector.scale(1.1, 1.1, this.cx, this.cy);
		
	}, function () {
	    this.sector.animate({ transform: 's1 1 ' + this.cx + ' ' + this.cy }, 500, "bounce");
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





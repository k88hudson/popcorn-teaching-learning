document.addEventListener( "DOMContentLoaded", function( e ){

  Butter({
    config: "../config/kate.conf",
    ready: function( butter ){
      var media = butter.media[ 0 ];

      function start(){
        var track = media.addTrack( "Track1" );
        media.addTrack( "Track" + Math.random() );
        media.addTrack( "Track" + Math.random() );
		
		//These events are created when the template initializes
        var event = track.addTrackEvent({
          type: "text",
          popcornOptions: {
            start: 0,
            end: 3,
            text: "test",
            target: "Area2"
          }
        });

        butter.tracks[ 2 ].addTrackEvent({ 
          type: "footnote",
          popcornOptions: {
            start: 0,
            end: 3,
            target: "Area3"
          }
        });

        butter.tracks[ 1 ].addTrackEvent({ 
          type: "wikipedia",
          popcornOptions: {
            start: 4,
            end: 7,
			language: 'en',
			src: "http://en.wikipedia.org/wiki/Cape_Town",
			title: "This is wikipedia",
            target: "Area1"
          }
        });

      }

      media.onReady( start );
      
      window.butter = butter;
    } 
  }); //Butter
}, false );

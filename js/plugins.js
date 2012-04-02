
// usage: log('inside coolFunc', this, arguments);
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
      arguments.callee = arguments.callee.caller;
      console.log( Array.prototype.slice.call(arguments) );
  }
};
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});


/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
 
 // jQuery Context Menu Plugin
 //
 // Version 1.01
 //
 // Cory S.N. LaViska
 // A Beautiful Site (http://abeautifulsite.net/)
 //
 // More info: http://abeautifulsite.net/2008/09/jquery-context-menu-plugin/
 //
 // Terms of Use
 //
 // This plugin is dual-licensed under the GNU General Public License
 //   and the MIT License and is copyright A Beautiful Site, LLC.
 //
 if(jQuery)( function() {
 	$.extend($.fn, {
 		
 		contextMenu: function(o, callback) {
 			// Defaults
 			if( o.menu == undefined ) return false;
 			if( o.inSpeed == undefined ) o.inSpeed = 150;
 			if( o.outSpeed == undefined ) o.outSpeed = 75;
 			// 0 needs to be -1 for expected results (no fade)
 			if( o.inSpeed == 0 ) o.inSpeed = -1;
 			if( o.outSpeed == 0 ) o.outSpeed = -1;
 			// Loop each context menu
 			$(this).each( function() {
 				var el = $(this);
 				var offset = $(el).offset();
 				// Add contextMenu class
 				$('#' + o.menu).addClass('contextMenu');
 				// Simulate a true right click
 				$(this).mousedown( function(e) {
 					var evt = e;
 					evt.stopPropagation();
 					$(this).mouseup( function(e) {
 						e.stopPropagation();
 						var srcElement = $(this);
 						$(this).unbind('mouseup');
 						if( evt.button == 2 ) {
 							// Hide context menus that may be showing
 							$(".contextMenu").hide();
 							// Get this context menu
 							var menu = $('#' + o.menu);
 							
 							if( $(el).hasClass('disabled') ) return false;
 							
 							// Detect mouse position
 							var d = {}, x, y;
 							if( self.innerHeight ) {
 								d.pageYOffset = self.pageYOffset;
 								d.pageXOffset = self.pageXOffset;
 								d.innerHeight = self.innerHeight;
 								d.innerWidth = self.innerWidth;
 							} else if( document.documentElement &&
 								document.documentElement.clientHeight ) {
 								d.pageYOffset = document.documentElement.scrollTop;
 								d.pageXOffset = document.documentElement.scrollLeft;
 								d.innerHeight = document.documentElement.clientHeight;
 								d.innerWidth = document.documentElement.clientWidth;
 							} else if( document.body ) {
 								d.pageYOffset = document.body.scrollTop;
 								d.pageXOffset = document.body.scrollLeft;
 								d.innerHeight = document.body.clientHeight;
 								d.innerWidth = document.body.clientWidth;
 							}
 							(e.pageX) ? x = e.pageX : x = e.clientX + d.scrollLeft;
 							(e.pageY) ? y = e.pageY : y = e.clientY + d.scrollTop;
 							
 							// Show the menu
 							$(document).unbind('click');
 							$(menu).css({ top: y, left: x }).fadeIn(o.inSpeed);
 							// Hover events
 							$(menu).find('A').mouseover( function() {
 								$(menu).find('LI.hover').removeClass('hover');
 								$(this).parent().addClass('hover');
 							}).mouseout( function() {
 								$(menu).find('LI.hover').removeClass('hover');
 							});
 							
 							// Keyboard
 							$(document).keypress( function(e) {
 								switch( e.keyCode ) {
 									case 38: // up
 										if( $(menu).find('LI.hover').size() == 0 ) {
 											$(menu).find('LI:last').addClass('hover');
 										} else {
 											$(menu).find('LI.hover').removeClass('hover').prevAll('LI:not(.disabled)').eq(0).addClass('hover');
 											if( $(menu).find('LI.hover').size() == 0 ) $(menu).find('LI:last').addClass('hover');
 										}
 									break;
 									case 40: // down
 										if( $(menu).find('LI.hover').size() == 0 ) {
 											$(menu).find('LI:first').addClass('hover');
 										} else {
 											$(menu).find('LI.hover').removeClass('hover').nextAll('LI:not(.disabled)').eq(0).addClass('hover');
 											if( $(menu).find('LI.hover').size() == 0 ) $(menu).find('LI:first').addClass('hover');
 										}
 									break;
 									case 13: // enter
 										$(menu).find('LI.hover A').trigger('click');
 									break;
 									case 27: // esc
 										$(document).trigger('click');
 									break
 								}
 							});
 							
 							// When items are selected
 							$('#' + o.menu).find('A').unbind('click');
 							$('#' + o.menu).find('LI:not(.disabled) A').click( function() {
 								$(document).unbind('click').unbind('keypress');
 								$(".contextMenu").hide();
 								// Callback
 								if( callback ) callback( $(this).attr('href').substr(1), $(srcElement), {x: x - offset.left, y: y - offset.top, docX: x, docY: y} );
 								return false;
 							});
 							
 							// Hide bindings
 							setTimeout( function() { // Delay for Mozilla
 								$(document).click( function() {
 									$(document).unbind('click').unbind('keypress');
 									$(menu).fadeOut(o.outSpeed);
 									return false;
 								});
 							}, 0);
 						}
 					});
 				});
 				
 				// Disable text selection
 				if( $.browser.mozilla ) {
 					$('#' + o.menu).each( function() { $(this).css({ 'MozUserSelect' : 'none' }); });
 				} else if( $.browser.msie ) {
 					$('#' + o.menu).each( function() { $(this).bind('selectstart.disableTextSelect', function() { return false; }); });
 				} else {
 					$('#' + o.menu).each(function() { $(this).bind('mousedown.disableTextSelect', function() { return false; }); });
 				}
 				// Disable browser context menu (requires both selectors to work in IE/Safari + FF/Chrome)
 				$(el).add($('UL.contextMenu')).bind('contextmenu', function() { return false; });
 				
 			});
 			return $(this);
 		},
 		
 		// Disable context menu items on the fly
 		disableContextMenuItems: function(o) {
 			if( o == undefined ) {
 				// Disable all
 				$(this).find('LI').addClass('disabled');
 				return( $(this) );
 			}
 			$(this).each( function() {
 				if( o != undefined ) {
 					var d = o.split(',');
 					for( var i = 0; i < d.length; i++ ) {
 						$(this).find('A[href="' + d[i] + '"]').parent().addClass('disabled');
 						
 					}
 				}
 			});
 			return( $(this) );
 		},
 		
 		// Enable context menu items on the fly
 		enableContextMenuItems: function(o) {
 			if( o == undefined ) {
 				// Enable all
 				$(this).find('LI.disabled').removeClass('disabled');
 				return( $(this) );
 			}
 			$(this).each( function() {
 				if( o != undefined ) {
 					var d = o.split(',');
 					for( var i = 0; i < d.length; i++ ) {
 						$(this).find('A[href="' + d[i] + '"]').parent().removeClass('disabled');
 						
 					}
 				}
 			});
 			return( $(this) );
 		},
 		
 		// Disable context menu(s)
 		disableContextMenu: function() {
 			$(this).each( function() {
 				$(this).addClass('disabled');
 			});
 			return( $(this) );
 		},
 		
 		// Enable context menu(s)
 		enableContextMenu: function() {
 			$(this).each( function() {
 				$(this).removeClass('disabled');
 			});
 			return( $(this) );
 		},
 		
 		// Destroy context menu(s)
 		destroyContextMenu: function() {
 			// Destroy specified context menus
 			$(this).each( function() {
 				// Disable action
 				$(this).unbind('mousedown').unbind('mouseup');
 			});
 			return( $(this) );
 		}
 		
 	});
 })(jQuery);
 
 
 
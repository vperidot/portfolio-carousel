//list of sections used in animated transitions
var sections = ["about","photography","graphicart","resume","contact", "index"];

$(document).ready(function(){
				
				//colorbox lightbox
				$(".group1").colorbox({rel:'group1'});
				
				//jquery ui accordion
				$( "#photoaccordion" ).accordion({collapsible: true, heightStyle: "content", active: false});
				//$( "#graphicaccordion" ).accordion({collapsible: true, heightStyle: "content", active: false});
				
				//horizontal accordion
				lastBlock = $("#a1");
				maxWidth = 300;
				minWidth = 100;
				maxHeight = 250;

				$("ul li a").hover(
				  function(){
					$(lastBlock).animate({width: minWidth+"px"}, { queue:false, duration:400 });
					$(this).animate({width: maxWidth+"px"}, { queue:false, duration:400});
					lastBlock = this;
				  });
				
				var slides = $("#slider ul li");
				var sliderwidth = ((slides.length - 1) * minWidth) + maxWidth ;
				console.log("slides.length = "+slides.length+", sliderwidth = "+sliderwidth);
				$("#slider").css({
					"width" : sliderwidth+"px",
					"height" : maxHeight+"px",
					"mask-image" : "url('http://placekitten.com/g/"+sliderwidth+"/"+maxHeight+"')",
					"-moz-mask-image" : "url('http://placekitten.com/g/"+sliderwidth+"/"+maxHeight+"')",
					"-webkit-mask-image" : "url('http://placekitten.com/g/"+sliderwidth+"/"+maxHeight+"')"
				});
				
				//hide all sections that aren't the "index" a.k.a. graphicart
				
				$(".graphicart").addClass("current");
				$(".contentbox:not(.index)").css({'display': 'none', 'top': '0px', 'left': '0px'});
				
				//transition animations
				
				var selector = '#' + sections.join(',#'); //join the set of selectors
				
				$(selector).click(function (e) {
					e.preventDefault();
					var id = this.id;
					var cheight = $(".current").css("height");
					var newtop = -cheight;
					if (!$(".current").hasClass(id)) { 
						//console.log( $("div:animated").attr("class") );
						$("div:animated").stop(true,true);
						$("body").css("overflow-x", "hidden");
						
						/*$("." + id).css({
							'top': -cheight, 
							'left': '1500px'
						});
						$("." + id).show().animate({
							left: '0px'
						}, 500);
						$(".current").animate({
							left: '-1500px'
						}, 500).hide(function() {
							$(".current").removeClass("current");
							$("." + id).addClass("current");
							$("body").css("overflow-x", "visible");
						})
						*/
						
						
						$(".current").animate({
							left: '-1500px'
						}, 500).slideUp(501);
						$("." + id).animate({
							left: '+1500px',
							top: -cheight
						}, 1).delay(500).slideDown(500);
						console.log( "cheight = "+cheight+", top = " + $("."+id).css("top") );
						$("." + id).animate({
							left: '0px'
						}, 500, function () {
							$(".current").removeClass("current");
							$("." + id).addClass("current");
							$("body").css("overflow-x", "visible");
						});
						
					}
				});
				
			});

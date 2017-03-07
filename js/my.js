$(document).ready(function() {
	$('#fullpage').fullpage({
    	verticalCentered: false,
        anchors:['Page1', 'Page2', 'Page3', 'Page4', 'Page5', 'Page6'],
        navigation:true,
        css3: true,
        navigationTooltips:['resume', 'about me', 'skill', 'experience', 'dome', 'contact me'],
       afterLoad:function(link,index){
        	switch(index){
        		case 1:
        		move('#home_head_content').set('padding-top','0').duration(2000).end(function(){
                $('#home_info1').slideDown(400,function(){
                	$('#home_info_box').animate({width:'800px'},400,function(){
        		  			$('#home_info_box p').eq(0).fadeIn(400,function(){
		        		  		$(this).next().fadeIn(400,function(){
			        		  			$(this).next().fadeIn(400,function(){
			        		  				$(this).next().fadeIn(400,function(){
			        		  					$(this).next().fadeIn();
			        		  			   });
			        		  			});
		        		  			});
		        		  		})
        		  	    	});
        		  		})
					});
        		  move('.section1').set('background-size','100% 100%').duration(2000).end();
                  
        		  break;
        		case 2:
						$("#about_content h1").after("<div class='title_en'><h2>· About me ·</h2></div>");
						$(".title_en").animate({width:"130px"},800,function(){
							$(".title_en h2").slideDown(400);
							});
                    	$("#about_info").animate({width:"800px",marginTop:"60px",marginBottom:"0"},500,'easeInOutCirc',function(){$("#about_info p").eq(0).animate({paddingTop:"0"},700,function(){
									$("#about_info p").eq(1).animate({paddingTop:"0px"},500,function(){
										$("#about_info p").eq(2).animate({paddingTop:"0px"},500,function(){
											$("#about_info p").eq(3).animate({paddingTop:"0px"},500);
							});
						});
					});
				});	
					break;
        		case 3:
        		        var pa = 1;
						$("#skill_content h1").after("<div class='title_en'><h2>· skill ·</h2></div>");
						$(".title_en").animate({width:"130px"},800,function(){
							$(".title_en h2").slideDown(400);
								});
						$(".skill_list_content").stop().addClass("skill_scale");
                       
                       
                       	     $("#flag1").click(function(){
                       	     if(pa<2){
                        	$("#skill_list").animate({left:"-=100%"},500);
                        	pa++;
                        	console.log(pa);
                        	}else{
                                	$("#skill_list").animate({left:"-=30"},200,function(){
									$(this).animate({left:"+=30"},200);
								});
								return;
							} 
                        });
                       
                      
                       	
                            $("#flag2").click(function(){
                            	 if(pa>1){
                        	$("#skill_list").animate({left:"+=100%"},500);
                                pa--;
                                }else{
                                	$("#skill_list").animate({left:"+=30"},200,function(){
									$(this).animate({left:"-=30"},200);
								});
								return;
							}

                        });

                       
                         
        		  break;
        		case 4:
                   
                    $("#exp_content h1").after("<div class='title_en'><h2>· EXPERIENCE ·</h2></div>");
						$(".title_en").animate({width:"130px"},800,function(){
							$(".title_en h2").slideDown(400);
							});
					 $('#exp_list_content').fadeTo(700,1,function(){
                    	$('#exp_timeline').animate({width:'800px'},550);
                    });	
					
					break;
        		case 5:
        				$("#demo_content h1").after("<div class='title_en'><h2>· DEMO  ·</h2></div>");
						$(".title_en").animate({width:"130px"},800,function(){
							$(".title_en h2").slideDown(400);
							});
						move('.demo_scale1').rotate(360).duration('.32s').end(function(){
					    	move('.demo_scale2').rotate(360).duration('.32s').end(function(){
						    	move('.demo_scale3').rotate(360).duration('.32s').end(function(){
							    	move('.demo_scale4').rotate(360).duration('.32s').end();
						    });
					    });
				    });
        		  break;
        		case 6:
        				$("#contact_content h1").after("<div class='title_en'><h2>· CONTACT ME ·</h2></div>");
						$(".title_en").animate({width:"140px"},800,function(){
							$(".title_en h2").slideDown(400);
							});
						var i=-1;
						$("#contact_head1").addClass("b_to_t");
						$("#contact_head2 span").each(function(){
							var $this=$(this);
							if(!$this.hasClass("fade_in")){
								i++;
								setTimeout(function(){
							   $this.addClass("fade_in");
							   },200*i);
							}
						});
						var j=-1;
						setTimeout(function(){
								$(".contact_scale").each(function(){
									var $this=$(this);
									if(!$this.hasClass("fade_in")){
										j++;
										setTimeout(function(){
							   				$this.addClass("fade_in");
							   			},350*j);
									}
								});
						},70);
					
        		  break;
        		default:
        		  break;
              }
        },
       onLeave:function(link,index){
    	switch(index){
    		case 1:
    			
    		  break;
    		case 2:
    		$("#about_content h1").next().css('border','none').empty();
    		$("#about_info").animate({width:"0px",marginTop:"50px",marginBottom:"50px"});
    		$("#about_info p").eq(0).animate({paddingTop:"500"});
			$("#about_info p").eq(1).animate({paddingTop:"500px"});
			$("#about_info p").eq(2).animate({paddingTop:"500px"});
			$("#about_info p").eq(3).animate({paddingTop:"500px"});
							
    		  break;
    		case 3:
    		$("#skill_content h1").next().css('border','none').empty();
    		$(".skill_list_content").stop().removeClass("skill_scale");
    	      break;
    		case 4:
    		$("#exp_content h1").next().css('border','none').empty();
    		$('#exp_list_content').css('opacity','.1');
            $('#exp_timeline').css('width','0px');
                  
    		  break;
    		case 5:
    		$("#demo_content h1").next().css('border','none').empty();
    			move('.demo_scale1').rotate(-360).end();
				move('.demo_scale2').rotate(-360).end();
				move('.demo_scale3').rotate(-360).end();
				move('.demo_scale4').rotate(-360).end();
    		  break;
    		case 6:
	    		$("#contact_content h1").next().css('border','none').empty();
		    	$("#contact_head1").removeClass('b_to_t');
				$("#contact_head2 span").removeClass('fade_in');
				$(".contact_scale").removeClass('fade_in');
			break;
    		default:
    		  break;
            }
    	},
        
    });
        
//logo
		$("#header_p").mouseover(function(){
		  $("#header_p1").text("Resume");
		  $("#header_p2").text("前端工程师");
		});

		$("#header_p").mouseout(function(){
		  $("#header_p1").text("F2E");
		  $("#header_p2").text("个人简历");
		});
//page3
		$(".skill_icon").click(function(){
			$(".flag").css("display","none");
			$(".skill_int").each(function(){
				if($(this).is(":visible")){
					$(this).slideUp(200);
					$(this).prev().removeClass("skill_flag_scale");

				};
			});
			if($(this).siblings(".skill_int").is(":hidden")){

					$(this).siblings(".skill_int").slideDown(400);
					$(this).siblings(".skill_flag").addClass("skill_flag_scale");
				}
			else{           
							$(this).siblings(".skill_int").slideUp(200,function(){$(".flag").css("display","block");});
							$(this).siblings(".skill_flag").removeClass("skill_flag_scale");
				};

	});
// Page4
		$("#exp_list_slider_content").mouseenter(function(){
						$("#exp_list_to").stop(true,false).fadeTo(700,1);
					}).mouseleave(function(){
						$("#exp_list_to").stop(true,false).fadeTo(700,0.1);
					});
					var page=1;
					$("#exp_timeline a").click(function(){
						$("#exp_list_content").stop(true,false).animate({left:-$(".exp_list").width()*$(this).index()},2000,"easeInOutCubic");
						page=$(this).index()+1;
						});
					$("#exp_list_toleft").click(function()
				    {
						if(!$("#exp_list_content").is(":animated")){
							if(page==1){
								$("#exp_list_content").animate({left:"+=50"},200,function(){
									$(this).animate({left:"-=50"},200);
								});
								return false;
							}	
							$("#exp_list_content").animate({left:"+="+$(".exp_list").width()});
							page--;
						}
					});
					$("#exp_list_toright").click(function(){
						if(!$("#exp_list_content").is(":animated")){
							if(page==3){
								$("#exp_list_content").animate({left:"-=50"},200,function(){
									$(this).animate({left:"+=50"},200);
								});
								return;
							}
							$("#exp_list_content").animate({left:"-="+$(".exp_list").width()});
							page++;
						}
					});
					$("#home_head_content").hover(
				    function(){
				        $("#home_photo1").stop().fadeTo(800,0,function(){
				             $(this).css({"display":"none"});
				            });
				        $("#home_photo1").next().css("boxShadow","0 0 15px #0080FF");
				    },
				    function(){
				        $("#home_photo1").stop().fadeTo(800,1,function(){
				            $(this).css({"display":'block'});
				            });
				        $("#home_photo1").next().css("boxShadow","0 0 0 #0080FF");
				    }
				);

	});

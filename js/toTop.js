jQuery(document).ready(function($) {	
			if($("meta[name=toTop]").attr("content")=="true"){
				/*
				 * 向body追加DOM节点
				 */
				$("<div id='toTop'><img src='img/totop.png'></div>").appendTo('body');
				$("#toTop").css({
					width: '50px',
					height: '50px',
					bottom:'10px',
					right:'15px',
					position:'fixed',
					cursor:'pointer',
					zIndex:'999999',
				});
				if($(this).scrollTop()==0){
						$("#toTop").hide();
					}
				$(window).scroll(function(event) {
					/*当前高度等于0时隐藏， 当前高度大于0时显示 */
					if($(this).scrollTop()==0){
						$("#toTop").hide();
					}
					if($(this).scrollTop()!=0){
						$("#toTop").show();
					}
				});	
					$("#toTop").click(function(event) {
								/* Act on the event */
								$("html,body").animate({
									scrollTop:"0px"},
									666
									)
							});
				}
		});
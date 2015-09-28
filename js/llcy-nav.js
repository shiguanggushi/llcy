window.onload=function(){
		$(".htmleaf-content ul li").click(function (e) {
		if ($(this).hasClass('slider')) {
			return;
		}
		var whatTab = $(this).index();
		var howFar = 90 * whatTab;
		$(".slider").css({
			left: howFar + "px"
		});
		$(".ripple").remove();
		var posX = $(this).offset().left,
	  posY = $(this).offset().top,
	  buttonWidth = $(this).width(),
	  buttonHeight = $(this).height();
		$(this).prepend("<span class='ripple'></span>");
		if (buttonWidth >= buttonHeight) {
			buttonHeight = buttonWidth;
		} else {
			buttonWidth = buttonHeight;
		}
		var x = e.pageX - posX - buttonWidth / 2;
		var y = e.pageY - posY - buttonHeight / 2;
		$(".ripple").css({
			width: buttonWidth,
			height: buttonHeight,
			top: y + 'px',
			left: x + 'px'
		}).addClass("rippleEffect");
	});
	/*
	 * banner切换
	 * animation: "slide", //转换方式 fade淡入淡出 slide滚动
     * direction:"horizontal", //滚动方向 horizontal左右 vertical上下
     * slideshowSpeed: 3000, //停留时间
     * directionNav: true, //是否显示左右控制按钮 true&false
	 * controlNav: true, //是否显示下方控制按钮 true&false
	 * mousewheel: false, //是否允许鼠标控制滚动 true&fals
	  */
	$('#llcy-banner').flexslider({
		animation: "slide",
		direction:"horizontal",
		easing:"swing"
	});
		/*
		 * 新闻tab 切换
		 */
		$(function(){
				var $li = $('#tab li');
				var $ul = $('#content ul');
							
				$li.click(function(){
					var $this = $(this);
					var $t = $this.index();
					$li.removeClass();
					$this.addClass('current');
					$ul.css('display','none');
					$ul.eq($t).css('display','block');
						})
			});
		 /*
		 * 服务tab 切换
		 */
				$(function(){
				var $li = $('#fw-tab li');
				var $ul = $('#fw-content ul');
							
				$li.click(function(){
					var $this = $(this);
					var $t = $this.index();
					$li.removeClass();
					$this.addClass('fw-current');
					$ul.css('display','none');
					$ul.eq($t).css('display','block');
						})
			         });
			/*
			 * 专家tab 切换
			 */
			$(function(){
				var $li = $('#zj-tab li');
				var $ul = $('#zj-content ul');
							
				$li.click(function(){
					var $this = $(this);
					var $t = $this.index();
					$li.removeClass();
					$this.addClass('zj-current');
					$ul.css('display','none');
					$ul.eq($t).css('display','block');
						})
			         });
			         
}

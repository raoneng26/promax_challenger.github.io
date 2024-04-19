//纵向轮播
var speed=30;
	pic_box_b.innerHTML = pic_box.innerHTML;
	function marquee(){
		if(pic_box_b.offsetTop - scroll_logo2.scrollTop <= 0) {
			scroll_logo2.scrollTop -= pic_box.offsetHeight;
		} else {
			scroll_logo2.scrollTop++;
		}
	}
	var myMar = setInterval(marquee,speed);
	scroll_logo2.onmouseover = function() {
		clearInterval(myMar);
	} 
	scroll_logo2.onmouseout = function(){
		myMar = setInterval(marquee,speed)
	}
	
// 小轮播
var lbt = document.getElementsByClassName('b2img')
	
	// var imgs = ['imgs/l1.jpg','imgs/l2.jpg','imgs/l3.jpg','imgs/l4.jpg','imgs/l5.jpg']
	
	setInterval(function() {
		for (var i=0;i<lbt.length;i++) {
			if(lbt[i].style.display != 'none'){
					if(i != lbt.length-1){
						lbt[i+1].style.animation = 'bb 3s forwards'
						lbt[i+1].style.display = 'block';
						setTimeout(function () {
							lbt[i].style.display = 'none';
							lbt[i].style.animation = 'aa 3s forwards'
						},3000)
						break;
					}else{
						lbt[0].style.animation = 'bb 2s forwards'
						lbt[0].style.display = 'block';
						lbt[0].style.zIndex = 1;
						console.log(lbt[0].style.display)
						setTimeout(function () {
							lbt[2].style.display = 'none';
							lbt[0].style.zIndex = '';
							lbt[2].style.animation = 'aa 2s forwards'
						},3000)
						break;
					}
			}
		}
	},3000)
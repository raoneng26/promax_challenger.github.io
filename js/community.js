const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem, i) => {
  navItem.addEventListener("click", () => {
    navItems.forEach((item, j) => {
      item.className = "nav-item";
    });
    navItem.className = "nav-item active";
  });
});


"use strict";
(function () {
	window.onload = () => {
		const obj = document.querySelector("#gallery");
		const time = 10000;
		function animStart() {
			if (obj.classList.contains("active") == false) {
				obj.classList.add("active");
				setTimeout(() => {
					animEnd();
				}, time);
			}
		}
		function animEnd() {
			obj.classList.remove("active");
			obj.offsetWidth;
		}
		document.addEventListener("scroll", function () {
			// scroll or scrollend
			animStart();
		});
		window.addEventListener("resize", animStart);
		animStart();
	};
})();


// 获取所有的 "like-icon" 元素
var likeIcons = document.getElementsByClassName('like-icon');

// 为每个 "like-icon" 元素添加点击事件
for (var i = 0; i < likeIcons.length; i++) {
  likeIcons[i].addEventListener('click', function() {
    // 点击后，切换 "liked" 类，从而改变颜色
    this.classList.toggle('liked');
  });
}

function startRotation() {
	if (!rotating) {
	  rotating = true;
	  rotationInterval = setInterval(rotateImage, 50);
	}
  }
  
window.onload = function () {
	let timer = setInterval(get_next, 3000)
	let sz = new Array();
	let szdiv = new Array()
	var cur_ul = document.getElementById("banner");
	for (let i = 1; i <= 5; i++) {
		var cur_li = document.createElement("li");
		var cur_img = document.createElement("img");
  
		cur_img.src = "img/banner/" + i + ".jpg";
		cur_img.style.width = "500px";
		cur_img.style.height = "230px";
		cur_img.style.borderRadius = "10px";
		cur_img.style.margin = "-20px";
		cur_img.style.marginLeft = "-50px";
		cur_img.style.background = "#fff";
		cur_img.style.boxShadow = "-4px -4px 12px rgb(255, 255, 255),4px 4px 12px rgba(121, 130, 160, 0.747)";
		cur_img.style.border = "5px solid var(--bg)";
		cur_li.appendChild(cur_img);
		cur_li.onmouseenter = function () {
			clearInterval(timer);
		}
		cur_li.onmouseleave = function () {
			timer = setInterval(get_next, 3000)
		}
  
		if (i != 5) {
			cur_li.id = 5 - i;
		} else {
			cur_li.id = 5;
		}
  
		cur_ul.appendChild(cur_li)
		sz.push(cur_li);
		sz[sz.length - 1].style.left = "0px";
		let bottom_div = document.createElement("div");
		bottom_div.style.left = 20 * i + "px";
		bottom_div.style.marginLeft = "340px";
		bottom_div.style.border = "3.5px solid var(--bg)";
		bottom_div.name = i;
		szdiv.push(bottom_div)
		cur_ul.appendChild(bottom_div);
  
	}
  
	let pre_img = document.createElement("img")
	pre_img.src = "img/preImg.png";
	pre_img.style.position = "absolute";
	pre_img.style.left = "-50px";
	pre_img.style.width = "20px";
	pre_img.style.top = 0;
	pre_img.style.top = 0;
	pre_img.style.bottom = 0;
	pre_img.style.margin = "auto"
	pre_img.style.zIndex = 10;
	cur_ul.appendChild(pre_img);
  
	let nex_img = document.createElement("img")
	nex_img.src = "img/nexImg.png";
	nex_img.style.position = "absolute";
	nex_img.style.right = "-50px";
	nex_img.style.width = "20px";
	nex_img.style.top = 0;
	nex_img.style.bottom = 0;
	nex_img.style.margin = "auto"
	nex_img.style.zIndex = 10;
	cur_ul.appendChild(nex_img);
  
	pre_img.onclick = function () {
		clearInterval(timer);
		get_pre();
		timer = setInterval(get_next, 3000)
	}
  
	nex_img.onclick = function () {
		clearInterval(timer);
		get_next();
		timer = setInterval(get_next, 3000)
	}
  
  
	let len = sz.length - 1;
	sz[len - 2].style.left = "-80px";
	sz[len - 1].style.zIndex = 10;
	sz[len - 1].style.left = "200px";
	sz[len - 1].style.transform = "scale(1.3)";
	sz[len].style.left = "480px";
  
	szdiv[0].style.background = "#e431fc"
  
	for (let i = 0; i < szdiv.length; i++) {
		szdiv[i].onmouseenter = function () {
			clearInterval(timer);
			let len1 = sz[len - 1].id;
			let len2 = szdiv[i].name;
			let dis = Math.max(len1, len2) - Math.min(len1, len2)
			if (len1 > len2) {
				while (dis--)
					get_pre()
			} else {
				while (dis--)
					get_next()
			}
			timer = setInterval(get_next,3000)
		}
	}
  
  
	function get_pre() {
		let give_up = sz[0];
		sz.shift()
		sz.push(give_up)
		for (let i = 0; i < sz.length; i++) {
			sz[i].style.zIndex = i;
			sz[i].style.transform = "scale(1)"
  
		}
		sz[len - 2].style.left = "-80px";
		sz[len - 1].style.zIndex = 10
		sz[len - 1].style.left = "200px";
		sz[len - 1].style.transform = "scale(1.3)"
		sz[len - 1].style.opacity = 1;
		sz[len].style.left = "480px";
  
		sync_szdiv()
  
	}
  
	function get_next() {
		let give_up = sz[len];
		sz.pop()
		sz.unshift(give_up)
		for (let i = 0; i < sz.length; i++) {
			sz[i].style.zIndex = i;
			sz[i].style.transform = "scale(1)"
  
		}
		sz[len - 2].style.left = "-80px";
		sz[len - 1].style.zIndex = 10
		sz[len - 1].style.left = "200px";
		sz[len - 1].style.transform = "scale(1.3)"
		sz[len - 1].style.opacity = 1;
		sz[len].style.left = "480px";
		sync_szdiv()
  
  
	}
  
  
	function sync_szdiv() {
		for (let i = 0; i < szdiv.length; i++) {
			if (szdiv[i].name == sz[len - 1].id)
				szdiv[i].style.background = "#e431fc"
			else
				szdiv[i].style.background = "white"
		}
	}
  
  
  }
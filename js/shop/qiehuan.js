console.clear();

let colors = ["#AEF7FF", "#717171", "#FFE8BF", "#f7cfc0", "#373d54", "#efe8de", "#ebecf0"],
	buttons = Array.from(document.querySelectorAll("button")),
	body = document.body;


var colorr = ''

function tz(a) {
	window.location.href = a + '?' + colorr;
}

buttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		btn.classList.toggle("active");
		color = colors.shift();
		colors.push(color);
		let textColor = getCorrectTextColor(color);
		let highlightColor;
		if (textColor == "#635E5E") {
			highlightColor = "#2DE6FE";
		} else {
			highlightColor = "#2DE6FE";
		}
		document.documentElement.style.setProperty("--bg", color);
		colorr = color;
		document.documentElement.style.setProperty("--base", textColor);
		//  textColorr = textColor;
		document.documentElement.style.setProperty("--highlight", highlightColor);
	});

});


function getCorrectTextColor(hex) {
	threshold = 130; /* about half of 256. Lower threshold equals more dark text on dark background  */

	hRed = hexToR(hex);
	hGreen = hexToG(hex);
	hBlue = hexToB(hex);

	function hexToR(h) {
		return parseInt(cutHex(h).substring(0, 2), 16);
	}

	function hexToG(h) {
		return parseInt(cutHex(h).substring(2, 4), 16);
	}

	function hexToB(h) {
		return parseInt(cutHex(h).substring(4, 6), 16);
	}

	function cutHex(h) {
		return h.charAt(0) == "#" ? h.substring(1, 7) : h;
	}

	cBrightness = (hRed * 299 + hGreen * 587 + hBlue * 114) / 1000;
	if (cBrightness > threshold) {
		return "#635E5E";
	} else {
		return "#fff";
	}
}


window.onload = function() {
	// 点赞
	var img_dz = document.getElementsByClassName('ml_dz');
	// var span_color= document.getElementsByClassName('ml_dz').getElementsByTagName('span');
	// console.log()
	for (var i = 0; i < img_dz.length; i++) {
		img_dz[i].onclick = function() {
			var dz = this.getElementsByTagName('span');
			if (this.style.color == "red") {
				this.style.color = 'var(--base)';
				dz[0].innerHTML = parseInt(dz[0].innerHTML) - 1;

			} else {
				this.style.color = 'red';
				dz[0].innerHTML = parseInt(dz[0].innerHTML) + 1;
			}
		}
	};

	var tt = window.location.href
	console.log(tt)
	var colorrr = '';
	colorA = tt.split('#')
	if (!colorA[1] || colorA[1] == 'undefined') {
		document.documentElement.style.setProperty("--bg", '#ebecf0');
		//		console.log('哈哈哈')
	} else {
		document.documentElement.style.setProperty("--bg", '#' + colorA[1]);
	};
	if (colorA[1] == '717171' || colorA[1] == '373d54') {
		document.documentElement.style.setProperty("--base", '#fff');
	}
	colorr = '#' + colorA[1];




	//	console.log('变没变')
	/*  轮播图*/


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
		cur_img.style.boxShadow = "-2px -2px 6px rgb(255, 255, 255),4px 4px 12px rgba(121, 130, 160, 0.747)";
		cur_img.style.border = "5px solid var(--bg)";
		cur_li.appendChild(cur_img);
		cur_li.onmouseenter = function() {
			clearInterval(timer);
		}
		cur_li.onmouseleave = function() {
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

	pre_img.onclick = function() {
		clearInterval(timer);
		get_pre();
		timer = setInterval(get_next, 3000)
	}

	nex_img.onclick = function() {
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
		szdiv[i].onmouseenter = function() {
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
			timer = setInterval(get_next, 3000)
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

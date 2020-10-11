var myElement = document.getElementById('myImg'),
	myImgs = ['../../images/backgrounds/bg_0.jpg',
		'../../images/backgrounds/bg_1.jpg',
		'../../images/backgrounds/bg_2.jpg'];


function changeImage (myElement, myImgs){
	'use strict';
	setInterval(function () {
		var myRandomNum = Math.floor(Math.random() * myImgs.length);
		myElement.src = myImgs[myRandomNum];
	}, 10000);
}

changeImage(myElement, myImgs);

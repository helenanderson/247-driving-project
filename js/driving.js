function StartStop(textid, circleid, screenid) {
	this.text = document.getElementById(textid);
	this.circle = document.getElementById(circleid);
	this.transparency = document.getElementById(screenid);

	var button = this;
	$(this.text, this.circle).click(function() {
		if ($(button.text).attr("class") == "start") {
			button.start();
		} else {
			button.stop();
		}
	})
};

StartStop.prototype.drawCircle = function(color) {
	this.circle.width = window.innerWidth;
    this.circle.height = window.innerHeight;
	var context = this.circle.getContext("2d");
	context.clearRect(0,0,context.canvas.width,context.canvas.height);
	context.arc(350, 900, 160, 0, Math.PI * 2, false);
    context.lineWidth = 25;
	context.strokeStyle = color;
	context.stroke();
	context.fillStyle = 'rgba(225,225,225,0.5)';
	context.fill();
}


StartStop.prototype.start = function() {
	this.startAnimation();
	$(this.text).html("STOP");
	$(this.text).attr("class", "stop");
	this.drawCircle("orangered");
	
}

StartStop.prototype.stop = function() {
	this.stopAnimation();
	$(this.text).html("START");
	$(this.text).attr("class", "start");
	this.drawCircle("deepskyblue");
	
}

StartStop.prototype.startAnimation = function() {
	$(this.transparency).fadeIn(600);
	//$(this.transparency).animate({"visibility": "visible"}, 1000);
	//$(this.picture).attr("src", "images/marbles/blue.jpg").animate({opacity: 1},{duration: 3000});
	
}

// StartStop.prototype.requestAnimationFrame =  
//         window.requestAnimationFrame ||
//         window.webkitRequestAnimationFrame ||
//         window.mozRequestAnimationFrame ||
//         window.msRequestAnimationFrame ||
//         window.oRequestAnimationFrame ||
//         function(callback) {
//           return setTimeout(callback, 1);
//         };

// StartStop.prototype.renderScreen = function() {
// 	var context = this.circle.getContext("2d");
// 	context.rect(0,0,context.canvas.width,context.canvas.height);
// 	context.fillStyle = 'rgba(0,191,255,0.5)');
// 	context.fill();

// 	this.requestAnimationFrame(this.renderScreen);
// }

StartStop.prototype.stopAnimation = function() {
	$(this.transparency).fadeOut(600);
	//$(this.picture).attr("src", "images/marbles/perspective.jpg").animate({opacity: 1},{duration: 3000});
}
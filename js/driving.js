function StartStop(textid, circleid, screenid) {
	this.text = document.getElementById(textid);
	this.circle = document.getElementById(circleid);
	this.transparency = document.getElementById(screenid);

	var button = this;
	$(this.circle).add(this.text).click(function() {
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
	$(this.transparency).fadeIn(800);
}

StartStop.prototype.stopAnimation = function() {
	$(this.transparency).fadeOut(800);
}
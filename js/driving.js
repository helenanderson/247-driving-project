function StartStop(textid, circleid) {
	this.text = document.getElementById(textid);
	this.circle = document.getElementById(circleid);

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
	$(this.text).html("STOP");
	$(this.text).attr("class", "stop");
	this.drawCircle("orangered");
}

StartStop.prototype.stop = function() {
	$(this.text).html("START");
	$(this.text).attr("class", "start");
	this.drawCircle("deepskyblue");
}
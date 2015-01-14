$(document).ready(function() {
	var w = $("#canvas").width(), h = $("#canvas").height();
	var paper = Raphael("canvas", w, h);
	var path = paper.path("M" + (w / 2) + "," + (h) + "L0,0L0,0L0," + (h));
	path.attr("fill", "#333");
	path.attr("stroke", "#333");

	function update_canvas() {
		w = $("#canvas").width();
		h = $("#canvas").height();
		var new_seconds = "M" + (w / 2) + "," + (h)
			+ "L" + (w * (parseInt($("#ts").text()) / 60)) + ",0L0,0L0," + (h);
		path.stop().animate({path: new_seconds}, 1000);
	}

	update_canvas();
	setInterval(function() {
		update_canvas();
	}, 1000);
});
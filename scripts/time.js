$(document).ready(function() {
	// set variables
	var html = new Array($("#th"), $("#tm"), $("#ts"),
		$("#dd"), $("#dm"), $("#dy"));
	var months = new Array("January", "February",
		"March", "April", "May", "June", "July",
		"August", "September", "October", "November", "December");

	function tick(element, value, animate) {
		if (animate) {
			element.addClass("tick");
			setTimeout(function() {
				element.text(value);
				element.removeClass("tick");
			}, 300);
		} else {
			element.text(value);
		}
	}

	function update_time(animate) {
		var now = new Date();

		// fetch new time and date values
		var values = new Array(
			("00" + now.getHours()).substr(-2,2),
			("00" + now.getMinutes()).substr(-2,2),
			("00" + now.getSeconds()).substr(-2,2),
			("00" + now.getDate()).substr(-2,2),
			months[now.getMonth()],
			now.getFullYear());

		// iterate through elements
		for (var i = 0; i < html.length; i++) {
			if (html[i].text() != values[i]) {
				tick(html[i], values[i], animate);
			}
		}
	}

	// set time initially
	update_time(false);

	// schedule time update every second
	setInterval(function() {
		update_time(true);
	}, 1000);

	// unhide all hidden elements
	setTimeout(function() {
		$("#time").removeClass("hidden");
	}, 250);

	setTimeout(function() {
		$("#date").removeClass("hidden");
	}, 500);

	setTimeout(function() {
		$("#canvas").removeClass("hidden");
	}, 1000);
});
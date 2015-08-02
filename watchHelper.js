$(document).ready(function() {
	var rows = $("tr").has("td.name");
	for (index = 0; index < rows.length; index++) {
		if (!$(rows[index]).children(":first").hasClass("green")) {
			$(rows[index]).remove();
		}
	}
});
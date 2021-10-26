function validate() {
	var name = document.forms["editmenuform"]["Name"].value;
	var price = document.forms["editmenuform"]["Price"].value;
	var date = document.forms["editmenuform"]["Date Of Launch"].value;
	var category = document.forms["editmenuform"]["Category"].value;
	if (name == "") {
		alert("Title is required");
		return false;
	} else if ((name.length < 2) || (name.length > 65)) {
		alert("Title should have 2 to 65 characters");
		return false;
	} else if (price == "") {
		alert("Price is required");
		return false;
	} else if (isNaN(price)) {
		alert("Price has to be a number");
		return false;
	} else if (date == "") {
		alert("Date of Launch is required");
		return false;
	} else if (category == "") {
		alert("Select one category");
		return false;
	} else {
		return true;
	}
}

//to validate the form
function validateForm() {
  var form = document.forms["myForm"]["fname"].value;
  if (form == "" || form == null) {
    alert("Name must be filled out");
    return false;
  }
}

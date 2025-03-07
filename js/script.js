// adding this here so i know it's working
console.log("Javascript is loaded");

window.onload = function() {
  // change nojs to hasjs
  jQuery(function($) {
    $("html").removeClass("nojs");
    $("html").addClass("hasjs");
});
 
  // get form
  var form = document.querySelector("form");

  // add submit event handler
  if (form) {
    form.onsubmit = function(event) {
      event.preventDefault();
      
      // show message
      var name = document.getElementById("name").value;
      alert("Thank you " + name + " for signing up! You'll start receiving our weekly recipes soon!");
      
      // reset the form
      form.reset();
      
      return false;
    };
  }
  
  // character counter for the textbox 
  var allergiesTextarea = document.getElementById("allergies");
  var charCount = document.getElementById("charCount");
  
  if (allergiesTextarea && charCount) {
    allergiesTextarea.onkeyup = function() {
      var remaining = 300 - allergiesTextarea.value.length;
      charCount.textContent = remaining + " characters remaining"; // update the character counter
    };
  }
};

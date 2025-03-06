// adding this here so i know it's working
console.log("javascript is loaded");

window.onload = function() {
  // change nojs to hasjs
  document.documentElement.classList.remove('nojs');
  document.documentElement.classList.add('hasjs');
  
  // get form
  var form = document.querySelector("form");
  
  // add submit event handler
  if (form) {
    form.onsubmit = function(event) {
      event.preventDefault();
      
      // show message
      alert("Thank you for signing up! You'll start receiving our weekly recipes soon!");
      
      // reset the form
      form.reset();
      
      return false;
    };
  }
};
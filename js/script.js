document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  
  // add event listener for the submit button
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // pop up thank you message
    alert("Thank you for signing up! You'll start receiving our weekly recipes soon.");
    
    form.reset();
  });
});

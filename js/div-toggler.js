  // Get references to the two div elements
  var div1 = document.getElementById('div1');
  var div2 = document.getElementById('div2');

  // Get a reference to the toggle button
  var toggleButton = document.getElementById('toggleButton');

  // Add an event listener to the toggle button
  toggleButton.addEventListener('click', function() {
    // Toggle the visibility of the two divs
    if (div1.style.display === 'none') {
      div1.style.display = 'block';
      div2.style.display = 'none';
    } else {
      div1.style.display = 'none';
      div2.style.display = 'block';
    }
  });
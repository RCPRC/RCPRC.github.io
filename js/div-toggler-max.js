      // Get references to the three div elements
      var div1 = document.getElementById('div1');
      var div2 = document.getElementById('div2');
      var div3 = document.getElementById('div3');

      // Get a reference to the toggle button
      var toggleButton = document.getElementById('toggleButton');

      // Add an event listener to the toggle button
      toggleButton.addEventListener('click', function() {
        // Toggle the visibility of the three divs
        if (div1.style.display === 'none') {
          div1.style.display = 'block';
          div2.style.display = 'none';
          div3.style.display = 'none';
          toggleButton.textContent = 'Show Div 2';
        } else if (div2.style.display === 'none') {
          div1.style.display = 'none';
          div2.style.display = 'block';
          div3.style.display = 'none';
          toggleButton.textContent = 'Show Div 3';
        } else {
          div1.style.display = 'none';
          div2.style.display = 'none';
          div3.style.display = 'block';
          toggleButton.textContent = 'Show Div 1';
        }
      });
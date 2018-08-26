// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}
  // Toggle between showing and hiding the sidebar when clicking the menu icon
  var mySidebar = document.getElementById("mySidebar");

  function w3_open() {
      if (mySidebar.style.display === 'block') {
          mySidebar.style.display = 'none';
      } else {
          mySidebar.style.display = 'block';
      }
  }

  // Close the sidebar with the close button
  function w3_close() {
      mySidebar.style.display = "none";
  }

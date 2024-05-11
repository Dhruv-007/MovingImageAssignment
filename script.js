document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("movingImage");
    var isMovingRight = true; // Flag to track direction
  
    document.addEventListener("click", function(event) {
      var x = event.clientX;
      var y = event.clientY;
  
      var screenWidth = window.innerWidth;
  
      if (x <= screenWidth / 2 && isMovingRight) {
        // If currently moving right and clicked on left, change direction
        isMovingRight = false;
        image.style.transform = "translate(-50%, -50%) scaleX(-1)";
      } else if (x > screenWidth / 2 && !isMovingRight) {
        // If currently moving left and clicked on right, change direction
        isMovingRight = true;
        image.style.transform = "translate(-50%, -50%) scaleX(1)";
      }
  
      image.style.transition = "left 1s, top 1s"; // Smooth transition for left and top properties
      image.style.left = (x - image.offsetWidth / 2) + "px";
      image.style.top = (y - image.offsetHeight / 2) + "px";
    });
  });
  
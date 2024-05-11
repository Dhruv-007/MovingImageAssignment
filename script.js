document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("movingImage");
    var isMovingRight = true; 
  
    document.addEventListener("click", function(event) {
      var x = event.clientX;
      var y = event.clientY;
  
      var screenWidth = window.innerWidth;
  
      if (x <= screenWidth / 2 && isMovingRight) {
        isMovingRight = false;
        image.style.transform = "translate(-50%, -50%) scaleX(-1)";
      } else if (x > screenWidth / 2 && !isMovingRight) {
        isMovingRight = true;
        image.style.transform = "translate(-50%, -50%) scaleX(1)";
      }
  
      image.style.transition = "left 1s, top 1s"; 
      image.style.left = (x - image.offsetWidth / 2) + "px";
      image.style.top = (y - image.offsetHeight / 2) + "px";
    });
  });
  

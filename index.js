document.addEventListener("DOMContentLoaded", function () {
  var image1 = document.getElementById("img1");
  var image2 = document.getElementById("img2");

  image1.addEventListener("click", function () {
    image2.style.visibility = "hidden";
    image2.style.zIndex = 0;
    image1.style.visibility = "hidden";
    image1.style.zIndex = 0;
  });
});

document.querySelectorAll(".images").forEach((image) => {
  image.addEventListener("click", function () {
    const overlay = document.getElementById("overlay");
    const zoomedImage = document.getElementById("zoomed-image");
    const video = document.getElementsByClassName("video");
    zoomedImage.src = this.src;
    overlay.classList.add("active");
    setTimeout(() => {
      overlay.classList.remove("active");
    }, 5000);
  });
});

document.getElementById("overlay").addEventListener("click", function () {
  this.classList.remove("active");
});

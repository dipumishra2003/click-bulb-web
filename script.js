const myimg = document.getElementById("myimg");
const button = document.getElementById("button");

button.addEventListener("click", function () {
  if (myimg.src.endsWith("off.jpg")) {
    myimg.src = "on.jpg";
  } else {
    myimg.src = "off.jpg";
  }
});

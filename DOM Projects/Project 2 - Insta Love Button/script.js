console.log("DOM Project 2 Initiated");

let container = document.querySelector(".container");
let loveImg = document.querySelector("i");

container.addEventListener("dblclick", () => {
  loveImg.style.transform = `translate(-50%,-50%) scale(1)`;
  loveImg.style.opacity= 0.8;
  // This will delay the HEART to stay for sometime and disappear again.
  setTimeout(function(){
    loveImg.style.opacity = 0
  }, 500)
  setTimeout(function () {
    loveImg.style.transform = `translate(-50%,-50%) scale(0)`;
  }, 1000);
  console.log("Likeddddd!!!!");
});

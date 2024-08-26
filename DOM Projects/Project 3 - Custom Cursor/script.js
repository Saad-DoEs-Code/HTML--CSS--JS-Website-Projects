let main = document.querySelector("#main")
let cursor = document.querySelector(".cursor")

main.addEventListener("mousemove", function(mouseEventDetails){
    cursor.style.left = `${mouseEventDetails.x}px`
    cursor.style.top = `${mouseEventDetails.y}px`
})
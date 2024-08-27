let element = document.querySelectorAll(".element")
let img = document.querySelectorAll(".element img")

element.forEach(elem => {
    
    let image = elem.querySelector("img")
    
    elem.addEventListener("mouseenter", function() {
        image.style.opacity = 1
    })

    elem.addEventListener("mousemove", function(mouseEvents){
        image.style.left = `${mouseEvents.x}px`
        // image.style.top = `${mouseEvents.y-400}px`
    })

    elem.addEventListener("mouseleave", function(){
        image.style.opacity = 0
    })
    
});
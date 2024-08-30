console.log("hello")

const elements = document.querySelectorAll(".element")

// console.log(elements)

elements.forEach((element)=>{

    const img = element.querySelector("img")
    // console.log(img)
    element.addEventListener("mouseenter", function(){
        img.style.opacity = 1;
        img.style.transform = `translateX(-50%) scale(1)`
    })

    element.addEventListener("mousemove", function(mouseEventDetails){
        // console.log(mouseEventDetails)
        img.style.left= `${mouseEventDetails.x}px`;
        
    })

    element.addEventListener("mouseleave", function(mouseEventDetails){
        img.style.opacity = 0;
    })
})

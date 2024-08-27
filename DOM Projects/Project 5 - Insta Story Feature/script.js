console.log("Project 5 Initiated");

let data = [
    {
        story:
            "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1Z2F0dGl8ZW58MHx8MHx8fDA%3D",
        dp: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww",
    },
    {
        story:
            "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1Z2F0dGl8ZW58MHx8MHx8fDA%3D",
        dp: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww",
    },
    {
        story:
            "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1Z2F0dGl8ZW58MHx8MHx8fDA%3D",
        dp: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww",
    },
    {
        story:
            "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1Z2F0dGl8ZW58MHx8MHx8fDA%3D",
        dp: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww",
    },
];
let clutter = ""
data.forEach((element, index)=>{
    let image = `<div class="story">
                <img id="${index}" src="${element.dp}" alt="">
            </div>`

    clutter += image
})

document.querySelector(".stories").innerHTML = clutter

document.querySelector(".stories").addEventListener("click", function(mousePointerEvents){
    document.querySelector("#fullscreen").style.display = "block";
    document.querySelector("#fullscreen").style.backgroundImage = `url(${data[mousePointerEvents.target.id].story})`;

    setTimeout(()=>{
        document.querySelector("#fullscreen").style.display = "none";
    }, 3000)

})

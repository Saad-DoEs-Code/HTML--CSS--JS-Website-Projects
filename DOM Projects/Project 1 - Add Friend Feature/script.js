console.log("Started")

let relation = document.querySelector("h5");
let btn = document.querySelector("#add")
let isFriend = false
// let removeFriendBtn = document.querySelector("#remove")



btn.addEventListener("click", function(){

    if(!isFriend){
        // Friends Ban Gye hain... Idhr removal ka code ha 
        relation.textContent = "Friends"
        relation.style.color = "green"
        isFriend= true
        console.log("We are friends now!!!")
        btn.innerHTML= "Remove Friend"
        btn.style.backgroundColor = "gray"
    } else{
        relation.textContent = "Strangers"
        relation.style.color = "red"
        isFriend = false
        console.log("Everything I have tried to let go off has claw marks on it...")
        btn.innerHTML= "Add Friend"
        btn.style.backgroundColor = "cadetblue"
    }
});

// removeFriendBtn.addEventListener("click", function(){
//     relation.textContent = "Strangers"
//     relation.style.color = "red"
// });
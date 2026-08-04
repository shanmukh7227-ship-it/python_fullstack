alert("Welcome to NRIIT Learning Management System")
let heading = document.getElementById("welcome");
heading.innerHTML = "Welcome Future Software Engineers"
console.log("Heading element: ", heading)
let msg=document.getElementByIdId("message")
msg.innerHTML="javascript is fun"
console.log("message element:",msg)
function showmessage(){
    alert("welcome to NRIIT Learning Management System")}
function changeHeading(){
    document.getElementById("welcome").innerHTML ="Welcome Python Fullstack Developers"}
let handling1=document.querySelector("#welcome");
console.log("Handling elements: ",handling1)
let button=document.getElementById("btnGreeting");
button.addEventListener("click",function()){
    alert("welcome to javascript event handling")
}
function(event){
    event.preventdefault();
    let name=document.getElementById("name").Value;
    let email=document.getElementById("email").Value;
    let password=document.getElementById("password").Value;
    if(!name|| !email|| !password){
        alert("please fill in all fields");
        return;
    }

}

}



let  nav = document.getElementById("actor-name1")
console.log(nav);
window.onscroll = function () {

if(window.pageYOffset >160){
document.querySelector("div h4").removeAttribute('id');
nav.classList.add("actor-edit");
}

else{
    document.querySelector("div h4").id="actor-name1"
    nav.classList.remove("actor-edit")
}

}
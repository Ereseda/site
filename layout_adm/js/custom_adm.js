//dropdown navbar
let notification = document.querySelector(".notification");
let avatar = document.querySelector(".avatar");


dropMenu(avatar);

dropMenu(notification);

function dropMenu(selector){
   // console.log(selector);
    selector.addEventListener("click", ()=>{
        let dropdownMenu = selector.querySelector(".dropdown-menu ");

        dropdownMenu.classList.contains("active") ? dropdownMenu.classList.remove("active") : dropdownMenu.classList.add("active");
    });    
}
//Sidebar Toggle / bars

let sidebar = document.querySelector(".sidebar");
let bars = document.querySelector(".bars");


bars.addEventListener("click", () =>{
    sidebar.classList.contains("active") ? sidebar.classList.remove("active") : sidebar.classList.add("active");
});

function actionDropdown(id){
    closeDropdownAction();
    document.getElementById("actionDropdown" + id).classList.toggle("show-dropdowm-action");
}

window.onclick = function(event){
    if(!event.target.matches(".dropdown-btn-action")){
        /*document.getElementById("actionDropdown").classList.remove("show-dropdowm-action");*/
        closeDropdownAction();
    }
}

function closeDropdownAction(){
    var dropdowns = document.getElementsByClassName("dropdown-action-item");
    var i;

    for(i= 0; i < dropdowns.length;i++){

        var openDropdown = dropdowns[i];

        if(openDropdown.classList.contains("dropdown-action-item")){
            openDropdown.classList.remove("dropdown-action-item");

        }
    }
}








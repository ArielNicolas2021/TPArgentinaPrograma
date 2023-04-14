const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".menu-open");
const closeMenuBtn = document.querySelector(".menu-close");

function toggleMenu() {
    menu.classList.toggle("menu-opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

var nuevos = document.getElementById('nuevos-btn');
var usados = document.getElementById('usados-btn');
var checkbox = document.querySelectorAll('.checkbox');
var nuevosContent = document.getElementById ('nuevos');
var usadosContent = document.getElementById ('usados');


nuevos.addEventListener('click',function(){
    nuevosContent.style.display = 'none';
    checkbox.forEach((e) => {
        if(e.checked == true){
            nuevosContent.style.display = 'block';
        }
    });
});
usados.addEventListener('click',function(){
    usadosContent.style.display = 'none';
    nuevosContent.style.display = 'none';
    checkbox.forEach((e)=>{
        if(e.checked==true){
            nuevosContent.style.display = 'block';
        }
    });
});
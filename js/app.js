var check=document.querySelector(".check");
check.addEventListener('click',idioma);
function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="es/index.html";
    }
    else{
        location.href="../index.html";
    }
}
//scroll up
document.getElementById("button-up").addEventListener("click", scrollUp);
function scrollUp(){
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll/ 10));
    }
}

import '../css/main.scss';

const images = document.querySelectorAll('.gIMG');
const button = document.getElementById("buttonGT");
//scroll to top
button.addEventListener('click', ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
},true );

window.onscroll = function(){
    scrollFunction();
};
function scrollFunction(){

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        button.style.display = "block";
    }else{
        button.style.display = "none";
    }
}

//thubnail
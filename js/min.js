let nav = document.getElementById('navbar');
let sidbar = document.getElementById('sidbar');
let hide = document.getElementById('hide');

window.addEventListener('resize',function(){
    if(window.innerWidth >=556){
        hide.style.display ="none";
        nav.style.display ="none";
        sidbar.style.display="none";

    }
    else{
        nav.style.display ="block";
        sidbar.style.display="none";
        hide.style.display ="none";

    }
})



nav.onclick= function (){
    sidbar.style.display="block";
    nav.style.display ="none";
    hide.style.display ="block";
    
    }
    hide.onclick= function (){
        sidbar.style.display="none";
        hide.style.display ="none";
        nav.style.display ="block";
    }
     

    



    let scroltop =  document.getElementById('scroltop');

    window.onscroll = function(){
        if(scrollY >= 100){
            scroltop.style.display ='block';
        }
        else{
            scroltop.style.display ='none';
    
        }
    }
    scroltop.onclick = function(){
     scroll({
        left:0,
        top:0,
        behavior:"smooth",
     })
    }
    
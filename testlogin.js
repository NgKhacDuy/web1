
 

        
var x = document.getElementById("DN");
var y = document.getElementById("DK");
var z = document.getElementById("l-but");

function Dangky(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "150px";
}
function Dangnhap(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

    document.querySelector(".login").addEventListener('click',function(){
    document.querySelector(".popup").classList.add('active');
    document.querySelector(".popup").classList.add('popup-overlay');
    // document.querySelector(".popup").classList.add('sticky');
    //document.querySelector("body").classList.add('hide');
    });
    document.querySelector(".popup .loginform .close-btn").addEventListener('click',function(){
        document.querySelector(".popup").classList.remove('active');
        document.querySelector(".popup").classList.remove('popup-overlay');
        // document.querySelector(".popup").classList.remove('sticky');
        // document.querySelector("body").classList.remove('hide');
        });










        //scrolls xuống thì execute mF
window.onscroll = function() {myFunction()};
//topbar
var topbar = document.getElementById("top-b");

var sticky = topbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
      topbar.classList.add("sticky")
      
    } else {
      topbar.classList.remove("sticky");
      
    }
  }
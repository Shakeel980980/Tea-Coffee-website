navbarresponsive();
function navbarresponsive(){
  //Start side nav bar visible and invisible
  let bar=document.querySelector(".bar");
  let menList=document.querySelector(".menuList");
  let cross=document.querySelector(".cross");
  
  bar.addEventListener("click", function(){
  if(menList.style.maxHeight == "0px"){
    menList.style.maxHeight = "800px";
    cross.style.visibility="visible";
  }
  else{
    menList.style.maxHeight = "0px";
    cross.style.visibility="hidden";
  }
  });
  
  cross.addEventListener("click", function(){
      menList.style.maxHeight = "0px";
      cross.style.visibility="hidden";
    });
    //End side nav bar visible and invisible
  //menu
}


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay:{
    delay:2500,
  },
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
  0:{
    slidesPerView: 1,
  },
  786:{
    slidesPerView: 2,
  },
  1024:{
    slidesPerView: 3,
  }
}
});
//end slide swiper
const navbarBtn = document.querySelector(".header .fa-bars-staggered")

const mobileMenyu = document.querySelector(".mobile-menyu")
const closeIcon = document.querySelector(".fa-circle-xmark")


navbarBtn.addEventListener("click", function () {
    mobileMenyu.classList.add("aktiv")
})

closeIcon.addEventListener("click", function () {

    mobileMenyu.classList.remove("aktiv")
})


const swiper = new Swiper(".visionSwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },

});




{/*  */ }

const visionDivi = document.querySelector("#vision")


window.addEventListener("load", getLocaldanMelumatlariGetir)

async function getLocaldanMelumatlariGetir() {
    const unvan = "assets/vision.json"


    try {
        const gelenCavab = await fetch(unvan)

        const vision = await gelenCavab.json()


        vision.forEach(function (oneVision) {
            visionDivi.innerHTML += `
<div class="swiper-slide text-center">
 <div class="card rounded-0">
    <div class="card-body">
      <h5 class="card-title">${oneVision.vision_name}</h5>
      <p class="card-text">${oneVision.vision_context}</p>
      <a href= class="card-nav">${oneVision.vision_nav}</a>
    </div>

  </div>
 
</div>

</div>
      `
        });

    }

    catch (err) {

    }

}




const karusel = new Swiper(".shirketlerKaruseli", {
    slidesPerView: 4,
    spaceBetween: 30,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  });

new Accordion('.accordion-left');
new Accordion('.accordion-right');





    
  
const startFreeTrialButton = document.getElementById("start-free-trial")

startFreeTrialButton.addEventListener("click", function(e){

    e.preventDefault ()
 
  Swal.fire({
    title: 'Welcome!',
    text: 'Are you ready to get started with our Shopify platform?',
    icon: 'question',
    confirmButtonText: 'Yes, let\'s go!',
    showCancelButton: true,
    cancelButtonText: 'No, thanks'
  }).then((result) => {
    if (result.isConfirmed) {
      // İstifadəçi "Yes" düyməsinə klik edəndə buraya daxil olur
      Swal.fire('Great!', 'Let\'s get started!', 'success');
    } else {
      // İstifadəçi "No" düyməsinə klik edəndə buraya daxil olur
      Swal.fire('Maybe next time!', '', 'info');
    }
  });

})

const getProductsButton = document.getElementById("get-products")

getProductsButton.addEventListener("click", function(e){
  e.preventDefault ();

    
 
  Swal.fire({
    title: 'Welcome!',
    text: 'Are you ready to get started with our Shopify platform?',
    icon: 'question',
    confirmButtonText: 'Yes, let\'s go!',
    showCancelButton: true,
    cancelButtonText: 'No, thanks'
  }).then((result) => {
    if (result.isConfirmed) {
      // İstifadəçi "Yes" düyməsinə klik edəndə buraya daxil olur
      Swal.fire('Great!', 'Let\'s get started!', 'success');
    } else {
      // İstifadəçi "No" düyməsinə klik edəndə buraya daxil olur
      Swal.fire('Maybe next time!', '', 'info');
    }
  });

})





const playIconBtn = document.querySelector("#play-icon-btn")
const modaliBaglaIconu = document.querySelector(".modal-boxes .fa-xmark")
const modalQutuDivi =  document.querySelector(".arxasi-solgun-reng")

const modaliAc = () => {
 modalQutuDivi.classList.add("aktiv")
}
const modaliBagla = () => {
  modalQutuDivi.classList.remove("aktiv")
}


playIconBtn.addEventListener("click", modaliAc)
modaliBaglaIconu.addEventListener("click", modaliBagla)















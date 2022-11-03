//Modal pop-up
const rulesBtn = document.querySelector(".rules-btn"); 
const imgCloseBtn  = document.querySelector(".img-close");
const modalToggle = document.querySelector(".hidden-modal"); 
const modalBgToggle = document.querySelector(".hidden-bg"); 
const modalBg = document.querySelector(".modal-bg")

rulesBtn.addEventListener("click", rulesModal);
imgCloseBtn.addEventListener("click", rulesModal);
modalBg.addEventListener("click", rulesModal); 

function rulesModal() {
    modalToggle.classList.toggle("hidden-modal");
    modalBgToggle.classList.toggle("hidden-bg");
};


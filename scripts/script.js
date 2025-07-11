let overlay = document.querySelector(".overlay");
let menuItem = document.querySelector(".menu__item--hassub");
let header = document.querySelector(".header");
let cartBtn = document.querySelector(".cart__btn");
let cartBody = document.querySelector(".cart__body");
let overlayCart = document.querySelector(".overlay-cart");
let mobilCarteBtn = document.querySelector(".mobile-cart__btn");
let mobileCart = document.querySelector(".mobile-cart");
let mobileCartCloseBtn = document.querySelector(".mobile-cart__close-btn");

menuItem.addEventListener("mouseover", function (){
    overlay.classList.add("overlay--show")
})

menuItem.addEventListener("mouseout", function (){
    overlay.classList.remove("overlay--show")
})


cartBtn.addEventListener("click", function (){
    cartBody.classList.add("cart__body--active");
    overlayCart.classList.add("overlay--show");
    header.style.zIndex = "auto";
})

overlayCart.addEventListener("click", function (){
    cartBody.classList.remove("cart__body--active");
    overlayCart.classList.remove("overlay--show");
    setTimeout(function (){
        header.style.zIndex = "20";
    },100)
})

mobilCarteBtn.addEventListener("click", function (){
    mobileCart.classList.add("mobile-cart--open");
    overlay.classList.add("overlay--show");
})

mobileCartCloseBtn.addEventListener("click", function (){
    mobileCart.classList.remove("mobile-cart--open");
    overlay.classList.remove("overlay--show");
})


//product-item
document.querySelectorAll('.submenu__item-wrapper').forEach(item => {
    item.addEventListener('mouseenter', function() {
        document.querySelectorAll('.submenu__item-body').forEach(body => {
            body.style.display = 'none';
        });
        
        this.querySelector('.submenu__item-body').style.display = 'flex';
    });
});

document.querySelector('.submenu').addEventListener('mouseleave', function() {
    document.querySelectorAll('.submenu__item-body').forEach(body => {
        body.style.display = 'none';
    });
    document.querySelector('.submenu__item-wrapper:first-child .submenu__item-body').style.display = 'flex';
});

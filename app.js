const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener('click', function () {
    searchForm.classList.toggle("active");
    document.addEventListener('click', function (e) {
        if (!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm))
        {
            searchForm.classList.remove("active");
        }
    })
});

const cartItems = document.querySelector(".cart-items-container");
const cartBtn = document.querySelector("#cart-btn");

cartBtn.addEventListener('click', function () {
    cartItems.classList.toggle("active");
    document.addEventListener('click', function (e) {
        if (!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItems))
        {
            cartItems.classList.remove("active");
        }
    })
});

const delItemBtn4 = document.querySelector("#del4");
const item4 = document.querySelector(".cart-item4");

delItemBtn4.addEventListener('click', function () {
    item4.remove();
});
const delItemBtn1 = document.querySelector("#del1");
const item1 = document.querySelector(".cart-item1");
    
delItemBtn1.addEventListener('click', function () {
        item1.remove();

});
    
const delItemBtn2 = document.querySelector("#del2");
const item2 = document.querySelector(".cart-item2");
    
delItemBtn2.addEventListener('click', function () {
        item2.remove();

});
    
const delItemBtn3 = document.querySelector("#del3");
const item3 = document.querySelector(".cart-item3");
    
delItemBtn3.addEventListener('click', function () {
        item3.remove();

    });
 
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener('click', function () {
    console.log("tıklandı");
    navbar.classList.toggle("active");

    document.addEventListener('click', function (e) {
        if (!e.composedPath().includes(menuBtn) && !e.composedPath().includes(navbar))
        {
            navbar.classList.remove("active");
        }
    })
});

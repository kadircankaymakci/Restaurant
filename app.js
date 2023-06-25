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

const delItemBtn = document.querySelector("#del");
const item = document.querySelector(".cart-item4");

delItemBtn.addEventListener('click', function () {
    item.remove();

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

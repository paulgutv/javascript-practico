const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const cartMenu = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

navEmail.addEventListener("click", toggleDesktopMenu);
mobileMenuIcon.addEventListener("click", toggleMobileMenu);
cartIcon.addEventListener("click", toggleCartMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    cartMenu.classList.add("inactive");
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    cartMenu.classList.add("inactive");
}
function toggleCartMenu() {
    cartMenu.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
}

const productList = [];
productList.push ({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push ({
    name: "Scooter",
    price: 100,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push ({
    name: "Motorbike",
    price: 400,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});


function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");
        
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;

        const productName = document.createElement("p");
        productName.innerText = product.name;

        const productInfoFigure = document.createElement("figure");

        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

        productInfoDiv.append(productPrice, productName);
        productInfoFigure.append(productImgCart);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
        cardsContainer.append(productCard);
    }
}

renderProducts(productList);
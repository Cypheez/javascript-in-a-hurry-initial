// Constants

const galleryImages = [
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnail Image 1"
    },
    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 2"
    },
    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 3"
    }
];

const products = [
    {
      title: "AstroFiction",
      author: "John Doe",
      price: 49.9,
      image: "./assets/products/img6.png"
    },
    {
      title: "Space Odyssey",
      author: "Marie Anne",
      price: 35,
      image: "./assets/products/img1.png"
    },
    {
      title: "Doomed City",
      author: "Jason Cobert",
      price: 0,
      image: "./assets/products/img2.png"
    },
    {
      title: "Black Dog",
      author: "John Doe",
      price: 85.35,
      image: "./assets/products/img3.png"
    },
    {
      title: "My Little Robot",
      author: "Pedro Paulo",
      price: 0,
      image: "./assets/products/img5.png"
    },
    {
      title: "Garden Girl",
      author: "Ankit Patel",
      price: 45,
      image: "./assets/products/img4.png"
    }
];

// Menu Section

function menuHandler(){
    document.querySelector("#open-nav-menu").addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.add("nav-open");
    });

    document.querySelector("#close-nav-menu").addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });
}

// Greeting Section

function greetingHandler(){
    let currentHour = new Date().getHours();
    let greetingText;

    if (currentHour < 12) greetingText = "Good morning";
    else if (currentHour < 19) greetingText = "Good afternoon";
    else if (currentHour < 24) greetingText = "Good evening";
    else greetingText = "Welcome";

    const weatherCondition = "sunny";
    const userLocation = "Frankfurt a.M."
    let temperature = 30;

    let celsiusText = `The weather is ${weatherCondition} in ${userLocation} with it being ${temperature}°C outside.`;
    let fahrenheitText = `The weather is ${weatherCondition} in ${userLocation} with it being ${tempConversion(temperature).toFixed(1)}°F outside.`;

    document.querySelector("#greeting").innerHTML = greetingText;
    document.querySelector("p#weather").innerHTML = celsiusText;

    document.querySelector(".weather-group").addEventListener("click", function (event){
        if (event.target.id == "celsius"){
           document.querySelector("p#weather").innerHTML = celsiusText;
        } else {
            document.querySelector("p#weather").innerHTML = fahrenheitText;
        }
    })
}

// Clock Section

function clockHandler(){
    setInterval(function (){
        let localTime = new Date();
        document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2,"0");
        document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2,"0");
        document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2,"0");
    }, 1000)
}

// Gallery Section

function galleryHandler(){
    let mainImage = document.querySelector("#gallery > img");
    let thumbnails = document.querySelector("#gallery > .thumbnails");

    mainImage.src = galleryImages[0].src;
    mainImage.alt = galleryImages[0].alt;

    galleryImages.forEach(function(image, index){
       let thumb = document.createElement("img");
        thumb.src = image.src;
        thumb.alt = image.alt;
        thumb.dataset.arrayIndex = index;
        thumb.dataset.selected = index === 0 ? true : false;

        thumb.addEventListener("click", function(event){
            let selectedIndex = event.target.dataset.arrayIndex;
            let selectedImage = galleryImages[selectedIndex];

            mainImage.src = selectedImage.src;
            mainImage.alt = selectedImage.alt;

            thumbnails.querySelectorAll("img").forEach(function(img){
                img.dataset.selected = false;
            });
            event.target.dataset.selected = true;
        });

        thumbnails.appendChild(thumb);
    })
}

// Temperature Conversion

function tempConversion(temperature){
    let fahrenheit = (temperature * (9/5)) + 32;
    return fahrenheit;
}

// Products Section

/* <div class="product-item">
            <img src="./assets/products/img6.png" alt="AstroFiction">
            <div class="product-details">
                <h3 class="product-title">AstroFiction</h3>
                <p class="product-author">John Doe</p>
                <p class="price-title">Price</p>
                <p class="product-price">$ 49.90</p>
            </div>
        </div> */

function productsHandler(){
    let productsSection = document.querySelector(".products-area");

    // Run a loop through the products and create a HTML element ("product-item") each
    products.forEach(function(product, index){

        // Create the HTML element for the individual product 
        let productElement = document.createElement("div");
        productElement.classList.add("product-item");

        // Create the product image
        let productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.title;

        // Add all child HTML elements of the product
        productElement.append(productImage);

        // Add complete individual product for the product section
        productsSection.append(productElement);
    });
}

// Page Load

menuHandler();
greetingHandler();
clockHandler();
galleryHandler();
productsHandler();
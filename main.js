// Menu Section

document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

// Greeting Section

let temperature = 30;

function tempConversion(temperature){
    let fahrenheit = (temperature * (9/5)) + 32;
    return fahrenheit;
}

const greetingText = "Good Morning";
const weatherCondition = "sunny";
const userLocation = "Frankfurt a.M."
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
});

// Clock Section

setInterval(function (){
    let localTime = new Date();
    document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2,"0");
    document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2,"0");
    document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2,"0");
}, 1000);

// Gallery Section

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
    },
    {
        src: "./assets/gallery/img1.png",
        alt: "Thumbnail Image 4"
    }
];

let mainImage = document.querySelector("#gallery > img");
let thumbnails = document.querySelector("#gallery > .thumbnails");

mainImage.src = galleryImages[3].src;
mainImage.alt = galleryImages[3].alt;

//img src="./assets/gallery/image1.jpg" alt="Thumbnail Image 1" data-array-index="0" data-selected="true">

galleryImages.forEach(function(image, index){
    let thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    thumb.dataset.selected = index === 3 ? true : false;
    thumbnails.appendChild(thumb);
});
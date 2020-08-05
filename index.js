// const axios = require("axios");
// require("dotenv").config()
// const apiKey = process.env.API_KEY
// const apiKey = "1edb01805b03ec766525435c8a6effd0";
// Build an app that allows a user to find breweries near them.

let arrayOfLows;
let arrayOfHighs;
let arrayRandom;

// eslint-disable-next-line no-undef
window.onload = function () {
  low();
  high();
  random();
};

function initparticles() {
  bubbles();
}

const random = () => {
  fetch("https://api.punkapi.com/v2/beers/random")
    .then((res) => res.json())
    .then((response) => (arrayRandom = response));
  //     .catch((error) => console.log(error));
};

const low = () => {
  fetch("https://api.punkapi.com/v2/beers?abv_lt=5")
    .then((res) => res.json())
    .then((response) => (arrayOfLows = response));
};

const high = () => {
  fetch(" https://api.punkapi.com/v2/beers?abv_gt=5")
    .then((res) => res.json())
    .then((response) => (arrayOfHighs = response));
};

const clearList = () => {
  allBeer = this.document.getElementsByTagName("UL");
  // eslint-disable-next-line prettier/prettier
  for (i = 0; i < allBeer.length; i++) allBeer[i].innerHTML = null;
};

const randomBeer = () => {
  clearList();
  random();
  const allBeer = this.document.getElementById("all-beer");
  arrayRandom.forEach((beer) => {
    const li = this.document.createElement("li");
    const img = this.document.createElement("img");
    img.src = beer.image_url;
    const beerObject = this.document.createTextNode(
      `Beer Name: ${beer.name}, Tagline: ${beer.tagline}, ABV: ${beer.abv}, Description: ${beer.description}`
    );
    li.appendChild(beerObject);
    allBeer.append(li);
    allBeer.append(img);
    console.log(beer);
  });
};

const lowBeers = () => {
  clearList();
  const allBeer = this.document.getElementById("all-beer");
  arrayOfLows.forEach((beer) => {
    const li = this.document.createElement("li");
    const beerObject = this.document.createTextNode(
      `Beer Name: ${beer.name}, Tagline: ${beer.tagline}, ABV: ${beer.abv}, Description: ${beer.description}`
    );
    li.appendChild(beerObject);
    allBeer.append(li);
    console.log(beer);
  });
};

const highBeers = () => {
  clearList();
  const allBeer = this.document.getElementById("all-beer");
  arrayOfHighs.forEach((beer) => {
    const li = this.document.createElement("li");
    const beerObject = this.document.createTextNode(
      `Beer Name: ${beer.name}, Tagline: ${beer.tagline}, ABV: ${beer.abv}, Description: ${beer.description}`
    );
    li.appendChild(beerObject);
    allBeer.append(li);
    console.log(beer);
  });
};

// JQUERY bubble stuff

function bubbles() {
  $.each($(".particletext.bubbles"), function () {
    const bubblecount = ($(this).width() / 50) * 10;
    for (let i = 0; i <= bubblecount; i++) {
      const size = $.rnd(40, 80) / 10;
      $(this).append(
        `<span class="particle" style="top:${$.rnd(20, 80)}%; left:${$.rnd(
          0,
          95
        )}%;width:${size}px; height:${size}px;animation-delay: ${
          $.rnd(0, 30) / 10
        }s;"></span>`
      );
    }
  });
}

jQuery.rnd = function (m, n) {
  m = parseInt(m);
  n = parseInt(n);
  return Math.floor(Math.random() * (n - m + 1)) + m;
};

initparticles();

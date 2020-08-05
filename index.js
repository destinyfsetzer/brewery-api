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

const random = () => {
  fetch("https://api.punkapi.com/v2/beers/random")
    .then((res) => res.json())
    .then((response) => (arrayRandom = response));
  //     .catch((error) => console.log(error));
};

const consoleBeer = () => {
  console.log(arrayOfLows);
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

const randomBeer = () => {
  const allBeer = document.getElementById("all-beer");
  arrayRandom.forEach((beer) => {
    const li = document.createElement("li");
    const beerObject = document.createTextNode(
      `Beer Name: ${beer.name}, Tagline: ${beer.tagline}, ABV: ${beer.abv}, Description: ${beer.description}`
    );
    li.appendChild(beerObject);
    allBeer.append(li);
    console.log(beer);
  });
};

const lowBeers = () => {
  const allBeer = document.getElementById("all-beer");
  arrayOfLows.forEach((beer) => {
    const li = document.createElement("li");
    const beerObject = document.createTextNode(
      `Beer Name: ${beer.name}, Tagline: ${beer.tagline}, ABV: ${beer.abv}, Description: ${beer.description}`
    );
    li.appendChild(beerObject);
    allBeer.append(li);
    console.log(beer);
  });
};

const highBeers = () => {
  const allBeer = document.getElementById("all-beer");
  arrayOfHighs.forEach((beer) => {
    const li = document.createElement("li");
    const beerObject = document.createTextNode(
      `Beer Name: ${beer.name}, Tagline: ${beer.tagline}, ABV: ${beer.abv}, Description: ${beer.description}`
    );
    li.appendChild(beerObject);
    allBeer.append(li);
    console.log(beer);
  });
};
//          <button onclick="consoleBeer()">Console Beer</button>
//         <button onclick="lowBeer()">Low ABV</button>
//         <button onclick="midBeer()">Mid ABV</button>
//         <button onclick="highBeer()">High ABV</button>
//         <button onclick="randomBeer()">RANDOM</button>

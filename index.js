// const axios = require("axios");
// require("dotenv").config()
// const apiKey = process.env.API_KEY
const apiKey = "1edb01805b03ec766525435c8a6effd0";
// Build an app that allows a user to find breweries near them.

let arrayOfBeers;

window.onload = function () {
  getBeers();
};

const getBeers = () => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url =
    "https://sandbox-api.brewerydb.com/v2/beer/random?key=1edb01805b03ec766525435c8a6effd0";

  fetch(proxyurl + url)
    .then((res) => res.json())
    .then((response) => (arrayOfBeers = response))
    .catch(() =>
      console.log("Can’t access " + url + " response. Blocked by browser?")
    );
};

const consoleBeer = () => {
  console.log(arrayOfBeers);
};

// const getBeers = () => {
//   axios(
//     "https://sandbox-api.brewerydb.com/v2/beer/random?key=1edb01805b03ec766525435c8a6effd0",
//     {
//       method: "HEAD",
//       mode: "no-cors",
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       withCredentials: true,
//       credentials: "same-origin",
//       crossdomain: true,
//     }
//   )
//     .then((response) => (arrayOfBeers = response))
//     .catch((error) => console.log(error));
// };

// const displayBeers = () => {
//   const allBeer = document.getElementById("all-beer")
//   arrayOfBeers.forEach(beer) => {
//     const li = document.createElement("li")
//     const randomBeer = document.createTextNode(
//       `Beer Name: ${name}, Beer Style: ${style.name}, ABV: ${abv}, Description: ${style.description}`)
//     }
//     li.appendChild(randomBeer)
//         allBeer.append(li)
//         console.log(beer)
// }

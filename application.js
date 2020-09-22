const BASE_URL = "http://localhost:3001";
const RESTAURANTS_URL = `${BASE_URL}/restaurants`;
console.log("Hello")

const container = document.getElementById("container");

const renderRestaurants = async () => {
  const restaurants = await getRestaurants();
  for (const restaurant of restaurants) {
      container.innerHTML = ("[" + restaurants[i].id + "]: " + restaurants[i].name) + "<br>"
      //console.log(restaurant)
  };
}

const getRestaurants = async () => {
    const response = await fetch(`${RESTAURANTS_URL}`)
    const data = response.json();
      console.log(data);
    }



/*
const BASE_URL = "http://localhost:3001";
const RESTAURANTS_URL = `${BASE_URL}/restaurants`;

const container = document.getElementById("container");

document.addEventListener("DOMContentLoaded", () => {
  renderRestaurants();
});

const renderRestaurants = async () => {
  try {
    const restaurants = await getRestaurants();
    for (const restaurant of restaurants) {
        container.innerHTML = ("[" + restaurants[i].id + "]: " + restaurants[i].name) + "<br>"
    };
  } catch (error) {
    console.log(error);
  }
};


const getRestaurants = async () => {
    try {
      const response = await fetch(`${RESTAURANTS_URL}`);
      const json = await response.json();
      return json.data;
    } catch (error) {
      console.log(error);
    }
};


function getRestaurants() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let container = document.getElementById("container");
            let responses = JSON.parse(this.responseText)

            for (var i = 0; i < responses.length; i++) {
                container.insertAdjacentHTML("beforeend", "[" + responses[i].id + "]: " + responses[i].name) + "<br>"
            };
        }
    };
    xhttp.open("GET", "http://localhost:3001/restaurants", true)
    xhttp.send();
}
*/

renderRestaurants();

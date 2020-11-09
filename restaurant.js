const RESTAURANTS_URL = `${BASE_URL}/restaurants`;

let myRestaurants = [];
const restaurantsList = document.getElementById("restaurantsList");
const newRestForm = document.getElementById("new-restaurant-form");

class Restaurant {
    constructor(name, location, cuisine) {
      this.name = name;
      this.location = location;
      this.cuisine = cuisine;
    }
}

let newResta = new Restaurant();

btn.onclick = function() {
    modals.style.display = "block";
}
  
span.onclick = function() {
    modals.style.display = "none";
}
  
window.onclick = function(event) {
    if (event.target == modals) {
      modals.style.display = "none";
    }
}

newRestForm.onsubmit = async (e) => {
    e.preventDefault();
    let response = await fetch('http://localhost:3000/restaurants', {
        method: 'POST',
        body: new FormData(newRestForm)
    })
    let result = await response.json();
    console.log(result);
    location.reload()
};


const loadRestaurants = async () => {
    try {
      const res = await fetch('http://localhost:3000/restaurants');
      myRestaurants = await res.json();
      console.log(myRestaurants);
    } catch (err) {
      console.error(err);
    }
}

function allRestaurants() {
    restToggle = document.getElementById("all-restaurants-toggle");
    if (containers.innerHTML === "") {
      fetch(RESTAURANTS_URL)
        .then(resp => resp.json())
        .then(restaurants => {
          for (let i = 0; i < restaurants.length; i++) {
            containers.insertAdjacentHTML("beforeend", `[${restaurants[i].id}]: ${restaurants[i].name} - ${restaurants[i].cuisine} cuisine in ${restaurants[i].location}.<br>`
          )};
          
  
          restToggle.innerHTML = "Hide Restaurants";
        });
    } else {
      hideRestaurants();
      restToggle.innerHTML = "Show Restaurants";
    }
};
  
  
  
function hideRestaurants() {
    containers.innerHTML = "";
}

const displayRestaurantChoice = (restaurant) => {
  const htmlString = restaurant
      .map((restaurant) => {
          return `
          <li class="restaurant">
              <a class="restaurant decision" onclick="foodOrder('` + restaurant.id + '\',\'' + restaurant.name + `')" data-restaurant-id="${restaurant.id}"><h2>${restaurant.name}</h2></a>
              <p>Borough: ${restaurant.location}</p>
              <p>Cuisine: ${restaurant.cuisine}</p>
          </li>
      `;
      })
      .join('');
  restaurantsList.innerHTML = htmlString;


};

loadRestaurants();

/*
class Restaurant {
    constructor(name, location, cuisine) {
      this.name = name;
      this.location = location;
      this.cuisine = cuisine;
    }
}
*/


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

loadRestaurants();
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
//    addRestaurantForm();
}
  
span.onclick = function() {
    modals.style.display = "none";
}
  
window.onclick = function(event) {
    if (event.target == modals) {
      modals.style.display = "none";
    }
}

/*
function addRestaurantForm() {
    let modal = document.getElementById("modal-form");
    let form = document.createElement("form");
    form.setAttribute("method", "post");
    form.id = "new-restaurant-form";

    let ID = document.createElement("input");
    ID.setAttribute("type", "text");
    ID.setAttribute("name", "restaurant[name]");
    ID.setAttribute("placeholder", "Restaurant Name");

    let s = document.createElement("input");
    s.setAttribute("type", "text");
    s.setAttribute("name", "restaurant[location]");
    s.setAttribute("placeholder", "Location");

    let a = document.createElement("input");
    a.setAttribute("type", "text");
    a.setAttribute("name", "restaurant[cuisine]");
    a.setAttribute("placeholder", "Cuisine");

    let p = document.createElement("input");
    p.setAttribute("type", "submit");
    p.setAttribute("value", "Submit");
  
    form.append(ID);
    form.append(s);
    form.append(a);
    form.append(p);
  
    modal.appendChild(form);
}
*/

function submitRestaurant() {
    const newRestForm = document.getElementById("new-restaurant-form");
    newRestForm.onsubmit = async (e) => {
      e.preventDefault();
      let response = await fetch('http://localhost:3000/restaurants', {
        method: 'POST',
        body: new FormData(newRestForm)
      });
  
      let result = await response.json();
  
      console.log(result);
    }
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

loadRestaurants();
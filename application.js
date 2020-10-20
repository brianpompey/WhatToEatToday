const BASE_URL = "http://localhost:3000";
const RESTAURANTS_URL = `${BASE_URL}/restaurants`;

let myRestaurants = [];
const restaurantsList = document.getElementById("restaurantsList");
console.log("Hello")

const chk = document.getElementById('chk');
const containers = document.getElementById("containers");


chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});


function foodChoiceForm() {
  let form = document.createElement("form");
  form.setAttribute("method", "post");
  form.id = "searchForm"
  

  let ID = document.createElement("input");
  ID.setAttribute("type", "text");
  ID.setAttribute("name", "selection");
  ID.setAttribute("placeholder", "What are you craving today?");
  ID.id = "searchData";
  
  
  let p = document.createElement("input");
  p.setAttribute("type", "submit");
  p.setAttribute("value", "Surprise Me");
  
  
  form.append(ID);
  form.append(p);
  
  document.getElementById("food choice form").appendChild(form);

};

function foodOrder() {
  let restForm = document.getElementById("food choice form");

  restForm.remove();

  let form = document.createElement("form");
  form.setAttribute("method", "post");
  
  let ID = document.createElement("input");
  ID.setAttribute("type", "text");
  ID.setAttribute("name", "selection");
  ID.setAttribute("placeholder", "Great Choice!! what would you like to order?");

  let s = document.createElement("input");
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Submit");
  
  form.append(ID);
  form.append(s);
  
  containers.appendChild(form);

}


function submitFoodForm(searchBar) {
  searchBar.onsubmit = async (e) => {
    e.preventDefault();
    console.log("hello world");
    containers.innerHTML = "I can use this"
  } 
}

//document.addEventListener("DOMContentLoaded", allRestaurants)



const userForm = document.getElementById("new_user_form");

const loadRestaurants = async () => {
  try {
    const res = await fetch('http://localhost:3000/restaurants');
    myRestaurants = await res.json();
    console.log(myRestaurants);
  } catch (err) {
    console.error(err);
  }
}

function submitUserForm() {
  userForm.onsubmit = async (e) => {
    e.preventDefault();
    let response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      body: new FormData(new_user_form)
    });

    let result = await response.json();

    console.log(result);

    let down = document.getElementById("food choice form");

    let nameForm = document.getElementById("new_user_form");
    let name = result.name;
    let greeting = document.createElement("p");
    let node = document.createTextNode(`Hello  ${name.charAt(0).toUpperCase()}${name.slice(1)} !`)
    greeting.appendChild(node);
  
    let element = document.getElementById("food choice form")
    element.appendChild(greeting);

    nameForm.remove();
    foodChoiceForm();

    //const searchBar = document.getElementById('searchForm');
    const searchData = document.getElementById("searchData");

    //submitFoodForm(searchBar);

    searchData.addEventListener('keyup', (e) => {
      e.preventDefault();
      //containers.innerHTML = "I can use this"
      const searchString = e.target.value.toLowerCase();

      const filteredRestaurants = myRestaurants.filter((rest) => {
        return (
          rest.name.toLowerCase().includes(searchString) ||
          rest.location.toLowerCase().includes(searchString) ||
          rest.cuisine.toLowerCase().includes(searchString)
        );
      });

      displayRestaurantChoice(filteredRestaurants);
    })


  };   

}

const displayRestaurantChoice = (restaurant) => {
  const htmlString = restaurant
      .map((restaurant) => {
          return `
          <li class="restaurant">
              <a class="restaurant decision" onClick="foodOrder()"><h2>${restaurant.name}</h2></a>
              <p>Borough: ${restaurant.location}</p>
              <p>Cuisine: ${restaurant.cuisine}</p>
          </li>
      `;
      })
      .join('');
  restaurantsList.innerHTML = htmlString;
};




function allRestaurants() {
  fetch(RESTAURANTS_URL)
    .then(resp => resp.json())
    .then(restaurants => {
      for (let i = 0; i < restaurants.length; i++) {
        containers.insertAdjacentHTML("beforeend", `[${restaurants[i].id}]: ${restaurants[i].name} - ${restaurants[i].cuisine} cuisine in ${restaurants[i].location}.<br>`
        )};

    }
    )}




loadRestaurants();

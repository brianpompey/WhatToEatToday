const BASE_URL = "http://localhost:3000";
const RESTAURANTS_URL = `${BASE_URL}/restaurants`;

let myRestaurants = [];
const restaurantsList = document.getElementById("restaurantsList");
console.log("Hello")

const chk = document.getElementById('chk');
const containers = document.getElementById("containers");


function autoReload() {
  setTimeout(function(){ window.location.reload(); }, 3000);
};

function random_item(items) {
  return items[Math.floor(Math.random()*items.length)];    
}


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
  p.id = "surprise-button"
  
  
  form.append(ID);
  form.append(p);
  
  document.getElementById("food choice form").appendChild(form);
  form.addEventListener('submit', (e) => surpriseMe(e));

};


function surpriseMe(e) {
  e.preventDefault();
  randomChoice = (random_item(myRestaurants));
  console.log(randomChoice.id);
  console.log(randomChoice.name);
  foodOrder(randomChoice.id, randomChoice.name)
}

function foodOrder(restId, restName) {
  console.log(`restName`,restName);
  let restForm = document.getElementById("food choice form");
  console.log(restForm);
  restForm.remove();

  let form = document.createElement("form");
  form.setAttribute("method", "post");
  form.id = "order form"
  
  let ID = document.createElement("input");
  ID.setAttribute("type", "text");
  ID.setAttribute("name", "order");
  ID.setAttribute("placeholder", `Great Choice!! what would you like to order from ${restName} ?`);

  let s = document.createElement("input");
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Submit");
  
  form.append(ID);
  form.append(s);
  
  containers.appendChild(form);

  form.addEventListener('submit', (e) => submitOrderForm(e, restId));

}


async function submitOrderForm(e, restId) {
  const orderForm = document.getElementById("order form");
  console.log('order placed', orderForm, e.target[0])
    let formInfo = Object.fromEntries(new FormData(e.target));
    
    e.preventDefault();
    let response = await fetch('http://localhost:3000/selections', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({selection: {...formInfo, restaurant_id: restId}})
    });
    

    let result = await response.json();
    let cont = document.getElementById("containers");
    let button = document.createElement("button")
    button.innerHTML = "Delete Order"
    button.id = "delete-order"
    button.addEventListener ("click", (e) => {
      e.preventDefault();
      fetch(`http://localhost:3000/selections/${result.id}`, {
        method: 'DELETE',
      })
        .then(() => {
          alert("Order Deleted");
          location.reload()})
    });

    alert("Order Placed");
    
    cont.innerHTML = result.order 
    cont.append(button);
    console.log(result);
    console.log(result.order);
    console.log(result.restaurant);

  
}




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
  const userForm = document.getElementById("new_user_form");
  userForm.onsubmit = async (e) => {
    e.preventDefault();
    let response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      body: new FormData(userForm)
    });
    console.log(userForm)

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

    const searchData = document.getElementById("searchData");


    searchData.addEventListener('keyup', (e) => {
      e.preventDefault();

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
              <a class="restaurant decision" onclick="foodOrder('` + restaurant.id + '\',\'' + restaurant.name + `')" data-restaurant-id="${restaurant.id}"><h2>${restaurant.name}</h2></a>
              <p>Borough: ${restaurant.location}</p>
              <p>Cuisine: ${restaurant.cuisine}</p>
          </li>
      `;
      })
      .join('');
  restaurantsList.innerHTML = htmlString;


};

function restChoice() {
  const restDecision = document.getElementsByClassName("restaurant decision");
  restDecision.addEventListener("click", () => {
    console.log("CLICKED!")
  });
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

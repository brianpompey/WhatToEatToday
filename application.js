const BASE_URL = "http://localhost:3000";
const RESTAURANTS_URL = `${BASE_URL}/restaurants`;

let myRestaurants = [];
console.log("Hello")

const chk = document.getElementById('chk');
const containers = document.getElementById("containers");

//const searchBar = document.getElementById('searchForm');

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
  
  
  
  /*
  let s = document.createElement("input");
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Submit");
 // s.setAttribute("onclick", "submitFoodForm()")
  
  /*
  let p = document.createElement("input");
  p.setAttribute("type", "submit");
  p.setAttribute("value", "Surprise Me");
  */
  
  form.append(ID);
  //form.append(s);
  //form.append(p);
  
  document.getElementById("food choice form").appendChild(form);

  /*
  const searchBar = document.getElementById('searchForm');

  searchBar.addEventListener('onclick', (e) => {
    e.preventDefault();
    console.log("hello world");
  })
  */
};



   


/*
searchBar.addEventListener('onsubmit', (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredRestaurants = restaurantIndex.filter((rest) => {
    return (
      rest.name.toLowerCase().includes(searchString)//||
      //rest.location.toLowerCase().includes(searchString)||
      //rest.cuisine.toLowerCase().includes(searchString)
    );
  });
  console.log(filteredRestaurants);

  console.log("hello world")
});

function submitFoodForm(searchBar) {
  searchBar.onsubmit = async (e) => {
    e.preventDefault();
    console.log("hello world");
    containers.innerHTML = "I can use this"
  } 
}
*/
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
      console.log(e.target.value);
      containers.innerHTML = "I can use this"
      const searchString = e.target.value.toLowerCase();

      const filteredRestaurants = myRestaurants.filter((rest) => {
        return (
          rest.name.toLowerCase().includes(searchString)//||
      //rest.location.toLowerCase().includes(searchString)||
      //rest.cuisine.toLowerCase().includes(searchString)
        );
      });
      console.log(filteredRestaurants);
    })

    /*
    searchBar.addEventListener('onclick', (e) => {
      e.preventDefault();
      console.log("hello world");
    })
    */
  };   

}

const displayCharacters = (characters) => {
  const htmlString = characters
      .map((character) => {
          return `
          <li class="character">
              <h2>${character.name}</h2>
          </li>
      `;
      })
      .join('');
  containers.innerHTML = htmlString;
};


//const searchBar = document.getElementById('searchForm');

  /*
  function submitFoodForm() {
    searchBar.onclick = async (e) => {
      e.preventDefault();
      console.log("hello world");
    } 
  } 
  */
  /*
  searchBar.addEventListener('onclick', (e) => {
    e.preventDefault();
    console.log("hello world");
  })
  */

/*
const searchBar = document.getElementById('searchForm');

searchBar.addEventListener('onsubmit', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredRestaurants = restaurantIndex.filter((rest) => {
      return (
        rest.name.toLowerCase().includes(searchString)//||
        //rest.location.toLowerCase().includes(searchString)||
        //rest.cuisine.toLowerCase().includes(searchString)
      );
    });
    console.log(filteredRestaurants);
  
    console.log("hello world")
});
*/

function allRestaurants() {
  fetch(RESTAURANTS_URL)
    .then(resp => resp.json())
    .then(restaurants => {
      for (let i = 0; i < restaurants.length; i++) {
        containers.insertAdjacentHTML("beforeend", `[${restaurants[i].id}]: ${restaurants[i].name} - ${restaurants[i].cuisine} cuisine in ${restaurants[i].location}.<br>`
        )};

    }
    )}

/*
  event.preventDefault();
  document.getElementById("new_user_form").submit();

  let down = document.getElementById("food choice form");

  function foodChoiceForm() {
  let form = document.createElement("form");
  form.setAttribute("method", "post");
  
  let ID = document.createElement("input");
  ID.setAttribute("type", "text");
  ID.setAttribute("name", "selection");
  ID.setAttribute("placeholder", "What are you craving today?");
  
  let s = document.createElement("input");
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Submit");
  
  form.append(ID);
  form.append(s);
  
  document.getElementsByTagName("body")[0].appendChild(form);
};
foodChoiceForm();
}
*/

/*
function foodSelectionForm() {
  let form = document.createElement("form");
  form.setAttribute("method", "post");
  
  let ID = document.createElement("input");
  ID.setAttribute("type", "text");
  ID.setAttribute("name", "selection");
  ID.setAttribute("placeholder", "Great! what would you like to order?");

  let s = document.createElement("input");
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Submit");
  
  form.append(ID);
  form.append(s);
  
  document.getElementsByTagName("body")[0].appendChild(form);

}
*/






loadRestaurants();

class User{
    constructor(name) {
        this.name = name;
    }

    static capitalize(string) {
        return string.charAt( 0 ).toUpperCase() + string.slice( 1 )
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
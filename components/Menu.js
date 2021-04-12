// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

// const menuMaker = (menuItemsArray) => {
// // step 1: create each component 

// const divMenu = document.createElement('div');
// const ul = document.createElement('ul');
// const img = document.querySelector('img');
// divMenu.appendChild(ul);

// // step 2: iterate over the array creating a list item <li> element for each item in the array.
//   // Add those items to the <ul>

// menuItemsArray.forEach(item => {
// const li = document.createElement('li');
// ul.appendChild(li);
// li.textContent = item;
// });

// // step 3: select the DOM

// divMenu.classList.add('menu');

// img.classList.add('menu');

// // step 4: add an event listener to toggle open/close menu 

// img.addEventListener('click', () => {
// divMenu.classList.toggle('menu--open');
// });

// console.log(divMenu);

// // step 5: return the div menu 

// return divMenu;

// };

// Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.

// const menuParent = document.querySelector('.header')

// menuParent.appendChild(menuMaker(menuItems));


function menuMaker(array){
  const div = document.createElement("div");
  div.classList.add("menu");
  const ul = document.createElement("ul")
  div.appendChild(ul);
  for(let i = 0; i < array.length; i++){
    const li = document.createElement("li");
    li.textContent = array[i];
    ul.appendChild(li);
  }
  const menuBtn = document.querySelector("img");
  menuBtn.addEventListener("click",() => div.classList.toggle("menu--open"));

  return div
}


const header = document.querySelector('.header');
const menus = menuMaker(menuItems);

header.appendChild(menus);




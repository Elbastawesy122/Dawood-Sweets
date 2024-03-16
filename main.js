document.querySelector('section').onclick = () =>{
    search.classList.remove('active');
    menu.classList.remove('active');
    shop.classList.remove('active');
}

let search = document.querySelector('.search');
document.querySelector('#search').onclick = () =>{
    search.classList.toggle('active');
    menu.classList.remove('active');
    shop.classList.remove('active');
} 

let menu = document.querySelector('.ele');
document.querySelector('#meenu').onclick = () =>{
    menu.classList.toggle('active');
    search.classList.remove('active');
    shop.classList.remove('active');
}

let shop = document.querySelector('.shopping');
document.querySelector('#shopping').onclick = () =>{
    shop.classList.toggle('active');
    menu.classList.remove('active');
    search.classList.remove('active');
}
let delet = document.querySelectorAll('.fa-delete-left');
delet.forEach(item => {
    item.onclick = () => {
        shop.classList.remove('active');
        search.classList.remove('active');
    }
});




if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  addcart();
}

function addcart() {
  let blus = document.getElementsByClassName('addcart');
  for (let i = 0; i < blus.length; i++) {
    let butten = blus[i];
    butten.onclick = () => {
      carttoadd(butten);
    };
  }
}

function carttoadd(butten) {
  let pointer = butten.closest('.box');
  let images = pointer.querySelector('.imagecart').src;
  let namecarts = pointer.querySelector('.word h3').innerHTML;
  let numcarts = pointer.querySelector('.word span').innerHTML;

  let box = document.createElement('div');
  box.className = 'box';

  let imageElement = document.createElement('img');
  imageElement.className = 'imagecart';
  imageElement.src = images;
  box.appendChild(imageElement);

  let nameElement = document.createElement('h3');
  nameElement.innerHTML = namecarts;
  box.appendChild(nameElement);

  let numElement = document.createElement('span');
  numElement.className = 'numcart';
  numElement.textContent = numcarts;
  box.appendChild(numElement);

  let deletElement = document.createElement('i');
  deletElement.className = 'fa-regular fa-trash-can';
  box.appendChild(deletElement);

  let shoppingBox = document.createElement('div');
  shoppingBox.className = 'shopping-box';
  shoppingBox.appendChild(box);

  let shopping = document.getElementsByClassName('shopping')[0];
  shopping.appendChild(shoppingBox);

  let icons = document.querySelectorAll('.fa-regular');

  icons.forEach((icon) => {
    icon.onclick = () => {
      let shop = icon.parentNode.parentNode;
      shop.remove();
    };
  });
}
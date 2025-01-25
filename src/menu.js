import hamburgerImageSource from './images/hamburger.jpg';
import cheeseburgerImageSource from './images/cheeseburger.jpg';
import fullyLoadedImageSource from './images/fully-loaded-cheeseburger.jpg';
import baconCheeseburgerImageSource from './images/bacon-cheeseburger.jpg';

export function menuLoad(){
    const contentDiv = document.querySelector('#content');
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const hamburgerCard = document.createElement('div');
    hamburgerCard.classList.add('menu-card');
    hamburgerCard.classList.add('hamburger');
    const hamburgerCardH1 = document.createElement('h1');
    hamburgerCardH1.textContent = 'Classic Hamburger';
    const hamburgerCardImage = document.createElement('img');
    hamburgerCardImage.src = hamburgerImageSource;
    hamburgerCardImage.alt = 'plain hamburger';
    const hamburgerCardP = document.createElement('p');
    hamburgerCardP.textContent = 'A classic hamburger with lettuce, tomato, and your choice of condiments';
    const hamburgerCardH3 = document.createElement('h3');
    hamburgerCardH3.textContent = '$5.99';
    hamburgerCard.appendChild(hamburgerCardH1);
    hamburgerCard.appendChild(hamburgerCardImage);
    hamburgerCard.appendChild(hamburgerCardP);
    hamburgerCard.appendChild(hamburgerCardH3);

    const cheeseburgerCard = document.createElement('div');
    cheeseburgerCard.classList.add('menu-card');
    cheeseburgerCard.classList.add('cheeseburger');
    const cheeseburgerCardH1 = document.createElement('h1');
    cheeseburgerCardH1.textContent = 'Classic Cheeseburger';
    const cheeseburgerCardImage = document.createElement('img');
    cheeseburgerCardImage.src = cheeseburgerImageSource;
    cheeseburgerCardImage.alt = 'cheeseburger';
    const cheeseburgerCardP = document.createElement('p');
    cheeseburgerCardP.textContent = 'A classic cheeseburger with lettuce, tomato, and your choice of condiments';
    const cheeseburgerCardH3 = document.createElement('h3');
    cheeseburgerCardH3.textContent = '$6.99';
    cheeseburgerCard.appendChild(cheeseburgerCardH1);
    cheeseburgerCard.appendChild(cheeseburgerCardImage);
    cheeseburgerCard.appendChild(cheeseburgerCardP);
    cheeseburgerCard.appendChild(cheeseburgerCardH3);

    const fullyLoadedCard = document.createElement('div');
    fullyLoadedCard.classList.add('menu-card');
    fullyLoadedCard.classList.add('fully-loaded-cheeseburger');
    const fullyLoadedCardH1 = document.createElement('h1');
    fullyLoadedCardH1.textContent = 'Fully Loaded Cheeseburger';
    const fullyLoadedCardImage = document.createElement('img');
    fullyLoadedCardImage.src = fullyLoadedImageSource;
    fullyLoadedCardImage.alt = 'cheeseburger with many toppings';
    const fullyLoadedCardP = document.createElement('p');
    fullyLoadedCardP.textContent = 'A classic cheeseburger taken to the next level. Our famous fully loaded cheeseburger includes letteuce, tomato, pickles, onions, and our world famous special sauce';
    const fullyLoadedCardH3 = document.createElement('h3');
    fullyLoadedCardH3.textContent = '$8.99';
    fullyLoadedCard.appendChild(fullyLoadedCardH1);
    fullyLoadedCard.appendChild(fullyLoadedCardImage);
    fullyLoadedCard.appendChild(fullyLoadedCardP);
    fullyLoadedCard.appendChild(fullyLoadedCardH3);

    menuContainer.appendChild(hamburgerCard);
    menuContainer.appendChild(cheeseburgerCard);
    contentDiv.appendChild(menuContainer);
}
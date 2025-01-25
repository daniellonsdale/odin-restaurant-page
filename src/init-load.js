import homeImageSrc from './images/burger-hands.jpg';

export function initLoad(){
    const contentDiv = document.querySelector('#content');
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');

    const restaurantInfoDiv = document.createElement('div');
    restaurantInfoDiv.classList.add('restaurant-info');
    const restaurantInfoH1 = document.createElement('h1');
    restaurantInfoH1.classList.add('restaurant-info-h1');
    restaurantInfoH1.textContent = 'Est. 1997';
    restaurantInfoDiv.appendChild(restaurantInfoH1);
    const restaurantInfoH3 = document.createElement('h3');
    restaurantInfoH3.textContent = 'Serving hot burgers with fresh ingredients and crispy fries';
    restaurantInfoH3.classList.add('restaurant-info-h3');
    restaurantInfoDiv.appendChild(restaurantInfoH3);

    const homeImage = document.createElement('img');
    homeImage.src = homeImageSrc;
    homeImage.alt = 'man throwing a burger up to display all the parts';
    homeImage.classList.add('home-image');

    homeContainer.appendChild(restaurantInfoDiv);
    homeContainer.appendChild(homeImage);
    contentDiv.appendChild(homeContainer);
}
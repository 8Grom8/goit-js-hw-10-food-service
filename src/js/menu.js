import makeMenu from '../template/menu.hbs';
import menuData from '../menu.json';
const inRef = document.querySelector('.js-menu');
const markUp = makeMenu(menuData);
inRef.innerHTML = markUp;

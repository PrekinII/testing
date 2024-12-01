// import './css/style.css';

// import './js/app';

// import './license.txt';

// TODO: write your code in app.js
import './css/style.css';
// import { CardCheckComponent } from './js/CardCheckComponent';
import './js/app';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#ComponentContainer');
    const widget = new CardCheckComponent(container);
    widget.bindToDOM();
    console.log('Component started!');
});

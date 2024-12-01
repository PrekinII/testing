import './css/style.css';
import './js/app';
import CardCheckComponent from './js/CardCheckComponent';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#ComponentContainer');
  const widget = new CardCheckComponent(container);
  widget.bindToDOM();
//   console.log('Component started!');
});

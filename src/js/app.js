// TODO: write code hereimport CardCheckComponent from './CardCheckComponent';

import CardCheckComponent from './CardCheckComponent';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#ComponentContainer');
    const widget = new CardCheckComponent(container);
    widget.bindToDOM();
    console.log('Component started!');
});

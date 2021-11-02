//Since there was no mobile lay-out provided, I decided to do my own. 
//
//There was minimal work to be done on JS, therefore I decided to add styling when the screen is in portrait view. 
//
//The requirement was to make the Button hover slight color change to be only on CSS. 
// 
//Thank you for taking your time to review this.


if (window.innerHeight > window.innerWidth) {
    document.querySelector('#main-header').classList.add('portrait-header');
    document.querySelector('nav').classList.add('portrait-nav');
    document.querySelector('img').classList.add('portrait-img');
    document.querySelector('#main-container').classList.add('portrait-container');
    document.querySelector('#main-section').classList.add('portrait-section');
    document.querySelector('button').classList.add('portrait-button');
    document.querySelector('h1').classList.add('portrait-h1');
    const remove1 = document.querySelector('#remove1');
    remove1.remove();
    const remove2 = document.querySelector('#remove2');
    remove2.remove();
    const remove3 = document.querySelector('#remove3');
    remove3.remove();
};

// Your code goes here

// 1. Scrolling listener to keep the header at the top of the page.
// This obviously isn't the cleanest way to code this but it was cool to mess with these styles and the event listener!

const headerContainer = document.querySelector('.nav-container');

headerContainer.className = ' sticky';

const stickyHeaderContainer = document.querySelector('.sticky');

document.addEventListener('scroll', stickyHeader);

function stickyHeader() {
    stickyHeaderContainer.style.position = 'fixed';
    stickyHeaderContainer.style.backgroundColor = 'yellow';
    stickyHeaderContainer.style.opacity = '50%';
    stickyHeaderContainer.style.width = '100%';
}

// 2. Mouseover header image causes it's opacity to become more intense and creates an outline around the element


const imgHandle = document.querySelector('img');

imgHandle.addEventListener('mouseover', imgBorders);

function imgBorders() {
    imgHandle.style.opacity = '50%';
    imgHandle.style.outlineColor = 'black';
    imgHandle.style.outlineStyle = 'solid';
}

// 3. Mouseleave header image reverts back to normal

imgHandle.addEventListener('mouseleave', imgLeave);

function imgLeave() {
    imgHandle.style.opacity ='100%';
    imgHandle.style.outlineColor = 'white';
}

// 4. Keydown will return the header to normal so the whole screen can be seen again as well as the h1 text

const keydownHandle = document.querySelector('body');

keydownHandle.addEventListener('keydown', anyKey);

function anyKey() {
    headerContainer.style.position = 'static';
    headerContainer.style.backgroundColor = 'white';
    headerContainer.style.opacity = '100%';
    h1Handle.style.transform = 'scale(100%)';
}

// 5. doubleclick on h1 resizes the text

const h1Handle = document.querySelector('h1');

h1Handle.addEventListener('dblclick', function resizeText() {
    h1Handle.style.transform = 'scale(50%)';
});


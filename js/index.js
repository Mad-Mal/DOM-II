// Header with nav bar
const mainHead = document.querySelector('h1')
const navAnchors = document.querySelectorAll('a')

// top img with firs h2 and para
const topImg = document.querySelector('.intro img')
const firstHead = document.querySelector('.intro')
const firstH2 = document.querySelector('.intro h2')
const firstPara = document.querySelector('.intro p')

// Lets go and adventure awaits content
const mainBox = document.querySelector('.content-section')
const seperateContainers = document.querySelectorAll('.text-content')

const h2Text = document.querySelectorAll('.text-content h2')
const pTags = mainBox.getElementsByTagName('p')


//events

//navAnchors using click event to log what button was pushed
navAnchors[0].addEventListener('click', event => {
    console.log('Home button pushed')
})
navAnchors[1].addEventListener('click', event => {
    console.log('About Us button pushed')
})
navAnchors[2].addEventListener('click', event => {
    console.log('Blog button pushed')
})
navAnchors[3].addEventListener('click', event => {
    console.log('Contact button pushed')
})

// Header changing color using onmouseover

mainHead.onmouseover = function() {mouseOver()};
mainHead.onmouseout = function() {mouseOut()};

function mouseOver() {
    mainHead.style.color = 'green';
}
function mouseOut() {
    mainHead.style.color = '';
}

document.getElementsByTagName('body').onload = console.log('The page has loaded!')


function dblClickZoom(object) {
object.style.transform = 'scale(2.0)'
}

topImg.addEventListener('dblclick', event => {
    dblClickZoom(topImg);
})

function mouseOut2() {
    topImg.style.transform = 'scale(1.0)';
}

topImg.onmouseout = function() {mouseOut2()};
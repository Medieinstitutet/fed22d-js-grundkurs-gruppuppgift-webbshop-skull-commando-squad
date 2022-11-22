const images = [
    {
    url: '/assets/img/bacon.PNG'
},{
    url: '/assets/img/bacon-donut-2.jpg'
}
];

const imageOne = document.querySelector('#imageOne')
const imageTwo = document.querySelector('#imageTwo')
const leftButton = document.querySelector('#leftButton')
const rightButton = document.querySelector('#rightButton')

rightButton.addEventListener("click", rightClick);
leftButton.addEventListener("click", leftClick);

let currentImageIndex = 0;

function init() {
imageOne.setAttribute('src', images[0].url);
};

function leftClick() {
    console.log(currentImageIndex);
    currentImageIndex = Number(currentImageIndex -= 1);
}


function rightClick() {
    console.log(currentImageIndex);
    currentImageIndex = Number(currentImageIndex += 1);
}

init(); 
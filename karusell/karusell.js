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
let currentImageIndex = 0;
let firstImageOnTop = true;



function init() {
imageOne.setAttribute('src', images[0].url);
};

rightButton.addEventListener("click", rightClick);
leftButton.addEventListener("click", leftClick);


function leftClick() {
    console.log(currentImageIndex);
    currentImageIndex = Number(currentImageIndex -= 1);
    init();
}


function rightClick() {
    console.log(currentImageIndex);
    currentImageIndex = Number(currentImageIndex += 1);
    init(); 
}

init(); 
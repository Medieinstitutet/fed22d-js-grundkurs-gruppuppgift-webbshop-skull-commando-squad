const image1 = [
    {
    url: '/assets/img/bacon.PNG'
},{
    url: '/assets/img/bacon-donut-2.jpg'
}
];

const image = document.querySelector('#image')
const leftButton = document.querySelector('#leftButton')
const rightButton = document.querySelector('#rightButton')

rightButton.addEventListener("click", rightClick);
leftButton.addEventListener("click", leftClick);

let currentImageIndex = 0;

function init() {
image.setAttribute('src', image1[0].url);
};

function leftClick() {
    console.log(currentImageIndex);

 currentImageIndex--
}


function rightClick() {
 console.log(currentImageIndex);
 currentImageIndex++
}

init();
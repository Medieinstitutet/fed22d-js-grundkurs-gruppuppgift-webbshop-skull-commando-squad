const images = [
    {
    url: '/assets/img/bacon.PNG'
},{
    url: '/assets/img/bacon-donut-2.jpg'
}
];

const imageOne = document.querySelector('#imageOne')
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')
let currentImageIndex = -1;



function nextClick() {
    if (currentImageIndex + 1 > images.length -1) {
        currentImageIndex = 0;
    }else{
         currentImageIndex += 1;
}
    imageOne.setAttribute('src', images[currentImageIndex].url);
    console.log(currentImageIndex);
}
function nextClick() {
    if (currentImageIndex - 1 < 0) {
        currentImageIndex = images.length - 1;
    }else{
        currentImageIndex -= 1;
    }
    imageOne.setAttribute('src', images[currentImageIndex].url);
    console.log(currentImageIndex);
}


nextBtn.addEventListener("click", nextClick);
prevBtn.addEventListener("click", nextClick);

nextClick();
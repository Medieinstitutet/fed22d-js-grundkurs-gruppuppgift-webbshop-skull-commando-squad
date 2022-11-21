const image1 = [
    {
    url: '/assets/img/bacon.PNG'
},{
    url: '/assets/img/bacon-donut-2.jpg'
}
];

const image = document.querySelector('#image')

function init() {
    image.setAttribute('src', image1[0].url);
    console.log('Funkar')
};

init();
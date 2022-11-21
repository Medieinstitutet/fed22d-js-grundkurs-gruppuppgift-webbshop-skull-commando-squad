const image1 = [
    {
    URL: 'assets/img/bacon.PNG'
}
];

const image = document.querySelector('#image')

function init() {
    image.setAttribute('src', image1[0].url);
    console.log('Funkar')
};

init();
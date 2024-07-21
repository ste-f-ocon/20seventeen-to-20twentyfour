console.log("Script loaded successfully");

const images = [
    'images/IMG01.jpg',
    'images/IMG02.jpg',
    'images/IMG03.jpg',
    'images/IMG04.jpg', 
    'images/IMG05.jpg',
    'images/IMG06.jpg',
    'images/IMG07.jpg',
    'images/IMG08.jpg', 
    'images/IMG09.jpg',
    'images/IMG10.jpg',
    'images/IMG11.jpg',
    'images/IMG12.jpg', 
    'images/IMG13.jpg',
    'images/IMG14.jpg',
    'images/IMG15.jpg',
    'images/IMG16.jpg', 
    'images/IMG17.jpg',
    'images/IMG18.jpg',
    'images/IMG19.jpg',
    'images/IMG20.jpg', 
    'images/IMG21.jpg',
    'images/IMG22.jpg',
    'images/IMG23.jpg',
    'images/IMG24.jpg', 
    'images/IMG25.jpg',
    'images/IMG26.jpg',
    'images/IMG27.jpg',
    'images/IMG28.jpg', 
    'images/IMG29.jpg',
    'images/IMG30.jpg',
    'images/IMG31.jpg',
    'images/IMG32.jpg', 
    'images/IMG33.jpg',
    'images/IMG34.jpg',
    'images/IMG35.jpg',
    'images/IMG36.jpg', 
    'images/IMG37.jpg',
    'images/IMG38.jpg',
    'images/IMG39.jpg',
    'images/IMG40.jpg', 
    'images/IMG41.jpg',
    'images/IMG42.jpg',
    'images/IMG43.jpg',
    'images/IMG44.jpg', 
    'images/IMG45.jpg',
    'images/IMG46.jpg',
    'images/IMG47.jpg',
    'images/IMG48.jpg', 
    'images/IMG49.jpg',
    'images/IMG50.jpg',
    'images/IMG51.jpg',
    'images/IMG52.jpg', 
    'images/IMG53.jpg',
    'images/IMG54.jpg',
    'images/IMG55.jpg',
    'images/IMG56.jpg', 
    'images/IMG57.jpg',
    'images/IMG58.jpg',
    'images/IMG59.jpg',
    'images/IMG60.jpg', 
    'images/IMG61.jpg',
    'images/IMG62.jpg',
    'images/IMG63.jpg',
    'images/IMG64.jpg',
    'images/IMG65.jpg',
    'images/IMG66.jpg',
    'images/IMG67.jpg',
    'images/IMG68.jpg',
    'images/IMG69.jpg',
    'images/IMG70.jpg',
    'images/IMG71.jpg', 
    'images/IMG72.jpg',
    'images/IMG73.jpg',
    'images/IMG74.jpg',
    'images/IMG75.jpg', 
    'images/IMG76.jpg',
    'images/IMG77.jpg',
    'images/IMG78.jpg',
    'images/IMG79.jpg', 
    'images/IMG80.jpg',
    'images/IMG81.jpg',
    'images/IMG82.jpg',
    'images/IMG83.jpg',
];

let currentIndex = 0;

const portfolioImage = document.getElementById('portfolioImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const imageSlider = document.getElementById('imageSlider');

console.log("DOM elements:", { portfolioImage, prevBtn, nextBtn, imageSlider });

portfolioImage.src = images[currentIndex];
imageSlider.max = images.length - 1;

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage(false);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage(false);
});

imageSlider.addEventListener('input', () => {
    currentIndex = parseInt(imageSlider.value);
    updateImage(true);
});

function updateImage(isSlider) {
    if (isSlider) {
        portfolioImage.classList.add('smooth-transition');
        portfolioImage.style.opacity = 0;
        setTimeout(() => {
            portfolioImage.src = images[currentIndex];
            portfolioImage.onload = () => {
                portfolioImage.style.opacity = 1;
            };
        }, 500);
    } else {
        portfolioImage.classList.remove('smooth-transition');
        portfolioImage.src = images[currentIndex];
    }
    imageSlider.value = currentIndex;
}
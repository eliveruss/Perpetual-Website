const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
const selectedIndex = null;

imageIndexes.forEach((i) => {
    const image = document.createElement('img');
    image.src = `../gallery/narniostock/narniostock (${i}).jpg`;
    image.classList.add('galleryImg');
    
    image.addEventListener('click', () =>{
        //popup
    popup.style.transform = `translateY(0)`;
    selectedImage.src = `../gallery/narniostock/narniostock (${i}).jpg`;
    })
    
    gallery.appendChild(image);
    
});

popup.addEventListener('click', () =>{
        popup.style.transform = `translateY(-100%)`;
        popup.src = '';
})


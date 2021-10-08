const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56];
const selectedIndex = null;

imageIndexes.forEach((i) => {
    const image = document.createElement('img');
    image.src = `../gallery/paszczalwa/paszcza (${i}).jpg`;
    image.classList.add('galleryImg');
    
    image.addEventListener('click', () =>{
        //popup
    popup.style.transform = `translateY(0)`;
    selectedImage.src = `../gallery/paszczalwa/paszcza (${i}).jpg`;
    })
    
    gallery.appendChild(image);
    
});

popup.addEventListener('click', () =>{
        popup.style.transform = `translateY(-100%)`;
        popup.src = '';
})


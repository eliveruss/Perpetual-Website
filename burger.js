    const burgerbars = document.querySelector(".burgerbars");
    const burger = document.querySelector(".burger");
    const bottomframe = document.querySelector(".bottomframe");
    const burgerimg = document.querySelector(".burgerimg");

    burgerbars.addEventListener("click", () => {
        burgerbars.classList.toggle("active2");
        burger.classList.toggle("active2");
        bottomframe.classList.toggle("active2");
        burgerimg.classList.toggle("active2");
    })

    document.querySelectorAll(".burger").forEach(n => n.addEventListener("click"), () => {
        burgerbars.classList.remove("active2");
        burger.classList.remove("active2");
        bottomframe.classList.remove("active2");
        burgerimg.classList.remove("active2");
    })
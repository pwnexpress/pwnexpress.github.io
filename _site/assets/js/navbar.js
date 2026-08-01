window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 80) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});

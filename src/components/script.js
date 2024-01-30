

const initSlider = () => {
    const imageList = document.querySelector(".image-list");
    const sliderButton = document.querySelectorAll(".slid-button");
    sliderButton.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slid" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
}
window.addEventListener("load",initSlider)
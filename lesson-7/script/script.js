const images = document.querySelectorAll("img[data-src]");
function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }

    img.src = src;
}

// const imgOptions = {
//     threshhold: o,
//     rootMargin: "0px 0px 200px 0px"
// };
console.log("test-thing");

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });
});

images.forEach(image => {
    imgObserver.observe(image);
});

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let carouselVp = document.querySelector("#carousel-card");

let cCarouselInner = document.querySelector("#cCarousel-inner");
let carouselInnerWidth = cCarouselInner.getBoundingClientRect().width;

let leftValue = 0;

// Variable used to set the carousel movement value (card's width + gap)
const totalMovementSize =
    parseFloat(
        document.querySelector(".cCarousel-item").getBoundingClientRect().width,
        10
    ) +
    parseFloat(
        window.getComputedStyle(cCarouselInner).getPropertyValue("gap"),
        10
    );

prev.addEventListener("click", () => {
    if (!leftValue == 0) {
        next.style.display = "flex";
        leftValue -= -totalMovementSize;
        cCarouselInner.style.left = leftValue + "px";
    }else {
        prev.style.display = "none";
    }
});

next.addEventListener("click", () => {
    const carouselVpWidth = carouselVp.getBoundingClientRect().width;
    if (carouselInnerWidth - Math.abs(leftValue) > carouselVpWidth) {
        prev.style.display = "flex";
        leftValue -= totalMovementSize;
        cCarouselInner.style.left = leftValue + "px";
    } else {
        next.style.display = "none";
    }
});

const mediaQuery510 = window.matchMedia("(max-width: 510px)");
const mediaQuery770 = window.matchMedia("(max-width: 768px)");

mediaQuery510.addEventListener("change", mediaManagement);
mediaQuery770.addEventListener("change", mediaManagement);

let oldViewportWidth = window.innerWidth;

function mediaManagement() {
    const newViewportWidth = window.innerWidth;

    if (leftValue <= -totalMovementSize && oldViewportWidth < newViewportWidth) {
        leftValue += totalMovementSize;
        cCarouselInner.style.left = leftValue + "px";
        oldViewportWidth = newViewportWidth;
    } else if (
        leftValue <= -totalMovementSize &&
        oldViewportWidth > newViewportWidth
    ) {
        leftValue -= totalMovementSize;
        cCarouselInner.style.left = leftValue + "px";
        oldViewportWidth = newViewportWidth;
    }
}


const faqContentHead1 = document.getElementById("faqContentHead1");
const faqContentHead2 = document.getElementById("faqContentHead2");
const faqContentHead3 = document.getElementById("faqContentHead3");
const faqContentHead4 = document.getElementById("faqContentHead4");
const faqContentHead5 = document.getElementById("faqContentHead5");

const faqContentDesc1 = document.getElementById("faqContentDesc1")
const faqContentDesc2 = document.getElementById("faqContentDesc2")
const faqContentDesc3 = document.getElementById("faqContentDesc3")
const faqContentDesc4 = document.getElementById("faqContentDesc4")
const faqContentDesc5 = document.getElementById("faqContentDesc5")

faqContentHead1.addEventListener("click", ()=>{
    if (faqContentDesc1.style.maxHeight) {
        faqContentDesc1.style.maxHeight = null;
        faqContentDesc1.style.padding = "0";
    } else {
        faqContentDesc1.style.maxHeight = faqContentDesc1.scrollHeight + "px";
        faqContentDesc1.style.padding = "2.4rem 0";
        faqContentDesc2.style.maxHeight = null;
        faqContentDesc2.style.padding = "0";
        faqContentDesc3.style.maxHeight = null;
        faqContentDesc3.style.padding = "0";
        faqContentDesc4.style.maxHeight = null;
        faqContentDesc4.style.padding = "0";
        faqContentDesc5.style.maxHeight = null;
        faqContentDesc5.style.padding = "0";
    }
})

faqContentHead2.addEventListener("click", ()=>{
    if (faqContentDesc2.style.maxHeight) {
        faqContentDesc2.style.maxHeight = null;
        faqContentDesc2.style.padding = "0";
    } else {
        faqContentDesc2.style.maxHeight = faqContentDesc1.scrollHeight + "px";
        faqContentDesc2.style.padding = "2.4rem 0";
        faqContentDesc1.style.maxHeight = null;
        faqContentDesc1.style.padding = "0";
        faqContentDesc3.style.maxHeight = null;
        faqContentDesc3.style.padding = "0";
        faqContentDesc4.style.maxHeight = null;
        faqContentDesc4.style.padding = "0";
        faqContentDesc5.style.maxHeight = null;
        faqContentDesc5.style.padding = "0";
    }
})

faqContentHead3.addEventListener("click", ()=>{
    if (faqContentDesc3.style.maxHeight) {
        faqContentDesc3.style.maxHeight = null;
        faqContentDesc3.style.padding = "0";
    } else {
        faqContentDesc3.style.maxHeight = faqContentDesc1.scrollHeight + "px";
        faqContentDesc3.style.padding = "2.4rem 0";
        faqContentDesc1.style.maxHeight = null;
        faqContentDesc1.style.padding = "0";
        faqContentDesc2.style.maxHeight = null;
        faqContentDesc2.style.padding = "0";
        faqContentDesc4.style.maxHeight = null;
        faqContentDesc4.style.padding = "0";
        faqContentDesc5.style.maxHeight = null;
        faqContentDesc5.style.padding = "0";
    }
})

faqContentHead4.addEventListener("click", ()=>{
    if (faqContentDesc4.style.maxHeight) {
        faqContentDesc4.style.maxHeight = null;
        faqContentDesc4.style.padding = "0";
    } else {
        faqContentDesc4.style.maxHeight = faqContentDesc1.scrollHeight + "px";
        faqContentDesc4.style.padding = "2.4rem 0";
        faqContentDesc1.style.maxHeight = null;
        faqContentDesc1.style.padding = "0";
        faqContentDesc2.style.maxHeight = null;
        faqContentDesc2.style.padding = "0";
        faqContentDesc3.style.maxHeight = null;
        faqContentDesc3.style.padding = "0";
        faqContentDesc5.style.maxHeight = null;
        faqContentDesc5.style.padding = "0";
    }
})

faqContentHead5.addEventListener("click", ()=>{
    if (faqContentDesc5.style.maxHeight) {
        faqContentDesc5.style.maxHeight = null;
        faqContentDesc5.style.padding = "0";
    } else {
        faqContentDesc5.style.maxHeight = faqContentDesc1.scrollHeight + "px";
        faqContentDesc5.style.padding = "2.4rem 0";
        faqContentDesc1.style.maxHeight = null;
        faqContentDesc1.style.padding = "0";
        faqContentDesc2.style.maxHeight = null;
        faqContentDesc2.style.padding = "0";
        faqContentDesc3.style.maxHeight = null;
        faqContentDesc3.style.padding = "0";
        faqContentDesc4.style.maxHeight = null;
        faqContentDesc4.style.padding = "0";
    }
})


const phoneInputField = document.querySelector("#phoneForm");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
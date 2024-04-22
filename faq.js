const sections = document.querySelectorAll("li");

function toggleAccordion() {
    sections.forEach(function (section) {
        section.classList.remove("active");
    });
    this.classList.add("active");
    sectionBackgroundColorChange(inputColor);
    sectionTextColorChange(inputColor);
    sectionHeaderColorChange(inputColor);
    this.style.removeProperty("background");
}

sections.forEach(function (section) {
    section.addEventListener("click", toggleAccordion);
});

// ------ Find the current color of theme ------------ //
const faqHeader = document.querySelector(".faq-header-content > .faq-header");
const computedStyle = getComputedStyle(faqHeader);
const rgbColor = computedStyle.color;

// Convert RGB to hex format
const hexColor = rgbToHex(rgbColor);

// Function to convert RGB to hex format
function rgbToHex(rgb) {
    // Extract individual RGB components
    const regexResult = rgb.match(/\d+/g);
    if (!regexResult) return null;
    const r = parseInt(regexResult[0]);
    const g = parseInt(regexResult[1]);
    const b = parseInt(regexResult[2]);

    // Convert each component to hex
    const rHex = r.toString(16).padStart(2, "0");
    const gHex = g.toString(16).padStart(2, "0");
    const bHex = b.toString(16).padStart(2, "0");

    // Concatenate and return hex color
    return `#${rHex}${gHex}${bHex}`;
}
// ------ Find the current color of theme ------------ //

const pickColorAttribue = document.getElementById("faq-section-id");
const inputColor = pickColorAttribue.getAttribute("data-theme-color");

if (inputColor != hexColor) {
    sectionBackgroundColorChange(inputColor);
    sectionTextColorChange(inputColor);
    sectionHeaderColorChange(inputColor);
}

function sectionBackgroundColorChange(backgroundColor) {
    var items = document.querySelectorAll("ul.faq-section > li");
    for (let i = 0; i < items.length; i++) {
        if (!items[i].classList.contains("active")) {
            items[i].style.background = backgroundColor;
        }
    }
}

function sectionTextColorChange(color) {
    document.querySelector(
        "ul.faq-section > li.active .section-content"
    ).style.color = color;
}

function sectionHeaderColorChange(color) {
    var items = document.querySelectorAll(
        "ul.faq-section > li.section-title h2"
    );
    for (let i = 0; i < items.length; i++) {
        items[i].style.color = "#fff";
    }

    // const element = document.querySelector(
    //     "ul.faq-section > li.active .section-title h2"
    // );

    // if (element) {
    //     element.style.setProperty("color", color, "important");
    // } else {
    //     console.error(element);
    // }
}

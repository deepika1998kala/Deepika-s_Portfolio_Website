

AOS.init({offset:0});
//Hamburger Script
function hamburg(){
  const navbar = document.querySelector(".dropdown")
  navbar.style.transform = "translateY(0px)"
}
function cancel(){
  const navbar = document.querySelector(".dropdown")
  navbar.style.transform = "translateY(-500px)"
}

  //Scroll Down Button JS

function scrollToNextSection() {
    const sections = Array.from(document.querySelectorAll("section"));
    let nextSection = null;

    for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();

        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            if (i < sections.length - 1) {
                nextSection = sections[i + 1];
            } else {
                nextSection = document.getElementById("home"); // Scroll to intro if last section
            }
            break;
        }
    }

    if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
        // Default fallback
        document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });
    }
}


function updateScrollButton() {
    const sections = document.querySelectorAll("section");
    const scrollY = window.scrollY;
    const buffer = 50;
    const topSection = sections[0]
    const lastSection = sections[sections.length - 1];

    if (scrollY + window.innerHeight >= lastSection.offsetTop + buffer) {
        // At last section
        scrollText.textContent = "Back to Top";
        scrollIcon.innerHTML = `
            <path d="M12 7.5L6 13.5L7.41 14.91L12 10.33L16.59 14.91L18 13.5L12 7.5Z" fill="currentColor"/>
        `;
    } else {
        scrollText.textContent = "Scroll Down";
        scrollIcon.innerHTML = `
            <path d="M12 16.5L6 10.5L7.41 9.09L12 13.67L16.59 9.09L18 10.5L12 16.5Z" fill="currentColor"/>
        `;
    }
}

window.addEventListener("scroll", updateScrollButton);
window.addEventListener("DOMContentLoaded", updateScrollButton);
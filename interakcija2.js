
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

/*Sjena na menu*/
window.onscroll = function () { headerShadow() };

function headerShadow() {
    const navHeader = document.getElementById("izbornik");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = " 0px 4px 6px rgba(66, 122, 93, 0.1)";
        navHeader.style.transition = "all 0.3s ease"
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.hackgroundColor = "transparent"
    }
}


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false,
})
/*sr.reveal('.gallery-item', { interval: 200 })


const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: false
})

srLeft.reveal('.project-col-1', { delay: 100 })

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: false
})

srRight.reveal('.project-col-2', { delay: 100 })*/

const video = document.getElementById('animacija');
video.playbackRate = 0.7;

var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-sadrzaj");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//prvi modal

// Inicijalni indeks slajda
let slideIndex = 0;

// Otvori modal i prikaži prvi slajd
function openModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "flex";

    // Prikaži prvu sliku
    showSlide(0);
}

// Zatvori modal
function closeModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
}

// Promjena slajda (strelice)
function changeSlide(n) {
    showSlide(slideIndex + n);
}

// Prikaz određenog slajda
function showSlide(n) {
    const slides = document.querySelectorAll("#projectModal .carousel-item");

    // Ako nema slajdova, ništa ne radi
    if (slides.length === 0) return;

    // Loop kroz slajdove
    if (n >= slides.length) slideIndex = 0;
    else if (n < 0) slideIndex = slides.length - 1;
    else slideIndex = n;

    slides.forEach(slide => slide.style.display = "none"); // sakrij sve
    slides[slideIndex].style.display = "block";            // prikaži trenutni
}


//drugi modal

function openModal2() {
    const modal = document.getElementById("projectModal2");
    modal.style.display = "flex";

    showSlide2(0);
}

function closeModal2() {
    const modal = document.getElementById("projectModal2");
    modal.style.display = "none";
}

function changeSlide2(n) {
    showSlide2(slideIndex + n);
}

function showSlide2(n) {
    const slides = document.querySelectorAll("#projectModal2 .carousel-item");

    if (slides.length === 0) return;

    if (n >= slides.length) slideIndex = 0;
    else if (n < 0) slideIndex = slides.length - 1;
    else slideIndex = n;

    slides.forEach(slide => slide.style.display = "none"); 
    slides[slideIndex].style.display = "block";            
}

//treci
function openModal3() {
    const modal = document.getElementById("projectModal3");
    modal.style.display = "flex";

    showSlide3(0);
}

function closeModal3() {
    const modal = document.getElementById("projectModal3");
    modal.style.display = "none";
}

function changeSlide3(n) {
    showSlide3(slideIndex + n);
}

function showSlide3(n) {
    const slides = document.querySelectorAll("#projectModal3 .carousel-item");

    if (slides.length === 0) return;

    if (n >= slides.length) slideIndex = 0;
    else if (n < 0) slideIndex = slides.length - 1;
    else slideIndex = n;

    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex].style.display = "block";            
}


//cetvrti
function openModal4() {
    const modal = document.getElementById("projectModal4");
    modal.style.display = "flex";

    showSlide4(0);
}

function closeModal4() {
    const modal = document.getElementById("projectModal4");
    modal.style.display = "none";
}

function changeSlide4(n) {
    showSlide4(slideIndex + n);
}

function showSlide4(n) {
    const slides = document.querySelectorAll("#projectModal4 .carousel-item");

    if (slides.length === 0) return;

    if (n >= slides.length) slideIndex = 0;
    else if (n < 0) slideIndex = slides.length - 1;
    else slideIndex = n;

    slides.forEach(slide => slide.style.display = "none"); 
    slides[slideIndex].style.display = "block";           
}

const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll("a, .tab-link, button");

window.addEventListener("mousemove", (e) => {
    let x= e.pageX;
    let y= e.pageY;

    cursor.forEach(el=> {
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;


        links.forEach(link => {
            link.addEventListener("mouseenter", ()=> {
                el.classList.add("hover");
            })
            link.addEventListener("mouseleave", () => {
                el.classList.remove("hover");
            })
        })
})
})
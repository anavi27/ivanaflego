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


/*Tipkanje teksta*/

var typingEffect = new Typed(".typedText", {
    strings: ["Ivana", "a Designer", "a FrontEnd<br>Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})

//Otkrivanje elemenata

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.header-text', { interval: 200 })
sr.reveal('.project', { interval: 200 })
sr.reveal('.services-list', { interval: 200 })
sr.reveal('.gallery', { interval: 200 })



const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.vertical-text', { delay: 100 })
srLeft.reveal('.project-col-1', { delay: 100 })

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.about-col-2', { delay: 100 })
srRight.reveal('.project-col-2', { delay: 100 })

// Aktivni link na klik
const navLinks = document.querySelectorAll("#sidemenu a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Aktivni link dok skrolaš
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]"); 
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // offset zbog headera
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

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
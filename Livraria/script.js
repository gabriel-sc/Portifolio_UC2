// Smooth scrolling function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerHeight = document.querySelector(".navbar").offsetHeight
    const elementPosition = element.offsetTop - headerHeight

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    })
  }
}


function handleScroll() {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
}


function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]')

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      scrollToSection(targetId)
    })
  })
}


function animateOnScroll() {
  const elements = document.querySelectorAll(".ebook-card, .card")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up")
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  elements.forEach((element) => {
    observer.observe(element)
  })
}


function initCTAButtons() {
  const ctaButtons = document.querySelectorAll(".cta-button")

  ctaButtons.forEach((button) => {
    button.addEventListener("click", () => {
    
      console.log("Purchase button clicked")

       
      alert("Redirecionando para o checkout...")
    })
  })
}

function initMobileMenu() {
  const navToggler = document.getElementById('navToggler');
  const navbarNav = document.getElementById('navbarNav');

  if (navToggler && navbarNav) {
    navToggler.addEventListener('click', () => {
      navbarNav.classList.toggle('active');
    });

 
    const navLinks = navbarNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbarNav.classList.remove('active');
      });
    });


    document.addEventListener('click', (e) => {
      if (!navToggler.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
      }
    });
  }
}


document.addEventListener("DOMContentLoaded", () => {

  window.addEventListener("scroll", handleScroll)


  initSmoothScroll()


  animateOnScroll()


  initCTAButtons()


  initMobileMenu()


  const heroSection = document.querySelector(".hero-section")
  if (heroSection) {
    heroSection.classList.add("fade-in-up")
  }
})

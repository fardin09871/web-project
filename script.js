alert("Hello, welcome to my portfolio!");
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  }

  function showAlert() {
    alert("Thanks for visiting!");
  }

  
  window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
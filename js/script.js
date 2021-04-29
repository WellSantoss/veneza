const sections = document.querySelectorAll('header, section, footer');
const nav = document.querySelector('nav');
const btnArrow = nav.querySelector('a');
const windowHeight = window.innerHeight;

btnArrow.addEventListener('click', click);
btnArrow.addEventListener('click', scrollSuave);
// window.addEventListener('scroll', scroll);

function click() {
  sections.forEach((section, index) => {
    const sectionTop = section.getBoundingClientRect().top;
    
    if (sectionTop <= 0) {
      if (section.getAttribute('id') != 'footer') {
        btnArrow.setAttribute('href', '#' + sections[index + 1].getAttribute('id'));
        
        if (section.getAttribute('id') == 'roteiro2') {
          nav.classList.add('rotate');
        }
        else if (section.getAttribute('id') == 'header') {
        }
      }
      else {
        btnArrow.setAttribute('href', '#' + sections[0].getAttribute('id'));
        nav.classList.remove('rotate');
      }
    }
  });
}

function scrollSuave(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
 });
}
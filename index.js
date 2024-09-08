document.addEventListener('DOMContentLoaded', function() {
const header = document.querySelector('header');
const logo = document.querySelector('.dark-header') || document.querySelector('.logo');
const navLinks = document.querySelectorAll('nav ul li a');
const mega = document.querySelector('.mega-menu');
const megaContent = document.querySelector('.mega-content-visible') || document.querySelector('.mega-content-hidden');
const heroItems = document.querySelectorAll('.hero-item')
const heroBars = document.querySelectorAll('.hero-bar')
let isMegaActive = false;
let currentHeroItem=0;

//event listener hamburger menu in small device
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const navLinks = document.querySelector('.hamburger-menu ul');

  hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('invisible');
      
      if (hamburgerIcon.classList.contains('fa-bars')) {
          hamburgerIcon.classList.remove('fa-bars');
          hamburgerIcon.classList.add('fa-times');
      } else {
          hamburgerIcon.classList.remove('fa-times');
          hamburgerIcon.classList.add('fa-bars');
      }
  });
});
//toggle header state between dark and light modes
function toggleHeaderState(activate) {
  if (activate) {
    logo.classList.add('dark-header');
    logo.classList.remove('logo');
    navLinks.forEach(function(link) {
      link.classList.add('dark-header');
    });
    if (!mega.classList.contains('active')) {
      mega.classList.add('dark-services');
    }
  } else {
    logo.classList.add('logo');
    logo.classList.remove('dark-header');
    navLinks.forEach(function(link) {
      link.classList.remove('dark-header');
    });
    if (!mega.classList.contains('active')) {
      mega.classList.remove('dark-services');
      mega.classList.remove('sticky');
    }
  }
}
//scroll event handler
function handleScroll() {
  if (window.scrollY > 0) {
    header.classList.add('sticky-header');
    toggleHeaderState(true);
  } else {
    header.classList.remove('sticky-header');
    toggleHeaderState(isMegaActive);
  }
}
//toggle mega menu visibility and state
function toggleMegaMenu() {
  isMegaActive = !isMegaActive;
  
  if (mega.classList.contains('dark-services')) {
    mega.classList.replace('dark-services', 'active');
    mega.classList.add('sticky');
  } else if (mega.classList.contains('sticky')) {
    mega.classList.toggle('active');
  } else {
    mega.classList.toggle('active');
  }

  if (megaContent.classList.contains('mega-content-hidden')) {
    megaContent.classList.replace('mega-content-hidden', 'mega-content-visible');
  } else {
    megaContent.classList.replace('mega-content-visible', 'mega-content-hidden');
  }

  header.classList.toggle('light-header-bg');
  
  
  if (window.scrollY === 0) {
    toggleHeaderState(isMegaActive);
  } else {
    toggleHeaderState(true);
  }

}
// fade through hero items automatically
function fadeHero() {
  heroItems[currentHeroItem].classList.add('invisible');
  currentHeroItem = (currentHeroItem + 1) % heroItems.length;
  heroItems[currentHeroItem].classList.remove('invisible');
}
//start hero item fade every 4 seconds
let fadeInterval = setInterval(fadeHero, 4000);



//manual switching between hero items
heroBars.forEach(heroBar => {
  heroBar.addEventListener('click', function() {
      const dataIndex = heroBar.getAttribute('data-hero');
      heroItems.forEach(item => item.classList.add('invisible'));
      heroItems[dataIndex].classList.remove('invisible');
      currentHeroItem = dataIndex;
      clearInterval(fadeInterval);
      fadeInterval = setInterval(fadeHero, 2000);
  });
});

//event Listeners
window.addEventListener('scroll', handleScroll);
mega.addEventListener('click', toggleMegaMenu);

//initialization
handleScroll();
})

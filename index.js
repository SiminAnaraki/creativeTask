window.onscroll = function() {
    var header = document.querySelector('header');
    var logo = document.querySelector('.sticky-logo') || document.querySelector('.logo');
    if (window.scrollY> 0) {
      header.classList.add('sticky-header');
      logo.classList.add('sticky-logo');
      logo.classList.remove('logo');
    } else {
      header.classList.remove('sticky-header');
      logo.classList.add('logo');
      logo.classList.remove('sticky-logo');
      
      
    }
  };
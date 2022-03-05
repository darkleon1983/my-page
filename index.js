var menuButton = document.querySelector('.menu-button__mobile');
var menuList = document.querySelector('.main-header__menu_list');
var closeButton = document.querySelector('.cross-button');

const menuButtonFunction = function() {
  if (menuList.classList.contains('invisible')) {
    menuList.classList.remove('invisible');
    menuButton.classList.add('invisible');
    closeButton.classList.remove('invisible');
  } else {
    alert('bye');
  }
}

const closeButtonFunction = function() {
   menuList.classList.add('invisible');
   menuButton.classList.remove('invisible');
   closeButton.classList.add('invisible');
}
menuButton.addEventListener('click', menuButtonFunction);
closeButton.addEventListener('click', closeButtonFunction);

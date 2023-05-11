var menu = document.getElementById("menu__icon");
var bar = document.getElementById("mobile__menu");
var ecs = document.getElementById("ECS");

menu.addEventListener('click',()=>{
  bar.classList.add('show');
});


ecs.addEventListener('click', ()=> {
  bar.classList.remove('show');
});

var list = document.getElementsByClassName("mobile__item");

for (var i = 0; i < list.length; i++) {
  list[i].addEventListener('click', ()=> {
    bar.classList.remove('show');
  });
}

window.addEventListener('resize', function() {
  var img = document.getElementById('hero__image');

  if (window.innerWidth < 600) {
    img.src = "/assets/images/image-web-3-mobile.jpg";
  } else {
    img.src = "/assets/images/image-web-3-desktop.jpg";
  }
});

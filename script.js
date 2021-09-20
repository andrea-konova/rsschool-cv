// burger-menu
const burgerMenu = () => {
	const burgerBtn = document.getElementById('burger'),
  navigation = document.querySelector('.navigation'),
  menu = document.querySelector('.menu'),
  body = document.querySelector('body');

  let count = -40,
      animate = true,
      slideInInterval,
      slideOutInterval;

  const slideInMenu = () => {
    slideInInterval = requestAnimationFrame(slideInMenu);
    count++;
    if (count <= 0) {
      menu.style.right = count * 8 + 'px';
    } else {
      cancelAnimationFrame(slideInInterval);
      animate = false;
    }
    
  };

  const slideOutMenu = () => {
    slideOutInterval = requestAnimationFrame(slideOutMenu);
    count--;
    if (count >= -40) {
      menu.style.right = count * 8 + 'px';
    } else {
      cancelAnimationFrame(slideOutInterval);
      animate = true;
    }
    
  };

  const handlerMenu = () => {
		burgerBtn.classList.toggle('burger--active');
    navigation.classList.toggle('navigation-hide');
  };

  const hideNavigation = () => {
		burgerBtn.classList.remove('burger--active');
    navigation.classList.add('navigation-hide');
  };
  
  const animateMenu = () => {
    if (animate) {
      handlerMenu();
      slideInMenu();
    } else {
      setTimeout(handlerMenu, 500);
      slideOutMenu();
    }
  };

  body.addEventListener('click', event => {
    let target = event.target;

    if (target.matches('#burger')) {
      animateMenu();
    } 

    if (target.matches('.navigation')) {
      setTimeout(hideNavigation, 500);
      slideOutMenu();
    }
  });
  
  navigation.addEventListener('click', event => {
		event.preventDefault();
		const target = event.target;

		if (target.matches('a[href*="#"]')) {
			const navigationId = target.getAttribute('href').substring(1);

			document.getElementById(navigationId).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
    }
    
    if (document.documentElement.clientWidth < 768) {
			animateMenu();
		}
  });
};
burgerMenu();

console.log('вёрстка валидная +10');
console.log('вёрстка семантическая +18 (footer, header, main, nav, section, h1-h4)');
console.log('для оформления СV используются css-стили +10');
console.log('контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10');
console.log('вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10');
console.log('есть меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным +10');
console.log('на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10');
console.log('контакты для связи и перечень навыков оформлены в виде списка ul > li +10');
console.log('CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10');
console.log('CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js +10');
console.log('CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке +10');
console.log('CV выполнено на английском языке +10');
console.log('выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10');
console.log('качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10');
console.log('итого оценка 148 баллов');
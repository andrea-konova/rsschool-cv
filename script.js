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
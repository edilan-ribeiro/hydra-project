let servicesSliderItems = document.querySelectorAll('.service-square');
let servicesRightArrow = document.getElementById('svc-ar-right');
let servicesLeftArrow = document.getElementById('svc-ar-left');

let servicesIndex = 0;

servicesRightArrow.addEventListener('click', function() {
    servicesIndex++;
    if (servicesIndex > servicesSliderItems.length - 1) {
      servicesIndex = 0;
    }
   
    slide();
  });
  
  
  servicesLeftArrow.addEventListener('click', function() {
    servicesIndex--;
    if (servicesIndex < 0) {
      servicesIndex = servicesSliderItems.length - 1;
    }
    
    slide();
  });
  

  function slide() {
    let itemWidth = servicesSliderItems[0].clientWidth;
    let gap = 30;
  
    for (let i = 0; i < servicesSliderItems.length; i++) {
      servicesSliderItems[i].style.transform = 'translateX(' + ((i - servicesIndex) * (itemWidth + gap)) + 'px)';
    }
  }
  


function servicesApplyTransform() {
    if (window.innerWidth < 931) {
      servicesSliderItems[0].style.transform = 'translateX(0px)';
      servicesSliderItems[1].style.transform = 'translateX(330px)';
      servicesSliderItems[2].style.transform = 'translateX(660px)';
      servicesSliderItems[3].style.transform = 'translateX(990px)';
    } else {
      servicesSliderItems.forEach(item => item.style.transform = '');
    }
  }
  

  export {servicesApplyTransform}
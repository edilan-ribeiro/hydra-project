let aboutSliderItems = document.querySelectorAll('.service-square');
let aboutRightArrow = document.getElementById('svc-ar-right');
let aboutLeftArrow = document.getElementById('svc-ar-left');

let aboutIndex = 0;

aboutRightArrow.addEventListener('click', function() {
    aboutIndex++;
    if (aboutIndex > aboutSliderItems.length - 1) {
      aboutIndex = 0;
    }
   
    slide();
  });
  
  
  aboutLeftArrow.addEventListener('click', function() {
    aboutIndex--;
    if (aboutIndex < 0) {
      aboutIndex = aboutSliderItems.length - 1;
    }
    
    slide();
  });
  

  function slide() {
    let itemWidth = aboutSliderItems[0].clientWidth;
    let gap = 30;
  
    for (let i = 0; i < aboutSliderItems.length; i++) {
      aboutSliderItems[i].style.transform = 'translateX(' + ((i - aboutIndex) * (itemWidth + gap)) + 'px)';
    }
  }
  


function servicesApplyTransform() {
    if (window.innerWidth < 931) {
      aboutSliderItems[0].style.transform = 'translateX(0px)';
      aboutSliderItems[1].style.transform = 'translateX(330px)';
      aboutSliderItems[2].style.transform = 'translateX(660px)';
      aboutSliderItems[3].style.transform = 'translateX(990px)';
    } else {
      aboutSliderItems.forEach(item => item.style.transform = '');
    }
  }
  

  export {servicesApplyTransform}
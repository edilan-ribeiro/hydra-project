let techSliderItems = document.querySelectorAll('.logos');
let techRightArrow = document.getElementById('tech-ar-right');
let techLeftArrow = document.getElementById('tech-ar-left');

let techIndex = 0;

techRightArrow.addEventListener('click', function() {
    techIndex++;
    if (techIndex > techSliderItems.length - 1) {
      techIndex = 0;
    }
    slide();
  });
  
  
  techLeftArrow.addEventListener('click', function() {
    techIndex--;
    if (techIndex < 0) {
      techIndex = techSliderItems.length - 1;
    }
    
    slide();
  });
  

  function slide() {
    let itemWidth = techSliderItems[0].clientWidth;
    let gap = 120;
  
    for (let i = 0; i < techSliderItems.length; i++) {
      techSliderItems[i].style.transform = 'translateX(' + ((i - techIndex) * (itemWidth + gap)) + 'px) scale(0.8)';
    }
  }
  


function techApplyTransform() {
    if (window.innerWidth < 931) {
      techSliderItems[0].style.transform = 'translateX(0px) scale(0.9)';
      techSliderItems[1].style.transform = 'translateX(330px) scale(0.9)';
      techSliderItems[2].style.transform = 'translateX(660px) scale(0.9)';
      techSliderItems[3].style.transform = 'translateX(990px) scale(0.9)';
    } else {
      techSliderItems.forEach(item => item.style.transform = '');
    }
  }
  

  export {techApplyTransform}
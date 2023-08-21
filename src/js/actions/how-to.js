let howToSliderItems = document.querySelectorAll('.how-to-group');
let howToRightArrow = document.getElementById('howTo-ar-right');
let howToLeftArrow = document.getElementById('howTo-ar-left');

let howToIndex = 0;

howToRightArrow.addEventListener('click', function() {
    howToIndex++;
    if (howToIndex > howToSliderItems.length - 1) {
      howToIndex = 0;
    }
    slide();
  });
  
  
  howToLeftArrow.addEventListener('click', function() {
    howToIndex--;
    if (howToIndex < 0) {
      howToIndex = howToSliderItems.length - 1;
    }
    
    slide();
  });
  

  function slide() {
    let itemWidth = howToSliderItems[0].clientWidth;
    let gap = 120;
  
    for (let i = 0; i < howToSliderItems.length; i++) {
      howToSliderItems[i].style.transform = 'translateX(' + ((i - howToIndex) * (itemWidth + gap)) + 'px)';
    }
  }
  


function howToApplyTransform() {
    if (window.innerWidth < 931) {
      howToSliderItems[0].style.transform = 'translateX(0px)';
      howToSliderItems[1].style.transform = 'translateX(320px)';
      howToSliderItems[2].style.transform = 'translateX(660px)';
      howToSliderItems[3].style.transform = 'translateX(990px)';
    } else {
      howToSliderItems.forEach(item => item.style.transform = '');
    }
  }
  

  export {howToApplyTransform}
import { heroResize } from './actions/hero-slider.js'
import { heroLoad } from './actions/hero-slider.js'
import { applyTransform } from './actions/services-slider.js'


window.addEventListener('load', function() {
  heroLoad();
  applyTransform();
});

window.addEventListener('resize', function() {
  heroResize();
  applyTransform();
});

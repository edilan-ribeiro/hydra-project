import { heroResize } from './actions/hero-slider.js'
import { heroLoad } from './actions/hero-slider.js'
import { heroApplyTransform } from './actions/services-slider.js'
import { techApplyTransform } from './actions/tech-section-slider.js'


window.addEventListener('load', function() {
  heroLoad()
  heroApplyTransform()
  techApplyTransform()
})

window.addEventListener('resize', function() {
  heroResize()
  heroApplyTransform()
  techApplyTransform()
});

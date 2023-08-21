import { heroResize } from './actions/hero-slider.js'
import { heroLoad } from './actions/hero-slider.js'
import { servicesApplyTransform } from './actions/services-slider.js'
import { techApplyTransform } from './actions/tech-section-slider.js'


window.addEventListener('load', function() {
  heroLoad()
  servicesApplyTransform()
  techApplyTransform()
})

window.addEventListener('resize', function() {
  heroResize()
  servicesApplyTransform()
  techApplyTransform()
});

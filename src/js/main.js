import { heroResize } from './actions/hero-slider.js'
import { heroLoad } from './actions/hero-slider.js'
import { servicesApplyTransform } from './actions/services-slider.js'
import { techApplyTransform } from './actions/tech-section-slider.js'
import { howToApplyTransform } from './actions/how-to.js'
import { formActions } from './actions/form.js'
import { backToTop } from './actions/back-to-top.js'


window.addEventListener('load', function() {
  heroLoad()
  servicesApplyTransform()
  techApplyTransform()
  howToApplyTransform()
})

window.addEventListener('resize', function() {
  heroResize()
  servicesApplyTransform()
  techApplyTransform()
  howToApplyTransform()
});


formActions()
backToTop()
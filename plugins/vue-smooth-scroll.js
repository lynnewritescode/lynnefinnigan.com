import Vue from 'vue';
import vueSmoothScroll from 'vue-smooth-scroll';
Vue.use(vueSmoothScroll, {
  duration: 800, // Animation speed
  offset: 0 // Offset from element, you can use positive or negative values
});

import Vue from 'vue';
import VueMq from 'vue-mq';

Vue.use(VueMq, {
  breakpoints: {
    // sm: 450,
    sm: 250,
    sp: 959,
    pc: 960,
  },
  defaultBreakpoint: 'sm',
});

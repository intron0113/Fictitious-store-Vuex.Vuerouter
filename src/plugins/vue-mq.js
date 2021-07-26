import Vue from 'vue';
import VueMq from 'vue-mq';

Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    sp: 959,
    pc: 960,
  },
  defaultBreakpoint: 'sm',
});

import comA from './components/comA.vue';
import comB from './components/comB.vue';
import heyButton from './components/heyButton.vue';

const components = [
  comA,
  comB,
  heyButton
];

const install = (Vue) =>
  components.forEach((component) => Vue.component(component.name, component));

export default {
  install,
};
export {
  comA,
  comB,
  heyButton
}
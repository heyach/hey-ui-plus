import comA from './components/comA.vue';
import heyButton from './components/heyButton.vue';

const components = [
  comA,
  heyButton
];

const install = (Vue) =>
  components.forEach((component) => Vue.component(component.name || component.__name, component));

export default {
  install,
};
export {
  comA,
  heyButton
}
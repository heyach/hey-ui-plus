import comA from './components/comA.vue';
import comB from './components/comB.vue';

const components = [
  comA,
  comB
];

const install = (Vue) =>
  components.forEach((component) => Vue.component(component.name, component));

export default {
  install,
};
export {
  comA,
  comB
}
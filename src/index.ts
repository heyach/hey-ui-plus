import heyButton from "./components/heyButton/heyButton.vue";

const components = [
  heyButton,
];

const install = (Vue) =>
  components.forEach((component) => Vue.component(component.name, component));

export {
  install,
};
export {
  heyButton
}
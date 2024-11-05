import { ref, openBlock, createElementBlock, toDisplayString } from "vue";
const _sfc_main$1 = {
  __name: "comA",
  props: {
    msg: String
  },
  setup(__props) {
    ref(0);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("h1", null, toDisplayString(__props.msg), 1);
    };
  }
};
const _sfc_main = {
  __name: "comB",
  props: {
    msg: String
  },
  setup(__props) {
    ref(0);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("h2", null, toDisplayString(__props.msg), 1);
    };
  }
};
const components = [
  _sfc_main$1,
  _sfc_main
];
const install = (Vue) => components.forEach((component) => Vue.component(component.name, component));
var index = {
  install
};
export { _sfc_main$1 as comA, _sfc_main as comB, index as default };

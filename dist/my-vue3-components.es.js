import { defineComponent, ref, openBlock, createElementBlock, toDisplayString, resolveComponent, createVNode, withCtx, createTextVNode } from "vue";
const _sfc_main$1 = {
  __name: "comA",
  props: {
    msg: String
  },
  setup(__props) {
    defineComponent({
      name: "comA"
    });
    ref(0);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("h1", null, toDisplayString(__props.msg), 1);
    };
  }
};
var heyButton_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "my-class" };
const _sfc_main = {
  __name: "heyButton",
  props: {
    msg: String
  },
  setup(__props) {
    defineComponent({
      name: "heyButton"
    });
    ref(0);
    return (_ctx, _cache) => {
      const _component_el_button = resolveComponent("el-button");
      return openBlock(), createElementBlock("h1", _hoisted_1, [
        createVNode(_component_el_button, null, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(__props.msg), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
};
const components = [
  _sfc_main$1,
  _sfc_main
];
const install = (Vue) => components.forEach((component) => Vue.component(component.name || component.__name, component));
var index = {
  install
};
export { _sfc_main$1 as comA, index as default, _sfc_main as heyButton };

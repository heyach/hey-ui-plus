<template>
    <h1 class="my-class">
      <el-button>{{ msg }}</el-button>
      <div class="aaa">123</div>
      <div class="aaa">4526</div>
      <!-- <img src="../assets/logo.png" alt="logo" /> -->
    </h1>
  </template>
  
<script setup>
import { ref, defineComponent } from 'vue'
defineComponent({
  name: 'heyButton'
});
defineProps({
  msg: String
})

const count = ref(0)
</script>
<style lang="less">
.my-class {
    color: red;
    .aaa {
      color: green;
    }
    .logo {
      width: 100px;
      height: 100px;
    }
}
</style>


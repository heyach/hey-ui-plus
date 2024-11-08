<template>
    <h1 class="my-class">
      <el-button>{{ msg }}</el-button>
      <div class="aaa">123</div>
    </h1>
  </template>
  
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>
<style lang="less">
.my-class {
    color: red;
    .aaa {
      color: blue;
    }
}
</style>


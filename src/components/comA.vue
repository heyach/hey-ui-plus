<template>
    <h1>{{ msg }}</h1>
  </template>
  
<script setup>
import { ref, defineComponent } from 'vue'

defineComponent({
  name: 'comA'
});
defineProps({
  msg: String
})

const count = ref(0)
</script>


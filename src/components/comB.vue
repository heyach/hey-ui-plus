<template>
    <h2>{{ msg }}</h2>
  </template>
  
<script setup>
import { ref } from 'vue'

defineComponent({
  name: 'comB'
});
defineProps({
  msg: String
})

const count = ref(0)
</script>


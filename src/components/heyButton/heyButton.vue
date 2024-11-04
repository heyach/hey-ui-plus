<template>
    <div class="hey-button">
        <el-button>{{ msg }}</el-button>
    </div>
</template>
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<style scoped>
a {
  color: #42b983;
}
</style>

<template>
    <div id="app">
        <div class="container">
            <comA msg="comA"></comA>
            <heyButton :msg="'dadsad'"></heyButton>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import comA from '@/components/comA.vue';
import heyButton from '@/components/heyButton.vue';
onMounted(() => {
});
</script>

<style scoped>
#app {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
}
</style>

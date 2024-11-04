<template>
    <div id="app">
        <div class="container">222
            <heyButton :msg="'dadsad'"></heyButton>
        </div>
    </div>
</template>
<script lang="ts" setup>
import heyButton from '@/components/heyButton/heyButton.vue';
onMounted(() => {
});
</script>

<style lang="less" scoped>
#app {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    .side-menu {
        flex: 0 0 200px;
        height: 100%;
        background: #add8e6;
    }
    .container {
        position: relative;
        flex-grow: 1;
        height: 100%;
        overflow: auto;
    }
}
</style>

<script setup lang="ts">

defineProps<{
    label: string,
    icon: string,
    link?: {
        name: string,
        url: string,
        target: string
    }
}>()

</script>

<template>
<button class="button" v-if="!link">{{ label }}<font-awesome-icon :icon="['fa-solid', icon]" /></button>
<a class="button" v-else :href="link.url" :target="link.target">{{ link.name }}<font-awesome-icon :icon="['fa-solid', icon]" /></a>
</template>

<style lang="scss" scoped>
.button {
        background-color: #00ad89;
    display: inline-flex;
    gap: 0.5rem;
    cursor: pointer;
    box-sizing: border-box;
    border: none;
    border-radius: 25px;
    align-items: center;
    width: fit-content;
    height: 50px;
    padding: 8px 17px;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    text-decoration: none;
    transition: background .3s;
    display: flex;

    color: white;
    &:hover {
            background-color: #007d66;
        }
    }
</style>
<script setup lang="ts">
defineProps<{
    content: {
    title: string;
    link: {
        name: string;
        url: string;
        target: string;
    }
    }
}>()
</script>

<template>
    <div class="call-to-action-block">
        <div class="call-to-action-block__content">
    <h2>{{ content.title }}</h2>
    <ButtonComponent icon="arrow-right" :label="content.link.name" :link="content.link" />
</div>
</div>
</template>

<style>
.call-to-action-block {
    flex-direction: column;
    display: flex;
    padding: 60px 20px 50px;

    @media screen and (min-width: 768px) {
        padding: 120px 30px 100px;
        
    }
}

.call-to-action-block__content {
    max-width: 1240px;
    margin: 0 auto;
}
</style>
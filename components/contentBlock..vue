<script setup lang="ts">
defineProps<{
    element: {
        title: string,
        text: string,
        image: {
            name: string,
            umbracoFile: {
                url: string
            }
        }
    }
    top?: boolean
}>()

const counter = ref(0);
</script>
<template>
    <div class="content-block" :class="{'content-block--is-top': top}">
        <div class="content-block__img-wrap">
        <img class="content-block__img" :src="element.image.umbracoFile.url" :alt="element.image.name" />
        </div>
        <div class="content-block__content">
            <h2>{{ element.title }}</h2>
            <div v-html="element.text"></div>
            <CounterComponent />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .content-block {
        display: flex;
        align-items: center;

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }

        > * {
            flex: 1 1 100%;
        }
    }   
    
    .content-block__img-wrap {
        z-index: 1;
        flex-basis: 48%;

        z-index: 1;
        background-color: #f1f5f8;
        height: 375px;
        margin-right: 20px;
        position: relative;

        @media screen and (min-width: 768px) {
            height: 705px;
            translate: 0 -80px;
            margin-right: 0;
            margin-bottom: 20px;
            width: 100%;
            
        }
    }   
    
    .content-block__img {
        width:100%;
        height:100%;
        object-fit: cover;
    }

    .content-block--is-top {
        @media screen and (max-width: 768px) {
            translate: 0 -40px;
        }
    }

    .content-block__content {
        align-self: stretch;
        background-color: #fff;
        flex-basis: 52%;
        // min-width:52%;
        background-color: #fff;
    margin-top: -40px;
    margin-left: 20px;
    padding: 80px 20px 40px;

        :deep(p) {
            color: #666;
        }

        @media screen and (min-width: 768px) {
            margin-top: 0;
            margin-left: 0;
            margin-right: -60px;
            padding: 100px 100px 100px 160px;
            translate: -60px;
        }
    }

    
</style>
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
}>()

const counter = ref(0);
</script>
<template>
    <div class="content-block">
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

        > * {
            flex: 1 1 100%;
        }
    }   
    
    .content-block__img-wrap {
        height: 705px;
        translate: 0 -80px;
        // min-width: 48%;
        z-index: 1;
        flex-basis: 48%;
    }   
    
    .content-block__img {
        width:100%;
        height:100%;
        object-fit: cover;
    }

    .content-block__content {
        align-self: stretch;
        background-color: #fff;
        flex-basis: 52%;
        // min-width:52%;
        margin-top: 0;
        margin-left: 0;
        margin-right: -60px;
        padding: 100px 100px 100px 160px;
        translate: -60px;

        :deep(p) {
            color: #666;
        }
    }

    
</style>
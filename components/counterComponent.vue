<script setup>
const counter = ref(0); 
</script>
<template>
    <div class="counter">
        <ButtonComponent label="Voeg 1 toe"
                         icon="fa-plus"
                         @click="counter += 1" />
        <p>Het getal is: {{ counter }}</p>
        <ButtonComponent label="Haal 1 weg"
                         icon="fa-minus"
                         @click="counter -= 1" />
    </div>
</template>


<style lang="scss" scoped>
.counter {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-block: 1rem;
}</style>
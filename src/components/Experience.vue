<script setup>

import ExperienceCell from './ExperienceCell.vue';

</script>
<template>
    <div class="experience">
        <div class="title">
            <h1>experience</h1>
        </div>
        <div class="cells">
            <ExperienceCell />
            <ExperienceCell />
            <ExperienceCell />

        </div>
    </div>

</template>
<style scoped>
    .experience {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: bisque;
    }
    .title {
        display: flex;
        justify-content: flex-start;
    }

    .cells {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 30px;
        /* background-color: aliceblue; */
        margin-top: 100px;
        margin-bottom: 100px;
    
    }
    
    h1 {
        font-size: 7em;
        /* background-color: aliceblue; */
        margin: 0;
        font-weight: 700;
    }

</style>
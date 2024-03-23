<script setup>

import ProjectCell from './ProjectCell.vue';

</script>
<template>
    <div class="projects">
        <div class="title">
            <h1>projects</h1>
        </div>
        <div class="cells">
            <ProjectCell />
            <ProjectCell />
            <ProjectCell />

        </div>
    </div>

</template>
<style scoped>
    .projects {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: burlywood;
    }
    .title {
        display: flex;
        justify-content: flex-end;
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
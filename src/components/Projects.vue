<script setup>

import ProjectCell from './ProjectCell.vue';

//tech arrays
const tArr1 = ["aws","typescript","react.js", "redis", "node.js","express.js"]

//bullet arrays
const bArr1 = ["studied and implemented a simplified version of Vercel’s deployment service, as well as a case study of the sytem architecture.","gained experience working with AWS in a realistic environment."]

</script>
<template>
    <div class="projects">
        <div class="title">
            <h1>projects</h1>
        </div>
        <div class="cells">
            <ProjectCell title="vercel clone" blurb="full-stack clone of vercel deployment service" :tech="tArr1" :bullets="bArr1" url="https://github.com/ecolijah/vercel-clone" imgpath="../assets/project-logos/vercel.png"/>

        </div>
    </div>

</template>
<style scoped>
    .projects {
        display: flex;
        flex-direction: column;
        width: 100%;
        /* background-color: burlywood; */
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
        font-size: var(--large-text);
        color: var(--title-color);
        /* background-color: aliceblue; */
        margin: 0;
        font-weight: 700;
        text-shadow: var(--text-shadow);

    }

</style>
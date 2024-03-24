<script setup>

import ExperienceCell from './ExperienceCell.vue';
const arr1 = ["certification for basic understanding and utilization of aws services."]
const arr2 = ["geolocation and mapping: spearheaded the geolocation of over 8,000 steam traps and water devices using ArcGIS Pro, enhancing the operational efficiency of a major gulf coast refinery by streamlining maintenance workflows.", "operational improvements and cost savings: integrated comprehensive maps into the refinery’s GIS system, facilitating faster repairs and contributing to significant reductions in routine expenses and improved system reliability."]
const arr3 = ["honed  problem-solving and communication skills through collaborative projects  and diverse programming languages, preparing for versatile roles in the  tech industry with a focus on continuous learning and growth."]
const arr4 = ["studied design and history of architecture."]



</script>
<template>
    <div class="experience">
        <div class="title">
            <h1>experience</h1>
        </div>
        <div class="cells">
            <ExperienceCell title="aws clf-002 certification" position="certified cloud practicioner" date="march 2024" :bullets="arr1" />
            <ExperienceCell title="engineering consultation firm (confidential)" position="GIS engineer" date="december 2022 - october 2023" :bullets="arr2" />
            <ExperienceCell title="bachelors of computer science" position="university of houston" date="december 2023" :bullets="arr3" />
            <ExperienceCell title="minor in architecture" position="university of houston" date="december 2023" :bullets="arr4" />
            
        </div>
    </div>

</template>
<style scoped>
    .experience {
        display: flex;
        flex-direction: column;
        width: 100%;
        /* background-color: bisque; */
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
        font-size: var(--large-text);
        color: var(--title-color);
        /* background-color: aliceblue; */
        margin: 0;
        font-weight: 700;
        text-shadow: var(--text-shadow);

    }

</style>
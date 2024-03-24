<script setup>
    import {ref} from 'vue';
    defineProps({
        title: String,
        blurb: String,
        imgpath: String,
        tech: Array,
        bullets: Array,
        url: String
    })

    var showReadMore =  ref(false);

    function toggleReadMore() {
        showReadMore.value = !showReadMore.value;
    }
    

</script>
<template>
    <div class="project-cell">
        <div class="image-container">
            <img :src=imgpath alt="logo" />
        </div>
        <div class="description-container">
            <h2>{{ title }}</h2>
            <h3>{{ blurb }}</h3>
            <div class="tech-container">
                <ul class="tech">
                <li v-for="item in tech">{{ item }}</li>
            </ul>
            </div>

            <ul v-if="showReadMore" class="list">
                <li v-for="item in bullets">{{ item }}</li>
            </ul>
            <div class="links">
                <a :href=url target="_blank">github</a>
                <button @click="toggleReadMore">read more \</button>
            </div>
        </div>
    </div>

</template>

<style scoped>

    .tech {
        display: flex;

    }

    .tech-container ul {
        list-style: none;
        padding-left: 0;
    }
    .tech li {
        background-color: #d9d9d9;
        margin-right: 10px;
        padding-right: 5px;
        padding-left: 5px;
        border-radius: 3px;
        -webkit-box-shadow: 3px 3px 7px 1px rgba(28,110,164,0.10); 
        box-shadow: 3px 3px 7px 1px rgba(28,110,164,0.10);
    }

    .links {
        display: flex;
    }
    .project-cell {
        display: flex;

        /* background-color: red; */
        width: 100%;
    }

    .image-container {
        width: 120px;
        background-color: gray;
    }

    .description-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        /* background-color: antiquewhite; */
        width: 100%;
    }

    ul {
        /* padding-left: 20px; */
        list-style: circle;
    }

    h2 {
        color: var(--title-color);
        font-size: var(--mid-text);
        font-weight: 700;
        margin: 0;
        text-shadow: var(--text-shadow);

    }

    h3 {
        color: var(--text-color);
        font-size: var(--small-text);
        font-weight: 400;
        /* margin: 0; */
    }

    li {
        color: var(--text-color);
        font-size: var(--small-text);
        text-align: left;
        width: 70%;
        /* background-color: red; */
        margin-bottom: 20px;

    }
</style>
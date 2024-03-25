<script setup>
    import {ref, watchEffect} from 'vue';
    const props = defineProps({
        title: String,
        blurb: String,
        imgpath: String,
        tech: Array,
        bullets: Array,
        url: String
    })

    console.log(props)

    var showVercel =  ref(false);
    var showKrates =  ref(false);
    var showBeck =  ref(false);

        watchEffect(() => {
        switch (props.imgpath) {
            case "1":
                showVercel.value = true;
                break;
            case "2":
                showKrates.value = true;
                break;
            case "3":
                showBeck.value = true;
                break;
            }
        });

    var showReadMore =  ref(false);

    function toggleReadMore() {
        showReadMore.value = !showReadMore.value;

    }
    

</script>
<template>
    <div class="project-cell">
        <div class="image-container">
            <!-- <img :src="imagepath" alt="logo" /> -->
            <img v-show="showVercel" src="../assets/project-logos/1.png" alt="logo" />
            <img v-show="showKrates" src="../assets/project-logos/2.png" alt="logo" />
            <img v-show="showBeck" src="../assets/project-logos/3.png" alt="logo" />


        </div>
        <div class="description-container">
            <h2>{{ title }}</h2>
            <h3>{{ blurb }}</h3>
            <div class="tech-container">
                <ul class="tech">
                <li v-for="item in tech">{{ item }}</li>
            </ul>
            </div>

            <ul class="bullets" :class="{ 'show': showReadMore }">
                <li v-for="item in bullets">{{ item }}</li>
            </ul>
            <div class="links">
                <a :href=url target="_blank"><img src="../assets/github-mark.png"/></a>
                <button @click="toggleReadMore">
                    <p v-show="!showReadMore">read more ↓</p>
                    <p v-show="showReadMore">read less ↑</p>
                </button>
            </div>
        </div>
    </div>

</template>

<style scoped>

    .bullets {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.5s ease-in-out;
        margin-bottom: 0;
    }

    .bullets.show {
        max-height: 1000px; /* Adjust this value to fit your content */
    }
    
    .links p {
        margin: 0;
        color: white;
        font-size: var(--small-text);
        font-weight: 400;
        padding-left: 3px;
        padding-right: 3px;
        
        /* background-color: aqua; */
    }

    .links button {
        background-color: rgb(41, 41, 41);
        height: 32px;
        margin-bottom: 5px;
        border-radius: 3px;
        -webkit-box-shadow: 3px 3px 7px 1px rgba(28,110,164,0.10); 
        box-shadow: 3px 3px 7px 1px rgba(28,110,164,0.10);
        cursor: pointer;
        border: none;
        margin-top: 0;

    }
    .links img {
        width: 36px;
        height: 36px;
        margin-right: 20px;
        margin-top: 0;
        /* background-color: antiquewhite; */
    }
    .tech {
        display: flex;
        /* background-color: antiquewhite; */
        /* margin-bottom: 0; */

    }

    .tech-container ul {
        list-style: none;
        padding-left: 0;
        /* margin: 0; */
        margin-bottom: 0;
    }
    .tech li {
        background-color: #d9d9d9;
        margin-right: 10px;
        padding-right: 5px;
        padding-left: 5px;
        border-radius: 3px;
        -webkit-box-shadow: 3px 3px 7px 1px rgba(28,110,164,0.10); 
        box-shadow: 3px 3px 7px 1px rgba(28,110,164,0.10);
        width: auto;
        margin-bottom: 0;

    }

    .links {
        display: flex;
        align-items: center;
        /* background-color: red; */
        /* margin: 0; */
    }
    .project-cell {
        display: flex;

        /* background-color: red; */
        width: 100%;
        margin-bottom: 40px;
    }

    .image-container {
        width: 120px;
        /* background-color: gray; */
    }
    .image-container img {
        width: 60%;
        margin-top: 10px;
        padding-right: 40px;

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
        margin: 0;
        text-align: left;
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
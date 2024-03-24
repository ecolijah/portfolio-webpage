<script setup>

import Navbar from './Navbar.vue';
import Landing from './Landing.vue';
import Projects from './Projects.vue';
import Experience from './Experience.vue';
import Studio from './Studio.vue'
import Contact from './Contact.vue';

</script>

<template>
    <div class="outer-container">
        <div class="inner-container">

            <Navbar />
            <Landing />
            <Projects />
            <Experience />
            <Studio />
            <Contact />


        </div>
    </div>


</template>
<style scoped>
    .outer-container {
        min-width: 100vw;
        background-color: rgb(255, 255, 255);
        display: flex;
        flex-direction: row;
        justify-content: center;
        /* align-items: start; */

    }


    .inner-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-basis: 1080px;
        background-color: rgb(255, 255, 255);


    }

    p {
        font-size: 20pt;
    }
</style>
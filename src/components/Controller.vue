<script setup>

import Navbar from './Navbar.vue';
import Landing from './Landing.vue';

</script>

<template>
    <div class="outer-container">
        <div class="inner-container">

            <Navbar />
            <Landing />


        </div>
    </div>


</template>
<style scoped>
    .outer-container {
        min-width: 100vw;
        background-color: yellow;
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
        background-color: yellowgreen;

    }

    p {
        font-size: 20pt;
    }
</style>
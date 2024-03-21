<script setup>
</script>

<template>
    <div class="outer-container">
        <div class="left-spacer"></div>
        <div class="inner-container">
            <p>hello jdao abdajbd abkj k vj   jjjj j jjj jjj jjj jjj jj jjj jdao jjj
                jjj jjj jjj jjjj jjjj jjj jjj jjj jjj j
            </p>
        </div>
        <div class="right-spacer"></div>
    </div>


</template>
<style scoped>
    .outer-container {
        min-width: 100vw;
        min-height: 200vh;
        background-color: yellow;
        display: flex;
        flex-direction: row;
        justify-content: center;

    }

    .left-spacer {
        display: flex;
        min-width: auto;
        background-color: aqua;
        
    }

    .right-spacer {
        display: flex;
        min-width: fill;
        background-color: red;
    }

    .inner-container {
        display: flex;
        max-width: 1080px;
        background-color: yellowgreen;

    }

    p {
        font-size: 20pt;
    }
</style>
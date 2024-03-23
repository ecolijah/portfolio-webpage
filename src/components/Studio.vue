<script setup>


</script>
<template>
    <div class="studio">
        <div class="title">
            <h1>studio</h1>
        </div>
        <div class="cells">
            <p>i also enjoy designing furniture and home goods.</p>
            <p>if you're <a href="https://curious-design.vercel.app/">interested...</a></p>


        </div>
    </div>

</template>
<style scoped>
    .studio {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: rgb(135, 222, 142);
        height: 100vh;
        gap: 30%;
    }
    .title {
        display: flex;
        justify-content: flex-end;
    }

    .cells {
        display: flex;
        flex-direction: column;
        justify-content: center;

    }
    
    h1 {
        font-size: 7em;
        /* background-color: aliceblue; */
        margin: 0;
        font-weight: 700;
    }

</style>
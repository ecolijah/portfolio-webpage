<script setup>


</script>
<template>
    <div class="studio">
        <div class="title">
            <h1>studio</h1>
        </div>
        <div class="cells">
            <p>i also enjoy designing furniture and home goods.</p>
            <p>if you're <a href="https://curiousdesign.xyz/" target="_blank">curious...</a></p>


        </div>
    </div>

</template>
<style scoped>
@media only screen and (min-width:801px) {
    .title {
        display: flex;
        justify-content: flex-end;
    }
}
@media only screen and (max-width: 800px) {
    .title h1 {
        justify-content: center;
    }

    p {
        padding: 10px;
    }
}
    .studio {
        display: flex;
        flex-direction: column;
        width: 100%;
        /* background-color: rgb(135, 222, 142); */
        height: 100vh;
        gap: 30%;
    }


    .cells {
        display: flex;
        flex-direction: column;
        justify-content: center;

    }
    
    h1 {
        font-size: var(--large-text);
        color: var(--title-color);
        /* background-color: aliceblue; */
        margin: 0;
        font-weight: 700;
        text-shadow: var(--text-shadow);

    }
    p {
        font-size: var(--mid-text);
        color: var(--text-color);
    }

    a {
        color: var(--accent-color);
        text-shadow: var(--small-text-shadow);
    }

</style>
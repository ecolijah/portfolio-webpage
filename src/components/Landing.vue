<script setup>

</script>

<template>
    <div class="landing">

        <div class="landing-text">
            <h1>hello.</h1>
            <h2>my name is eli.</h2>
            <p>i'm elijah lopez, a software developer, maker, 
                and recent graduate from the university of houston. (computer science with an architecture minor)</p>
            <p>occupying and pushing a frontier in any space is my aspiration, and learning is my number-one hobby.</p>
        </div>

        <div class="landing-image">
            <img src="../assets/aboutme-pic.png" alt="aboutmepic"/>
        </div>

    </div>
</template>

<style scoped>

    .landing {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        /* background-color: rgb(195, 52, 107); */
        height: 100vh;
        justify-content: space-between;
        /* padding: 10px; */
        margin-bottom: 140px;
    }

    .landing-text {
        display: flex;
        flex-direction: column;
        /* justify-content: flex; */
        align-items: flex-start;
        /* background-color: blanchedalmond; */
        text-align: left;
        flex-basis: 45%;
        max-height: 70%;
        /* padding: 10px; */

    }
    .landing-image {
        display: flex;
        flex-basis: 38%;
        /* width: auto; */
        /* background-color: red; */
        justify-content: flex-end;
        max-height: 70%;


    }

    .landing-image img {
        max-width: 100%;
        object-fit: contain;
        max-height: 100%;
        border-radius: 6px;
        -webkit-box-shadow: 5px 5px 15px 3px rgba(28,110,164,0.20); 
        box-shadow: 5px 5px 15px 3px rgba(28,110,164,0.20);
    }

    h1 {
        font-size: var(--larger-text);
        /* background-color: aliceblue; */
        margin: 0;
        font-weight: 700;
        color: var(--title-color);
        text-shadow: var(--text-shadow);

    }
    h2{
        font-size: var(--medium-text);
        /* background-color:chartreuse ; */
        margin: 0;
        font-weight: 400;
        color: var(--title-color);
        text-shadow: var(--text-shadow);

    }
    p {
        font-size: var(--small-text);
        color: var(--text-color);
        /* text-shadow: var(--small-text-shadow); */
    }
</style>
<script setup>
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

</script>

<template>
    <div class="landing">

        <div class="landing-text">
            <h1>hello.</h1>
            <h2>my name is eli.</h2>
            <p>i'm a software developer, maker, 
                and recent graduate from the university of houston. (computer science with an architecture minor)</p>
            <p>occupying and pushing a frontier in any space is my aspiration, and learning is my number-one hobby.</p>

            <div class="links">
                <!-- <a href="" target="_blank">instagram</a> -->
                <a href="https://github.com/ecolijah" target="_blank">
                    <img v-if="!isDarkMode" src="../assets/github-mark.png"/>
                    <img v-if="isDarkMode" src="../assets/icons8-github-30.png"/>

                </a>
                <a href="https://www.linkedin.com/in/elijah-lopez-65b809238/" target="_blank">
                    <img  v-if="!isDarkMode" src="../assets/icons8-linkedin-50.png" />
                    <img  v-if="isDarkMode" src="../assets/icons8-linkedin-50-white.png" />

                </a>
            </div>
        </div>

        <div class="landing-image">
            <img src="../assets/aboutme-pic.png" alt="aboutmepic"/>
        </div>


    </div>
</template>

<style scoped>

    .links {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 30%;
    }

    .links a {
        /* Apply color change to the <a> tag */
    }

    .links img:hover {
        /* Change the color of the <a> tag on hover */
        /* color: #79a166; */
        width: 43px;
    }

    .links img {
        margin-top: 20px;
        width: 40px;
        transition: width 0.3s ease-in-out;


        /* color: white; */
        /* Remove color property from here */
    }

    .landing {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        height: 100vh;
        justify-content: space-between;
        margin-bottom: 140px;
    }

    .landing-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        flex-basis: 45%;
        max-height: 70%;
    }

    .landing-image {
        display: flex;
        flex-basis: 38%;
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
        margin: 0;
        font-weight: 700;
        color: var(--title-color);
        text-shadow: var(--text-shadow);
    }

    h2 {
        font-size: var(--medium-text);
        margin: 0;
        font-weight: 400;
        color: var(--title-color);
        text-shadow: var(--text-shadow);
    }

    p {
        font-size: var(--small-text);
        color: var(--text-color);
    }
</style>

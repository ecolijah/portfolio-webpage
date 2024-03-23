<script setup>
</script>

<template>
    <div class="landing">

        <div class="landing-text">
            <h1>Hello!</h1>
            <h2>My name is Eli.</h2>
            <p>While pursuing my  bachelors of computer science, with a minor in architecture, 
                web  development became a rabbit hole I dove into head.</p>
            <p>Since  then I have had freelance experience developing a web application, 
                and  created full stack projects that serve a functional purpose in life.</p>
        </div>

        <div class="landing-image">
            <!-- <img src="../assets/aboutme-pic.png" alt="aboutmepic"/> -->
        </div>

    </div>
</template>

<style scoped>

    .landing {
        display: flex;
        flex-direction: row;
        /* justify-content: flex-start; */
        /* align-items: flex-start; */
        background-color: rgb(124, 14, 56);
        flex-basis: 200px 400px;
    }

    .landing-text {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        background-color: blanchedalmond;
    }
    .landing-image {
        display: flex;
        width: 50%;
    }

    .img {
        max-width: 100%;
        object-fit: contain;
        max-height: 100%;
    }
</style>
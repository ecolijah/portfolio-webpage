<script setup>
defineProps({
    title: String,
    position: String,
    date: String,
    bullets: Array
})

// const items = bullets;
</script>
<template>
    <div class="project-cell">
        <h2>{{ title }}</h2>
        <div class="title">
            <p>{{ position }}</p>
            <p>{{ date }}</p>
        </div>
        <ul>
            <li v-for="item in bullets">{{ item }}</li>
        </ul>
    </div>

</template>

<style scoped>

@media only screen and (max-width: 800px) {
    .title {
        max-width: 90%;
    }

    h2 {
        padding-left: 10px;
    }
    .title p {
        padding-left: 10px;
    }

    li {
        padding-left: 10px;
    }
}
    .project-cell {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        /* background-color: red; */
        width: 100%;
        /* min-height: 240px; */
    }

    .title {
        display: flex;
        justify-content: space-between;
        width: inherit;
        margin-bottom: 10px;
        text-align: left;
    }

    .title p{
        color: var(--text-color);

    }

    p {
        font-size: var(--small-text);
        color: var(--title-color);
        font-weight: 400;
        margin: 0;
    }

    h2 {
        color: var(--title-color);
        font-size: var(--mid-text);
        font-weight: 700;
        margin: 0;
        text-shadow: var(--text-shadow);
        text-align: left;

    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        /* background-color: aliceblue; */
        width: 90%;
        list-style:circle;
        /* padding-left: 20px; */
    }

    li {
        color: var(--text-color);
        font-size: var(--small-text);
        text-align: left;
        width: 84%;
        /* background-color: red; */
        margin-bottom: 20px;

    }

</style>
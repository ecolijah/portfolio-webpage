<script setup>

import ProjectCell from './ProjectCell.vue';

//tech arrays
const tArr1 = ["aws","typescript","react.js", "redis", "node.js","express.js"]
const tArr2 = ["swift/swiftui","firebase","spotify-api"]
const tArr3 = ["python", "pinecone", "tkinter", "openai-api"]
const tArr4 = ["vue.js", "node.js"]

//bullet arrays
const bArr1 = ["studied and implemented a simplified version of vercel’s deployment service, as well as a case study of the system architecture.","gained experience working with aws in a realistic environment."]
const bArr2 = ["developed ”krates”, an ios app designed to facilitate the discovery of new music whilst promoting the appreciation of albums as complete bodies of work.", "like ’letterboxd’, but replace movies with albums. (users create lists of albums, by any criteria.)"]
const bArr3 = ["developed ”beck”, an ai-powered personal assistant with configurable behavior, in order to cater to diverse user preferences.", "enabled long-term memory functionality through the integration of vector database/embeddings.", "devised a model that fuses recent dialogues with relevant past conversations, enhancing the ai’s contextual comprehension."]
const bArr4 = ["when practicing my typing on monkeytype, i often found myself needing to improve my fundamentals.", "So i developed babytpe, a lightweight webapp focused on improving single character accuracy."]

</script>
<template>
    <div class="projects">
        <div class="title">
            <h1>projects</h1>
        </div>
        <div class="cells">
            <ProjectCell title="babytype" blurb="monkeytype for single charcters." :tech="tArr4" :bullets="bArr4" url="https://github.com/ecolijah/babytype" imgpath="4" link="https://babytyp3.vercel.app/" live="True"/>
            <ProjectCell title="vercel-esque service" blurb="simplified clone of vercel deployment service." :tech="tArr1" :bullets="bArr1" url="https://github.com/ecolijah/vercel-clone" imgpath="1" />
            <ProjectCell title="krates - ios app" blurb="music organization and discovery, with an emphasis on albums as a complete body of work." :tech="tArr2" :bullets="bArr2" url = "https://github.com/ecolijah/Krates" imgpath="2"/>
            <ProjectCell title="beck" blurb="ai-powered personal assistant." :tech="tArr3" :bullets="bArr3" url = "https://github.com/ecolijah/Beck" imgpath="3"/>
        
        </div>
    </div>

</template>
<style scoped>

@media only screen and (min-width: 801px) {
    .title {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 40px;
    }

}
@media only screen and (max-width: 800px) {

    .title {
        justify-content: center;
    }
}
    .projects {
        display: flex;
        flex-direction: column;
        width: 100%;
        /* background-color: burlywood; */
    }


    .cells {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 30px;
        /* background-color: aliceblue; */
        margin-top: 100px;
        margin-bottom: 100px;

    }
    

        
    h1 {
        font-size: var(--large-text);
        color: var(--title-color);
        /* background-color: aliceblue; */
        margin: 0;
        font-weight: 700;
        text-shadow: var(--text-shadow);

    }

</style>

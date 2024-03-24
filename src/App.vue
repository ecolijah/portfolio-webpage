<script setup>

import Landing from './components/Landing.vue';
import Projects from './components/Projects.vue';
import Experience from './components/Experience.vue';
import Studio from './components/Studio.vue'
import Contact from './components/Contact.vue';
import { onMounted } from 'vue'
onMounted(() => {
    // Smooth scroll animation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });

            // Apply animation to the target section
            target.classList.add('scroll-animation');

            // Remove animation after a short delay
            setTimeout(() => {
                target.classList.remove('scroll-animation');
            }, 500);
        });
    });
});
  
</script>

<template>
  <div class="outer-container">

    <div class="inner-container">
      
      <nav class="navbar">

        <!-- <a href="#home">Home</a> -->
        <a href="#projects">projects</a>
        <a href="#experience">experience</a>
        <a href="#studio">studio</a>
        <a href="#contact">contact</a>

      </nav>

      <Landing id="home" class="section" />
      <Projects id="projects" class="section"/>
      <Experience id="experience" class="section"/>
      <Studio id="studio" class="section"/>
      <Contact id="contact" class="section"/>

    </div>
  </div>

  

</template>

<style scoped>

  .section {

    transition: transform 0.8s ease-in-out; /* Smooth scroll animation */
  }
  .navbar {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    background-color: aliceblue;
  }

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
</style>

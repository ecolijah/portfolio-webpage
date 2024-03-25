<script setup>

import Landing from './components/Landing.vue';
import Projects from './components/Projects.vue';
import Experience from './components/Experience.vue';
import Studio from './components/Studio.vue'
import Contact from './components/Contact.vue';
import { ref, onMounted } from 'vue'

// Reactive variable to track whether the user has scrolled past the landing page
const scrolledPastLandingPage = ref(false);

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
        // Listen for scroll events to determine if the user has scrolled past the landing page
    window.addEventListener('scroll', () => {
        const landingPageHeight = document.querySelector('#home').offsetHeight;
        scrolledPastLandingPage.value = window.scrollY > landingPageHeight;
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
      <a href="#home" class="back-to-top" :class="{ 'show': scrolledPastLandingPage }">back to top</a>
    </div>
  </div>

  

</template>

<style scoped>  

.back-to-top {
    font-size: var(--smaller-text);
    position: fixed;
    bottom: 20px; /* Adjust as needed */
    right: 15%; /* Adjust as needed */
    color: var(--text-color);
    z-index: 999; /* Ensure it's above other content */
    transition: opacity 0.5s ease;
    opacity: 0;
    background-color: rgba(48, 140, 202, 0.138);
    border-radius: 3px;
    padding-right: 5px;
    padding-left: 5px;
}

.back-to-top.show {
    opacity: 0.7;
}

  .section {

    transition: transform 0.8s ease-in-out; /* Smooth scroll animation */
  }
  .navbar {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    text-shadow: var(--text-shadow);
    margin-top: 15px;
    /* background-color: aliceblue; */
    
  }
  .navbar a {
    color: var(--title-color);
  }

  .outer-container {
    min-width: 100vw;
    background-color: rgb(255, 253, 250);
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
    /* background-color: rgb(255, 255, 255); */


  }
</style>

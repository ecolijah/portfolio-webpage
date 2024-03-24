<template>
    <div class="contact">
        <div class="title">
            <h1>contact</h1>
        </div>
        <!-- <input type="text" v-model="recipient" placeholder="Recipient"> -->
        <div class="forms">
          <h2>i'm actively looking for new opportunities! send me a message and I will get back with you.</h2>

          <p>what's your name?</p>
          <input type="text" v-model="subject" placeholder="">
          <p>what would you like to say to me?</p>
          <textarea v-model="body" placeholder=""></textarea>
          <a :href="mailToLink" target="_blank" ><p>submit</p></a>
        </div>
        
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        recipient: 'elijahlopez0030@gmail.com',
        subject: '',
        body: ''
      };
    },
    computed: {
      mailToLink() {
        const recipient = encodeURIComponent(this.recipient);
        const subject = encodeURIComponent(this.subject);
        const body = encodeURIComponent(this.body);
        return `mailto:${recipient}?subject=${subject}&body=${body}`;
      }
    }
  };
  </script>
  
  <style scoped>

    .contact {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        align-items: flex-start;
        background-color: burlywood;
    }
      .title {
        display: flex;
        justify-content: flex-start;
    }

    .forms {
      /* padding-left: 5%; */
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      background-color: aliceblue;
      width: 100%%;
      flex-basis: 80%;
    }

    .forms textarea {
      width: 90%;
      height: 30%;
    }

    h1 {
        font-size: 7em;
        /* background-color: aliceblue; */
        margin: 0;
        font-weight: 700;
    }
    a {
      background-color: black;
      /* margin: 5px; */
      width: 80px;
      /* height: 40px; */
    }
    .forms p {
      /* margin: 5px; */
    }


  /* Your component styles */
  </style>
  
<template>
    <div class="contact">
        <div class="title">
            <h1>studio</h1>
        </div>
        <!-- <input type="text" v-model="recipient" placeholder="Recipient"> -->
        <input type="text" v-model="subject" placeholder="Subject">
        <textarea v-model="body" placeholder="Body"></textarea>
        <a :href="mailToLink" target="_blank" rel="noopener">Send Email</a>
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
        background-color: burlywood;
    }
      .title {
        display: flex;
        justify-content: flex-end;
    }

    h1 {
        font-size: 7em;
        /* background-color: aliceblue; */
        margin: 0;
        font-weight: 700;
    }
  /* Your component styles */
  </style>
  
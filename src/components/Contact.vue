<template>
    <div class="contact">
        <div class="title">
            <h1>contact</h1>
        </div>
        <!-- <input type="text" v-model="recipient" placeholder="Recipient"> -->
        <div class="forms">
          <h2>i'm actively looking for new opportunities! send me a message and I will get back with you.</h2>
          <div class="group">
            <p>what's your name?</p>
            <input type="text" v-model="subject" placeholder="">
          </div>

          <div class="group">
            <p>what would you like to say to me?</p>
            <textarea v-model="body" placeholder=""></textarea>

          </div>
          
          <div>
            <a :href="mailToLink" target="_blank" >
              <div class="submit">
                <h3>submit</h3>
              </div>
              
            </a>
          </div>
         
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
  @media only screen and (max-width: 800px) {
    .title h1 {
        margin-left: 20px;
    }

    .group {
      padding: 10px;
    }

    .submit {
      padding-left: 10px;
    }
}

  input  {
    margin-bottom: 0;
    width: 100%;
  }

    .contact {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        align-items: flex-start;
        /* background-color: blueviolet; */
    }
    .title {
        display: flex;
        justify-content: flex-start;
    }

    .forms {
      /* padding-left: 5%; */
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      /* background-color: aliceblue; */
      width: 100%;
      flex-basis: 60%;
    }
    .group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 90%;

      /* background-color: yellowgreen; */
    }

    textarea {
      width: 100%;
      height: 150px;
    }

    h1 {
        font-size: var(--large-text);
        color: var(--title-color);
        /* background-color: aliceblue; */
        margin: 0;
        font-weight: 700;
        text-shadow: var(--text-shadow);

    }

    h2 {

      font-size: var(--small-text);
        /* background-color: aliceblue; */
        color: var(--title-color);

        /* margin: 0; */
        font-weight: 700;
        margin-bottom: 0;
        text-shadow: var(--small-text-shadow);

    }
    a {
      /* background-color: black; */
      /* margin: 5px; */
      width: 80px;
      /* color: blue; */
      /* height: 40px; */
    }

    .submit h3 {
      font-size: var(--small-text);
      font-weight: 400;
      color: white;
      background-color: black;
      border: none;
      padding: 5px;
      border-radius: 3px;
      -webkit-box-shadow: 5px 5px 15px 3px rgba(28,110,164,0.20); 
        box-shadow: 5px 5px 15px 3px rgba(28,110,164,0.20);
    }

    .forms p {
      /* margin: 5px; */
      font-size: var(--small-text);
      color: var(--text-color);
      font-weight: 400;
      margin: 0;
      /* background-color: red; */
    }


  /* Your component styles */
  </style>
  
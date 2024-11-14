<template>
  <div id="app" class="container">
      <div class="left-section">
        <h1>We are a creative agency</h1>
        <h1>Let’s join with us!</h1>
        <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain but because.</p>
      </div>
      <div class="right-section">
        <div class="form-container">
          <ProgressBar />
          <form @submit.prevent="nextStep">
            <div v-if="currentStep === 1">
              <FormInput class="form_input" label="Name" type="text" id="name"/>
              <FormInput class="form_input" label="Email" type="email" id="email"/>
            </div>
            <div v-if="currentStep === 2">
              <button class="previous-step-btn" @click="previousStep()"> ⟵ Previous Step</button>
              <FormInput class="form_input" label="Phone Number" type="phone" id="phone"/>
            </div>
            <div v-if="currentStep === 3">
              <button class="previous-step-btn" @click="previousStep()"> ⟵ Previous Step</button>
              <FormInput class="form_input" label="Email" type="email" id="email"/>
            </div>
            <div class="next-button">
              <button type="submit">{{ currentStep < totalSteps ? 'Next' : 'Submit' }}</button>
            </div>
          </form>
        </div>
      </div> 
  </div>
</template>

<script>
import ProgressBar from './ProgressBar.vue';
import FormInput from './FormInput.vue';

export default {
  name: 'HomeScreen',
  components: {
    FormInput,
    ProgressBar
  },
  props: {
    msg: String
  },
  data() {
    return {
      currentStep: 1,
      totalSteps: 3,
      formData: {
        name: '',
        email: '',
        phone: '',
        age: '',
        address: '',
        occupation: ''
      }
    }
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      } else {
        alert("Form submitted!");
      }
    },

    previousStep() {
      if (this.currentStep > 0 && this.currentStep <= this.totalSteps) {
        this.currentStep--;
      } 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

#app {
  display: flex;
  width: 100vw;
  height: 100vh;
}

.container {
  display: flex;
  width: 100%;
  height: 100%;
}

.left-section, .right-section {
  flex: 1;
  height: 100%;
}

.left-section {
  background-image: url("https://img.freepik.com/fotos-gratis/closeup-de-executiva-brainstorming-grayscale_53876-42806.jpg?t=st=1731621273~exp=1731624873~hmac=34c1777c92b3e51f8efb4f534e683326f13a9bd6e3e95905861d7bccf57ed0bd&w=996");
  background-size: cover;
  background-position: center;
  align-content: center;
}

.right-section {
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  padding: 40px;
}

h1, p {
  color: white;
  justify-self: center;
  text-align: left;
  width: 70%;
}

p {
  margin-top: 5%;
  line-height: 1.7em;
}

.form-container {
  max-width: 400px;
  width: 100%;
}

form {
  margin-top: 13%;
}

button {
  border: 0;
  background: none;
  color: white;
  cursor: pointer;
}
.next-button {
  width: 25%;
  background-color: #42b983;
  height: 50px;
  margin-top: 3%;
  align-content: center;
  border-radius: 5px;
}

.previous-step-btn {
  color: gray;
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
  font-size: small;
  text-transform: uppercase;
  cursor: pointer;
}

</style>
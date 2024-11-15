<template>
  <div id="app" class="container">
      <div class="left-section">
        <h1>We are a creative agency</h1>
        <h1>Let’s join with us!</h1>
        <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain but because.</p>
      </div>
      <div class="right-section">
        <div class="form-container">
          <ProgressBar :currentStep="currentStep" :totalSteps="totalSteps" />
          <form @submit.prevent="nextStep">
            <div v-if="currentStep === 1">
              <FormInput class="form_input" label="Name" type="text" id="name"/>
              <FormInput class="form_input" label="Email" type="email" id="email"/>
            </div>
            <div v-if="currentStep === 2">
              <PreviousButton @previous-step="previousStep" />
              <FormInput class="form_input" label="Phone Number" type="phone" id="phone"/>
              <div class="selecter-container">
                <CustomSelecter
                  label="Area of Interest"
                  :options="areaOptions"
                  v-model="selectedOption"
                />
              </div>
            </div>
            <div v-if="currentStep === 3">
              <PreviousButton @previous-step="previousStep" />
              <div class="message-section">
                <h2>Write a message</h2>
                <textarea
                  id="coverLetter"
                  v-model="coverLetter"
                  placeholder="Cover letter"
                  class="message-input" > 
                </textarea>
                <label class="terms-checkbox">
                  <input class="check-box" type="checkbox" v-model="agreed" />
                  I agree to the <a href="#" target="_blank">Terms and Conditions</a>
                </label>
              </div>
            </div>
            <FormButton :title="currentStep < totalSteps ? 'Next' : 'Submit'" />
          </form>
        </div>
      </div> 
  </div>
</template>

<script>
import ProgressBar from './ProgressBar.vue';
import FormInput from './FormInput.vue';
import FormButton from './FormButton.vue';
import PreviousButton from './PreviousButton.vue';
import CustomSelecter from './CustomSelecter.vue';

export default {
  name: 'HomeScreen',
  components: {
    FormInput,
    ProgressBar,
    FormButton,
    PreviousButton,
    CustomSelecter
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
      },
      selectedOption: '', // Holds the selected value
      areaOptions: [
        { value: 'Development' },
        { value: 'Marketing' },
        { value: 'Design' }
      ]
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
      } else {
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

.message-input {
  width: 100%; /* Full width */
  height: 150px; /* Height suitable for a message */
  padding: 10px; /* Padding inside the text area */
  border: 1px solid #ddd; /* Border color and style */
  border-radius: 4px; /* Rounded corners */
  font-size: 16px; /* Font size for readability */
  resize: vertical; /* Allow vertical resizing only */
  outline: none; /* Remove outline on focus */
  transition: border-color 0.3s ease; /* Smooth border transition on focus */
  margin-top: 20px;
}

/* Placeholder styling */
.message-input::placeholder {
  color: #aaa; /* Placeholder color */
}

/* Focus state for textarea */
.message-input:focus {
  border-color: #4caf50; /* Change border color on focus */
}

.check-box {
  accent-color: green;
}

.terms-checkbox {
  margin-top: 20px;
}

.message-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}


</style>
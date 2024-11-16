<template>
  <div id="app" class="container">
    <div class="left-section">
      <h1>We are a creative agency</h1>
      <h1>Let’s join with us!</h1>
      <p>
        Nor again is there anyone who loves or pursues or desires to obtain pain
        of itself, because it is pain but because.
      </p>
    </div>
    <div class="right-section">
      <div class="form-container">
        <ProgressBar :currentStep="currentStep" :totalSteps="totalSteps" />
        <form @submit.prevent="nextStep">
          <!-- Step 1 -->
          <div v-if="currentStep === 1">
            <!-- FormInput with v-model and @input -->
            <FormInput
              class="form_input"
              label="Name"
              type="text"
              id="name"
              v-model="writingName"
              @input="validateName"
            />

            <span v-if="nameError" class="error-message">{{ nameError }}</span>
  
            <FormInput
              class="form_input"
              label="Email"
              type="email"
              id="email"
              v-model="email"
              @input="validateEmail"
            />
            <span v-if="emailError" class="error-message">{{emailError}}</span>
          </div>

          <!-- Step 2 -->
          <div v-if="currentStep === 2">
            <PreviousButton @previous-step="previousStep" />
            <FormInput
              class="form_input"
              label="Phone Number"
              type="text"
              id="phone"
              v-model="phone"
            />
            <span v-if="phoneError" class="error-message">{{ phoneError }}</span>

            <div class="selecter-container">
              <CustomSelecter
                label="Area of Interest"
                :options="areaOptions"
                v-model="selectedOption"
              />
            </div>
          </div>

          <!-- Step 3 -->
          <div v-if="currentStep === 3">
            <PreviousButton @previous-step="previousStep" />
            <div class="message-section">
              <h2>Write a message</h2>
              <textarea
                id="coverLetter"
                v-model="coverLetter"
                placeholder="Message"
                class="message-input"
              ></textarea>
              <label class="terms-checkbox">
                <input class="check-box" type="checkbox" v-model="agreed" />
                I agree to the <a href="#" target="_blank">Terms and Conditions</a>
              </label>
              <span v-if="termsError" class="error-message">{{ termsError }}</span>
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
    CustomSelecter,
  },
  data() {
    return {
      currentStep: 1,
      totalSteps: 3,
      writingName: '', // The name value bound to the input
      nameError: "", 
      phoneError: "", 
      termsError: "", 
      email: '',
      phone: '',
      emailError: '',
      agreed: false,
      selectedOption: '',
      areaOptions: [
        { value: 'Development' },
        { value: 'Marketing' },
        { value: 'Design' },
      ],
    };
  },
  computed: {
    isStepValid() {
      if (this.currentStep === 1) {
        return !this.nameError && !this.emailError;
      }
      if (this.currentStep ===2) {
        return !this.phoneError;
      }
      if (this.currentStep === 3) {
        return !this.termsError
      }
      return true;
    },
  },
  methods: {

    nextStep() {
      console.log("Name before validation:", this.name);

      if (this.currentStep === 1) {
        this.validateName();
        this.validateEmail();
      } 

      if (this.currentStep == 2) {
        this.validatePhone();
      }

      if (this.currentStep == 3) {
        this.validateTermsAndConditions();
      }

      if (this.isStepValid) {
        if (this.currentStep < this.totalSteps) {
          this.currentStep++;
        } else {
          alert('Form submitted!');
        }
      }
    },
    previousStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },

    validateTermsAndConditions() {
      if(!this.agreed) {
        this.termsError = "Please read and agree to the terms and conditions to continue";
      } else {
        this.termsError = "";
      }
    },
    validateName() {
      const trimmedValue = String(this.writingName || "").trim();
      console.log("Validating name:", trimmedValue); // Debugging

      if (trimmedValue.length === 0) {
        this.nameError = "Name is required.";
      } else {
        this.nameError = ""; // Clear the error if valid
      }
    },
    validatePhone() {
      const trimmedPhone = this.phone.trim();
      const phoneRegex = /^[0-9]{9}$/; // 9-digit phone number
      if (!trimmedPhone) {
        this.phoneError = "Phone number is required.";
      } else if (!phoneRegex.test(trimmedPhone)) {
        this.phoneError = "Please enter a valid 9-digit phone number.";
      } else {
        this.phoneError = "";
      }
    },
    validateEmail() {
      const trimmedValue = String(this.email || "").trim();
      console.log("email:", trimmedValue.length === 0); // Debugging

      if (trimmedValue.length === 0) {
        this.emailError = 'Email is required.';
      } else if (!this.isValidEmail(this.email)) {
        this.emailError = 'Please enter a valid email address.';
      } else {
        this.emailError = '';
      }
    },
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email || '');
    },
  },
};
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

.error-message {
  display: flex;
  justify-self: flex-start;
  font-size: 12px;
  color: red;
  margin-top: 10px;
  margin-bottom: 10px;
}


</style>
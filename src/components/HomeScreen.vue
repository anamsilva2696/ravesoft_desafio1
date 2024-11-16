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
        <!-- Progress bar -->
        <ProgressBar :currentStep="currentStep" :totalSteps="totalSteps" />
        <form @submit.prevent="nextStep">
          <!-- Step 1 -->
          <div v-if="currentStep === 1">
            <FormInput
              class="form_input"
              label="Name"
              type="text"
              id="name"
              v-model="name"
              @input="validateName"
            />
            <!-- Error message for name if exists -->
            <span v-if="nameError" class="error-message">{{ nameError }}</span>
            <FormInput
              class="form_input"
              label="Email"
              type="email"
              id="email"
              v-model="email"
              @input="validateEmail"
            />
            <!-- Error message for email if exists -->
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
            <!-- Error message for phone if exists -->
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
              <FormTextArea
                id="coverLetter"
                v-model="message"
                placeholder="Message"
                class="message-input"
              />
              <!-- Error message for message if exists -->
              <span v-if="messageError" class="error-message">{{ messageError }}</span>
              <CheckBox v-model="agreed" />
              <!-- Error message for terms and conditions if exists -->
              <span v-if="termsError" class="error-message">{{ termsError }}</span>
            </div>
          </div>
          <!-- show `Next` until the last step where it shows `Submit` -->
          <FormButton :title="currentStep < totalSteps ? 'Next' : 'Submit'" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from './form/ProgressBar.vue';
import FormInput from './form/FormInput.vue';
import FormButton from './form/buttons/FormButton.vue';
import PreviousButton from './form/buttons/PreviousButton.vue';
import CustomSelecter from './form/selector/CustomSelecter.vue';
import FormTextArea from './form/FormTextArea.vue';
import CheckBox from './form/CheckBox.vue';

export default {
  name: 'HomeScreen',
  components: {
    FormInput,
    ProgressBar,
    FormButton,
    PreviousButton,
    CustomSelecter,
    FormTextArea,
    CheckBox
  },
  data() {
    return {
      currentStep: 1,
      totalSteps: 3,
      name: '', 
      email: '',
      phone: '',
      message: '',
      nameError: '', 
      phoneError: '', 
      termsError: '', 
      emailError: '',
      messageError: '',
      agreed: false,
      selectedOption: 'Other',
      areaOptions: [
        { value: 'Development' },
        { value: 'Marketing' },
        { value: 'Design' },
        { value: 'Other' },
      ],
    };
  },
  computed: {
    /* Check if the is valid to go to the next step */ 
    isStepValid() {
      if (this.currentStep === 1) {
        return !this.nameError && !this.emailError;
      }
      if (this.currentStep ===2) {
        return !this.phoneError;
      }
      if (this.currentStep === 3) {
        return !this.messageError && !this.termsError
      }
      return true;
    },
  },
  methods: {

    /* method that is called when click on next button */ 
    nextStep() {

      if (this.currentStep === 1) {
        this.validateName();
        this.validateEmail();
      } 

      if (this.currentStep == 2) {
        this.validatePhone();
      }

      if (this.currentStep == 3) {
        this.validateTermsAndConditions();
        this.validateMessage();
      }

      if (this.isStepValid) {
        if (this.currentStep < this.totalSteps) {
          this.currentStep++;
        } else {
          this.$router.push("/success"); 
        }
      }
    },

    /* method that is called when click on previous button */ 
    previousStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },

    /* Validate name method */
    validateName() {
      const trimmedValue = String(this.name || "").trim();

      if (trimmedValue.length === 0) {
        this.nameError = "Name is required.";
      } else {
        this.nameError = ""; // Clear the error if valid
      }
    },

    /* Validate email method */
    validateEmail() {
      const trimmedValue = String(this.email || "").trim();

      if (trimmedValue.length === 0) {
        this.emailError = 'Email is required.';
      } else if (!this.isValidEmail(this.email)) {
        this.emailError = 'Please enter a valid email address.';
      } else {
        this.emailError = '';
      }
    },

    /* Validate email regex method */
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email || '');
    },

    /* Validate terms and condition method */
    validateTermsAndConditions() {
      console.log("agreed ", this.agreed);
      if(!this.agreed) {
        this.termsError = "Please read and agree to the terms and conditions to continue";
      } else {
        this.termsError = "";
      }
    },
    
    /* Validate phone number method */
    validatePhone() {
      const trimmedPhone = this.phone.trim();
      if (!trimmedPhone) {
        this.phoneError = "Phone number is required.";
      } else if (!this.isValidPhone(trimmedPhone.replace(/\s/g, ""))) {
        this.phoneError = "Please enter a valid 9-digit phone number.";
      } else {
        this.phoneError = "";
      }
    },

    /* Validate phone regex method */
    isValidPhone(phone) {
      const phoneRegex = /^[0-9]{9}$/; // 9-digit phone number
      return phoneRegex.test(phone);
    },

    /* Validate message method */
    validateMessage() {
      const trimmedValue = String(this.message || "").trim();

      if (trimmedValue.length === 0) {
        this.messageError = "Message is required.";
      } else {
        this.messageError = ""; // Clear the error if valid
      }
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* style for the full screen */

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

/* style for the left section */
.left-section {
  background-image: url("https://img.freepik.com/fotos-gratis/closeup-de-executiva-brainstorming-grayscale_53876-42806.jpg?t=st=1731621273~exp=1731624873~hmac=34c1777c92b3e51f8efb4f534e683326f13a9bd6e3e95905861d7bccf57ed0bd&w=996");
  background-size: cover;
  background-position: center;
  align-content: center;
}

/* style for the right section */
.right-section {
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  padding: 40px;
}

/* style text */
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

/* style for the form */
.form-container {
  max-width: 400px;
  width: 100%;
}

form {
  margin-top: 13%;
}

/*style for the message*/
.message-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/*style for the error message*/
.error-message {
  display: flex;
  justify-self: flex-start;
  font-size: 12px;
  color: red;
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>
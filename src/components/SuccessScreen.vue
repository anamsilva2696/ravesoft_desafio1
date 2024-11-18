<template>
  <div class="container">
    <i class="bi bi-check-circle"></i>
    <h1>Submitted</h1>
    <p>Thanks for your interest!</p>
    <FormButton :title="'Go Back'" @click="goToSuccess" />
  </div>
</template>

<script>
import FormButton from './form/buttons/FormButton.vue';

export default {
  name: "SuccessScreen",
  components: {
    FormButton
  },
  methods: {
    goToSuccess() {
      this.$router.push("/home"); 
    },
  }
};
</script>

<style scoped>
/* Reset global styles */
html, body {
  margin: 0;
  padding: 0;
  height: 100%; /* Ensure no extra space outside the viewport */
  overflow: hidden; /* Prevent scrolling */
}

/* Fullscreen container */
.container {
  position: absolute; /* Use absolute positioning for precise alignment */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center;     /* Center horizontally */
  background-color: #f9f9f9; /* Optional background color */
  text-align: center; /* Center text */
  box-sizing: border-box; /* Ensure consistent box model */
}

/* Styling for the icon */
.container i {
  font-size: 100px;
  color: #01b681; /* Bootstrap blue */
  margin-bottom: 20px; /* Space below the icon */
}

/* Styling for the heading */
.container h1 {
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px; /* Space below the heading */
}

/* Styling for the paragraph */
.container p {
  margin: 0;
  font-size: 1.2rem;
  color: #666;
}

</style>

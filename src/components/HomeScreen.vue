<template>
  <div id="app" class="container">
      <div class="left-section">
        <h1>LEFT</h1>
      </div>
      <div class="right-section">
        <h1>{{ msg }}</h1>
        <form>
          <FormInput class="form_input" label="Name" type="text" id="name"/>
          <FormInput class="form_input" label="Email" type="email" id="email"/>
        </form>
        <div class="next-button">
          <button>Next</button>
        </div>
      </div>
  </div>
</template>

<script>
import FormInput from './FormInput.vue';

export default {
  name: 'HomeScreen',
  components: {
    FormInput
  },
  props: {
    msg: String
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
  background-color: #42b983;
}

button {
  border: 0;
  background: none;
  color: white;
}
.next-button {
  width: 25%;
  background-color: #42b983;
  height: 50px;
  margin-top: 3%;
  align-content: center;
  border-radius: 5px;
}
</style>

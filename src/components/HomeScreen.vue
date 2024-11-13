<template>
  <div class="container">
    <div class="full-width-div">
      <h1>{{ msg }}</h1>
      <form>
        <FormInput class="form_input" label="Name" type="text" id="name"/>
        <FormInput class="form_input" label="Email" type="email" id="email"/>
      </form>
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center; 
}
.full-width-div {
  width: 100%; 
  padding: 30px;
  box-sizing: border-box;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.form_input {
  justify-self: center;
  width: 50%;
}
</style>

<template>
    <div class="next-button">
        <button type="submit">{{ title }}</button>
    </div>

</template>
<script>

export default {
  name: 'FormButton',
  props: {
    title: {
        type: String,
        required: true
    }
  }
};
</script>

<style scoped>
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
</style>

<template>
    <button @click="emitPreviousStep()"> ⟵ Previous Step</button>
</template>
<script>

export default {
  methods: {
    emitPreviousStep() {
      // Emit an event named `next-step` to the parent component
      this.$emit('previous-step');
    },
  },
};
</script>

<style scoped>
button {
  border: 0;
  background-color: transparent;
  color: gray;
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
  font-size: small;
  text-transform: uppercase;
  cursor: pointer;
}

</style>

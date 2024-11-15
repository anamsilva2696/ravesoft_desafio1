<template>
    <div>
      <label>
        <input
          type="radio"
          :value="value"
          :checked="modelValue === value"
          class="radio-button"
          @change="emitUpdate"
        />
        {{ value }}
      </label>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RadioButton',
    props: {
      value: {
        type: String,
        required: true
      },
      modelValue: {
        type: String,
        required: true
      }
    },
    methods: {
      emitUpdate() {
        // Emit the selected value back to the parent
        this.$emit('update:modelValue', this.value);
      }
    }
  };
  </script>

<style scoped> 

.radio-button {
    width: 20px;
    height: 20px;
    accent-color: green;
    vertical-align: middle;
}

.radio-button label {
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-left: 16px;
}

.radio-button input[type="radio"] {
  margin-right: 10px; /* Space between the radio button and the label */
}
</style>
  
  
<template>
    <div>
      <label class="radio-label">
        <input
          type="radio"
          :value="value"
          :checked="modelValue === value"
          class="radio-button"
          @change="emitUpdate"
        />
        <span class="label-text">{{ value }}</span>
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
  appearance: none; /* Remove default styles */
  width: 20px;
  height: 20px;
  border: 1px solid #ccc; /* Gray border */
  border-radius: 50%; /* Make it circular */
  outline: none;
  cursor: pointer;
  position: relative;
  margin-right: 10px;
  background-color: white; /* Ensure the background is white */
}

/* Style for when the radio button is selected */
.radio-button:checked {
  border-color: #01b681; /* Make the border green */
}

/* Add the green dot inside the radio button */
.radio-button:checked::after {
  content: '';
  width: 10px;
  height: 10px;
  background-color: #01b681; /* Green dot in the center */
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Align the label text with the radio button */
.radio-label {
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
}

.label-text {
  color: gray;
  margin-left: 10px;
}
</style>

  
  
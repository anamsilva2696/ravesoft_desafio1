<template>
<label class="terms-checkbox">
    <input 
    class="check-box" type="checkbox" 
    :checked="modelValue" 
    @change="updateValue"
    />
    I agree to the <a href="#" target="_blank">Terms and Conditions</a>
</label>
</template>

<script>
  export default {
    name: "CheckBox",
    data() {
      return {
        isModalVisible: false,
      }
    },
    props: {
      modelValue: { type: Boolean, default: false }, // v-model binding
    },
    methods: {
      updateValue(event) {
        this.$emit("update:modelValue", event.target.checked); // Emit the updated value
      },
      
    },
  };
</script>

<style scoped>
.check-box {
  appearance: none; /* Remove the default styling */
  width: 18px;
  height: 18px;
  border: 2px solid #ccc;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-right: 10px;
}

/* When the checkbox is checked */
.check-box:checked {
  background-color: #01b681; /* Change the checkmark background color */
  border-color: #01b681; /* Match the border with the checkmark */
}

.check-box:checked::after {
  content: "";
  position: absolute;
  left: 5px;
  width: 5px;
  height: 10px;
  border: solid white; /* Change the color of the checkmark */
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.terms-checkbox {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-top: 20px;
  color: gray;
}
</style>
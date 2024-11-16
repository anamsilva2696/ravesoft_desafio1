<template>
<label class="terms-checkbox">
    <input 
    class="check-box" type="checkbox" 
    :value="modelValue" />
    I agree to the <a href="#" target="_blank">Terms and Conditions</a>
</label>
</template>

<script>
  export default {
    name: "CheckBox",
    props: {
      modelValue: { type: String, default: "" }, // v-model binding
    }
  };
</script>

<style scoped>
    .check-box {
    accent-color: green;
    }

    .terms-checkbox {
    margin-top: 20px;
    }
</style>
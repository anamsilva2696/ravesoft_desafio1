<template>
  <div :class="formInput">
    <input
      :type="type"
      :id="id"
      :placeholder="label"
      :value="modelValue"
      @focus="changeDivColor"
      @blur="resetDivColor"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
  
<script>
  export default {
    name: "FormInput",
    props: {
      label: { type: String, required: true }, // Label for the input
      type: { type: String, default: "text" }, // Input type
      id: { type: String, required: true }, // Unique ID
      modelValue: { type: String, default: "" }, // v-model binding
    },
    data() {
      return {
        focused: false, // Track if the input is focused
      };
    },
    computed: {
      formInput() {
        return {
          focused: this.focused,
        };
      },
    },
    methods: {
      changeDivColor() {
        this.focused = true;
      },
      resetDivColor() {
        this.focused = false;
      },
    },
  };
</script>

<style scoped>
input {
    width: 100%;
    height: 100%;
    padding: 8px;
    border: none;
    box-sizing: border-box;
}

input:focus {
    border: none;
    outline: none;
}

div {
    width: 100%;  
    height: 7vh; 
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1px;
    display: flex;
    margin-top: 5px;
    transition: border-color 0.3s ease;
}

/* Change border color when focused */
div.focused {
  border-color: #4caf50; 
}

</style>

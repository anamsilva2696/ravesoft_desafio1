<template>
    <textarea
        :id="id"
        :value="modelValue"
        :placeholder="label"
        class="message-input"
        @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
</template>

<script>
  export default {
    name: "FormTextArea",
    props: {
      label: { type: String, required: true }, // Label for the input
      id: { type: String, required: true }, // Unique ID
      modelValue: { type: String, default: "" }, // v-model binding
    }
};
</script>

<style scoped>
.message-input {
    width: 100%; /* Full width */
    height: 150px; /* Height suitable for a message */
    padding: 10px; /* Padding inside the text area */
    border: 1px solid #ddd; /* Border color and style */
    border-radius: 4px; /* Rounded corners */
    font-size: 16px; /* Font size for readability */
    resize: vertical; /* Allow vertical resizing only */
    outline: none; /* Remove outline on focus */
    transition: border-color 0.3s ease; /* Smooth border transition on focus */
    margin-top: 20px;
  }
  
  /* Placeholder styling */
  .message-input::placeholder {
    color: #aaa; /* Placeholder color */
  }
  
  /* Focus state for textarea */
  .message-input:focus {
    border-color: #01b681; /* Change border color on focus */
  }
  
</style>
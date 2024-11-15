<template>
  <div class="custom-selecter">
    <h3>{{ label }}</h3>
    <div class="options-container">
      <RadioButton
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :modelValue="selectedOption"
        @update:modelValue="updateSelectedOption"
      />
    </div>
  </div>
</template>

<script>
import RadioButton from './RadioButton.vue';

export default {
  name: 'CustomSelecter',
  components: {
    RadioButton
  },
  props: {
    label: {
      type: String,
      default: 'Select an Option'
    },
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    }
  },
  computed: {
    selectedOption: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    }
  },
  methods: {
    updateSelectedOption(value) {
      this.selectedOption = value;
    }
  }
};
</script>

<style scoped>
.custom-selecter {
  text-align: left; /* Align everything inside this container to the left */
}

.options-container {
  display: flex;
  flex-direction: column; /* Arrange items vertically */
  gap: 10px; /* Space between radio options */
}
</style>
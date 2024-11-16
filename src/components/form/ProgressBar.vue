<template>
    <div class="progress">
        <span>{{ currentStep }} OF {{ totalSteps }} COMPLETED</span>
        <div class="progress-bar">
        <div class="progress-fill" :style="{ width: percentage + '%' }"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    currentStep: {
      type: Number,
      required: true
    },
    totalSteps: {
      type: Number,
      required: true
    }
  },
  computed: {
    percentage() {
      return (this.currentStep / this.totalSteps) * 100;
    }
  }
};
</script>

<style scoped>
.progress {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 20px;
}

.progress-bar {
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  height: 5px;
  width: 100%;
  margin-top: 5px;
}

.progress-fill {
  background-color: #01b681;
  height: 100%;
  transition: all .5s linear;
}
</style>

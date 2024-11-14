<template>
    <div class="progress">
        <span>1 OF 5 COMPLETED</span>
        <div class="progress-bar">
        <div class="progress-fill" style="width: 20%;"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProgressBar'
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
  background-color: #4caf50;
  height: 100%;
}
</style>

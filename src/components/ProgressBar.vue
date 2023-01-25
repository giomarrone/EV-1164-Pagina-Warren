<template>
  <div class="progress-bar">
    <div v-for="index in steps" :key="index" class="bar">
      <div :class="index <= currentStep ? 'dot-active' : 'dot-inactive'"></div>
      <div v-if="index !== steps" class="line"></div>
      <!-- <div class="dot-inactive"></div>
        <div class="line"></div>
        <div class="dot-inactive"></div> -->
        

        <!-- Telas do formulário com view (numa tela só, sem usar rotas) -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",

  props: {
    steps: {
      type: Number,
      required: true,
    },
    currentStep: {
      type: Number,
      required: false,
    },
  },
};
</script>

<style>
.progress-bar {
  display: flex;
  height: fit-content;
}

.dot-active {
  width: 1rem;
  height: 1rem;
  background-color: var(--brand-magenta);
  border-radius: 100%;
  border: 2px solid white;
  outline: 1px solid var(--brand-magenta);
}
.dot-inactive {
  width: 1rem;
  height: 1rem;
  background-color: transparent;
  border-radius: 100%;
  border: 1px solid white;
  outline: 1px solid var(--brand-magenta);
}
.line {
  height: 1px;
  width: 14rem;
  background-color: var(--brand-magenta);
  align-self: center;
}

.bar {
    display: flex;
}
</style>

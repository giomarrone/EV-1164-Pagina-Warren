<template>
  <div>
    <header>
      <router-link to="/">
        <ph-arrow-left :size="24" />
      </router-link>
      <h3>FORMULÁRIO</h3>
    </header>
    <main>
      <div class="form-area">
        <div class="form-wrapper">
          <ProgressBar :steps="3" :currentStep="currentStep"></ProgressBar>
          <div class="teste" v-if="currentStep === 1">
            <FormStepOne @nextStep="nextStep" />
          </div>
          <div class="teste" v-if="currentStep === 2">
            <FormStepTwo @nextStep="nextStep" />
          </div>
        </div>
      </div>
      <div class="image"></div>
    </main>
  </div>
</template>

<script>
import { PhArrowLeft } from "phosphor-vue";
import ProgressBar from "../components/ProgressBar.vue";
import FormStepOne from "../views/FormStepOne.vue";
import FormStepTwo from '../views/FormStepTwo.vue'

export default {
  name: "NewUser",

  data() {
    return {
      currentStep: 1,
    };
  },

  components: {
    PhArrowLeft,
    ProgressBar,
    FormStepOne,
    FormStepTwo
  },

  methods: {
    nextStep() {
      this.currentStep = this.currentStep + 1;
    },
  },
};
</script>

<style scoped>
header {
  background-color: var(--brand-magenta);
  color: white;
  display: flex;
  height: 4rem;
  align-items: center;
  position: relative;
  z-index: 10;
}
header h3,
header svg {
  color: white;
}
header h3 {
  font-size: 1.2rem;
  margin: 0 auto;
}

header svg {
  position: absolute;
  top: 50%;
  left: 4rem;
  transform: translate(0%, -50%);
}

main {
  background-color: antiquewhite;
  display: flex;
  position: relative;
}

.form-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65%;
  height: 100%;
  box-shadow: 0px 0px 20px black;
  z-index: 8;
}

.form-wrapper {
  width: 60%;
  display: flex;
  gap: 3rem;
  padding: 4rem 0;
  flex-direction: column;
  align-items: center;
}

.image {
  background-color: aqua;
  width: 35%;
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
}

.teste {
  height: 100%;
  background-color: antiquewhite;
}
</style>

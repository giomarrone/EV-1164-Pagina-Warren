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
          <div v-if="currentStep === 1">
            <FormStepOne @nextStep="nextStep" />
          </div>
          <div v-if="currentStep === 2">
            <FormStepTwo @nextStep="nextStep" @returnToStart="returnToStart" />
          </div>
          <div v-if="currentStep === 3">
            <FormComplete />
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
import FormComplete from '../views/FormComplete.vue'

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
    FormStepTwo,
    FormComplete
  },

  methods: {
    nextStep() {
      this.currentStep += 1;
    },
    returnToStart() {
      this.currentStep = 1
    }
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
  position: sticky;
  top: 0;
  width: 100%;
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
  display: flex;
}

.form-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65%;
  padding: 8rem 0;
}

.form-wrapper {
  width: 60%;
  display: flex;
  gap: 3rem;
  /* padding: 4rem 0; */
  flex-direction: column;
  align-items: center;
  /* margin-top: 5rem; */
}

.image {
  background-image: url('../assets/bg-register.png');
  object-fit: cover;
  background-size: cover;
  background-position: 35%;
  transform: scaleX(-1);
  background-repeat: no-repeat;
  position: fixed;
  height: 100%;
  right: 0;
  width: 35%;
}


</style>

<template>
  <div>
    <header>
      <router-link to="/">
        <ph-arrow-left :size="24" />
      </router-link>
      <h3>FORMULÁRIO</h3>
    </header>
    <body>
        <div class="form-area">
            <ProgressBar :steps="3" :currentStep="1"></ProgressBar>
        </div>
        <div class="image">
        </div>
    </body>
  </div>
</template>

<script>
import { PhArrowLeft } from "phosphor-vue";
import ProgressBar from '../components/ProgressBar.vue'

export default {
  name: "NewUser",

  components: {
    PhArrowLeft,
    ProgressBar
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

body {
    display: flex;
    position: absolute;
    width: 100%;
    height: calc(100vh - 4rem);
    bottom: 0;
}

.form-area {
    display: flex;
    justify-content: center;
    padding: 4rem 0;
    width: 65%;
    height: 100%;
}

.image {
    width: 35%;
    background-color: blueviolet;
    background-image: url(../assets/bg-register.png);
    background-size: cover;
    background-position: 30%;
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
}


</style>

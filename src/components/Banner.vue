<template>
  <section class="banner">
    <div class="wrapper">
      <div class="banner-text">
        <div class="welcoming">
          <h1>Invista em  <span>viver</span>.</h1>
          <p class="dark-txt">Investir toma tempo, mas não precisa ser o seu.</p>
        </div>
        <div>
          <ButtonMagenta text="Crie sua conta" linkto="https://warren.com.br/app/#/signup"></ButtonMagenta>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonMagenta from './ButtonMagenta.vue';
export default {
  name: "HomeBanner",

  components: {
    ButtonMagenta
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
  background-image: url(../assets/bg-mountain.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 90%;
  height: 55rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.banner-text {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>

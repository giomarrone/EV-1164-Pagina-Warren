<template>
  <section class="footer-banner">
    <div class="wrapper">
      <div class="second-banner-content">
        <div class="second-banner-text left-to-right">
          <h2>Investir é sobre você.</h2>
          <p>Comece a investir em poucos minutos, descomplique.</p>
        </div>
        <div>
          <ButtonBlack
            size="size2-rounded"
            text="Abra sua conta"
            linkto="https://warren.com.br/app/#/signup"
          ></ButtonBlack>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ButtonBlack from "./ButtonBlack.vue";
export default {
  name: "InvestAboutYouBanner",
  components: {
    ButtonBlack,
  },
};
</script>
<style scoped>
.footer-banner {
  background-color: var(--brand-magenta);
  color: white;
  height: 28rem;
  display: flex;
  align-items: center;
}

h2 {
  font-size: 4.25rem;
}

p {
  font-size: 1.8rem;
  color: white;
}

h2,
h4 {
  color: white;
}

.second-banner-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

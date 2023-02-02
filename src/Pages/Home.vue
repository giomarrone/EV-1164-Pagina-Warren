<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeBanner></HomeBanner>
    <HomeCards></HomeCards>
    <SecondBanner></SecondBanner>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import HomeHeader from "../components/Header.vue";
import HomeBanner from "../components/Banner.vue";
import HomeCards from "@/components/Cards.vue";
import SecondBanner from "@/components/SecondBanner.vue";
import HomeFooter from "@/components/Footer.vue";

export default {
  name: "HomePage",

  components: {
    HomeHeader,
    HomeBanner,
    HomeCards,
    SecondBanner,
    HomeFooter
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

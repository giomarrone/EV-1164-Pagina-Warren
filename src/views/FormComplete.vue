<template>
  <div class="container">
    <ph-check-circle :size="90" />
    <h1>Cadastro finalizado</h1>
    <p>Caso deseje retornar à página inicial clique no botão abaixo.</p>
    <router-link class="button" to="/">
      <ButtonBlack text="Continuar" />
    </router-link>
  </div>
</template>
<script>
import { PhCheckCircle } from "phosphor-vue";
import ButtonBlack from "@/components/ButtonBlack.vue";

export default {
  name: "FormComplete",

  components: {
    PhCheckCircle,
    ButtonBlack,
  },
};
</script>

<style scoped>
.container {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  gap: 0.5rem;
  padding-top: 5rem;
}

svg {
  color: var(--green-check);
}

p {
  color: var(--paragraph);
}

.button {
    margin-top: 1rem;
}
</style>

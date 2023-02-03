<template>
  <div class="screen">
    <main>
      <header>
        <h4>Confirmar informações de cadastro</h4>
        <button @click="this.closeModal">
          <font-awesome-icon icon="fa-solid fa-x" class="fa-lg" />
        </button>
      </header>
      <div class="line"></div>
      <div class="wrapper">
        <p>Verifique se os dados informados no formulário estão corretos.</p>
        <button class="tab active">Contato</button>
        <button class="tab inactive">Pessoal</button>
        <div v-if="modalPage === 1">
          <ContactInfoCard></ContactInfoCard>
        </div>
      </div>
      <div class="line"></div>
      <footer>
        <button class="cancel">Cancelar</button>
        <button class="continue">Continuar</button>
      </footer>
    </main>
  </div>
</template>

<script>
import ContactInfoCard from "@/views/Contact.vue";
export default {
  name: "FormModal",

  data() {
    return {
      modalPage: 1,
    };
  },

  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },

  components: {
    ContactInfoCard,
  },
};
</script>

<style scoped>
.screen {
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
main {
  background-color: white;
  width: fit-content;
  height: fit-content;
  border: 0;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
}

header {
  padding-block: 2rem;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  justify-content: center;
}

header button {
  position: absolute;
  right: 3rem;
  line-height: 0;
  background-color: transparent;
  border: none;
}

.line {
  height: 1px;
  width: 100%;
  background-color: lightgray;
}
h4 {
  margin: 0;
  font-size: 1.25rem;
}
p {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.wrapper {
  margin-block: 2.5rem;
}
.active {
  border: 1px solid var(--title);
  background-color: var(--title);
  font-weight: 400;
  color: white;
  transition: 0.2s;
  border-radius: 5rem;
  padding: 0.5rem 1rem;
}
.inactive {
  border: 1px solid lightgray;
  background-color: transparent;
  font-weight: 400;
  color: var(--paragraph);
  transition: 0.2s;
  border-radius: 5rem;
  padding: 0.5rem 1rem;
}

.tab + .tab {
  margin-left: 1rem;
}

footer {
  margin-top: 2rem;
}

.cancel {
  background-color: transparent;
  color: var(--brand-magenta);
  padding: 2rem 3rem;
  border: 0;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
  font-weight: 700;
}

.cancel:hover {
  background-color: var(--brand-magenta-light);
}

.continue {
  background-color: var(--brand-magenta);
  color: white;
  padding: 2rem 3rem;
  border: 0;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
  font-weight: 700;
}

.continue:hover {
  background-color: var(--brand-magenta-hover);
}

footer button + button {
  margin-left: 2rem;
}
</style>

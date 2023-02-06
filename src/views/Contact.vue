<template>
  <div class="modal">
    <header>
      <h2>Dados de contato</h2>
      <div class="line"></div>
    </header>
    <div class="info-area">
      <div class="slot">
        <h3>CPF</h3>
        <p>{{ this.data.cpf }}</p>
      </div>
      <div class="slot">
        <h3>Celular</h3>
        <p>{{  this.data.phone }}</p>
      </div>
      <div class="slot">
        <h3>Nome</h3>
        <p>{{ this.data.name }}</p>
      </div>
      <div class="slot">
        <h3>Contato</h3>
        <p>{{ this.data.contact }}</p>
      </div>
      <div class="slot">
        <h3>Nascimento</h3>
        <p>{{ this.data.birthday }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactInfoCard",
  props: {
    data: {
      type: Object,
      required: true
    },
  },
};
</script>

<style scoped>
.modal {
  margin-top: 1rem;
  position: relative;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  padding: 3rem;
}
header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.line {
  width: 100%;
  background-color: lightgray;
}

h2 {
  font-size: 2rem;
}

.info-area {
  display: flex;
  flex-wrap: wrap;
}

.slot {
  width: 50%;
}

h3 {
  font-size: 1.25rem;
  color: var(--paragraph);
  font-weight: 400;
}

p {
  font-size: 1.25rem;
  color: var(--title);
  font-weight: 700;
}
</style>

<template>
  <div class="modal">
    <header>
      <h2>Dados de contato</h2>
      <div class="line"></div>
    </header>
    <div class="info-area">
        <div class="slot">
            <h3>CPF</h3>
            <p>XXX.XXX.XXX-XX</p>
        </div>
        <div class="slot">
            <h3>Celular</h3>
            <p>(XX) XXXXX-XXXX</p>
        </div>
        <div class="slot">
            <h3>Nome</h3>
            <p>Giovanne Marrone</p>
        </div>
        <div class="slot">
            <h3>Contato</h3>
            <p>Whatsapp</p>
        </div>
        <div class="slot">
            <h3>Nascimento</h3>
            <p>14/ABR/2000</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactInfoCard",
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

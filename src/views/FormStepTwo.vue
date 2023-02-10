<template>
  <div class="container">
    <form>
      <h3>Dados pessoais</h3>
      <p>
        Essas informações são necessárias para que você tenha a melhor
        experiência conosco.
      </p>

      <div class="columns">
        <div class="input-area">
          <label class="form-label" for="country">País onde reside</label>
          <input type="text" v-model="country"/>
        </div>
        <div class="input-area">
          <label class="form-label" for="city">Cidade</label>
          <input type="text" v-model="city"/>
        </div>
        <div class="input-area">
          <label class="form-label" for="phone-input">Cep</label>
          <input
            maxlength="15"
            type="text"
            v-model="cep"
            v-mask="'#####-###'"
          />
        </div>
        <div class="input-area">
          <label class="form-label" for="address">Endereço</label>
          <input type="text" v-model="address"/>
        </div>
      </div>
      <div class="number-input-area">
        <label class="form-label" for="number-input">Número</label>
        <input type="text" id="number-input" v-model="number"/>
      </div>
      <button
        class="submit-btn"
        id="submit-btn"
        type="button"
        @click="verifyForm"
      >
        Continuar
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormStepTwo",

  emits: ["nextStep"],

  data() {
    return {
      country: "",
      address: "",
      city: "",
      number: "",
      cep: "",
      userPersonalInfo: []
    };
  },
  methods: {
    verifyForm() {
      if(!this.country || this.country.length == 0) {
        alert("Informe o país em que você reside.")
      } else if (!this.city || this.city.length == 0) {
        alert("Informe a cidade em que você reside.")
      } else if (!this.cep || this.cep.length == 0) {
        alert("Informe o CEP da sua residência.")
      } else if (this.cep.length < 9) {
        alert("CEP incompleto.")
      } else if (!this.address|| this.address.length == 0) {
        alert("Informe o seu endereço.")
      } else if (!this.number|| this.number.length == 0) {
        alert("Informe o número da sua residência.")
      } else this.goToNextStep()
    },

    goToNextStep() {
      this.userPersonalInfo.country = this.country
      this.userPersonalInfo.address = this.address
      this.userPersonalInfo.city = this.city
      this.userPersonalInfo.number = this.number
      this.userPersonalInfo.cep = this.cep
      console.log(this.userPersonalInfo)

      this.$emit("nextStep", this.userPersonalInfo);
    }
  },
};
</script>

<style>
.modal {
  position: absolute;
  z-index: 11;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
h1 {
  font-size: 4rem;
}
h3 {
  font-size: 1.8rem;
  margin-top: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  margin-top: 1rem;
}

.form-txt {
  font-weight: 700;
  font-size: 1.6rem;
}
.columns {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 2rem;
}
.input-area,
.number-input-area {
  position: relative;
  width: 48%;
}
.number-input-area {
  width: 100%;
}
.input-area input,
.number-input-area input {
  border: 2px solid black;
  border-radius: 4px;
  position: relative;
  line-height: 1.5;
  height: 4rem;
  width: 100%;
  padding-inline: 1rem;
}

.form-label {
  position: absolute;
  top: -14%;
  font-size: 1.2rem;
  z-index: 1;
  left: 1rem;
  background-color: white;
  padding: 0 5px;
}

.form-txt {
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--title);
}

.contact-options {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.contact-option {
  display: flex;
  align-items: center;
  gap: 1rem;
  height: fit-content;
  padding: 0;
}
.contact-option input {
  border-radius: 4px;
  position: relative;
}
.checkbox-label {
  font-size: 1.6rem;
}

p {
  font-size: 1.6rem;
  color: var(--title);
}

.submit-btn {
  padding: 1rem 2.5rem;
  background-color: var(--brand-magenta);
  border: none;
  width: fit-content;
  border-radius: 0.5rem;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
}

.submit-btn:hover {
  transition: 0.2s;
  background-color: var(--brand-magenta-hover);
}
</style>

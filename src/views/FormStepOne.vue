<template>
  <div class="container">
    <h1>Seja bem-vindo</h1>
    <form>
      <h3>Dados de contato</h3>
      <p>
        Por favor, informe seus dados de contato para que possamos nos comunicar
        com você.
      </p>
      <div class="name-input-area">
        <label class="form-label" for="name-input">Nome completo</label>
        <input type="text" id="name-input" />
      </div>
      <div class="columns">
        <div class="input-area">
          <label class="form-label" for="contact-input">E-mail</label>
          <input type="text" class="input-with-icon" />
        </div>
        <div class="input-area">
          <label class="form-label" for="contact-input">Confirmar e-mail</label>
          <input type="text" class="input-with-icon" />
        </div>
        <div class="input-area">
          <label class="form-label" for="cpf-input">CPF</label>
          <input
            maxlength="14"
            type="text"
            v-model="cpf"
            v-mask="'###.###.###-##'"
          />
        </div>
        <div class="input-area">
          <label class="form-label" for="phone-input">Celular</label>
          <input
            maxlength="15"
            type="text"
            v-model="phone"
            v-mask="'(##) #####-####'"
          />
        </div>
        <div class="input-area">
          <label class="form-label" for="birthday-input"
            >Data de nascimento</label
          >
          <input
            maxlength="10"
            type="text"
            v-model="birthday"
            v-mask="'##/##/##'"
            class="input-with-icon"
          />
        </div>
      </div>
      <p class="form-txt">
        Falta pouco! Só precisamos saber como podemos falar com você.
      </p>
      <p class="form-txt">Por onde você gostaria que entremos em contato?</p>
      <div class="contact-options">
        <div class="contact-option">
          <input type="checkbox" id="email-sms" name="email-sms" />
          <label class="checkbox-label" for="email-sms">E-mail e SMS</label>
        </div>
        <div class="contact-option">
          <input type="checkbox" id="whatsapp" name="whatsapp" />
          <label class="checkbox-label" for="whatsapp">WhatsApp</label>
        </div>
      </div>
      <p class="form-txt">
        Essas informações serão guardadas com segurança e utilizadas apenas para
        fina imperativos para que você tenha a melhor experiência com a Warren.
      </p>
      <button
        class="submit-btn"
        id="submit-btn"
        type="button"
        @click="goToNextStep()"
      >
        Continuar
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormStepOne",

  emits: ['nextStep'],

  data() {
    return {
      cpf: "",
      birthday: "",
      phone: "",
      email: "",
      confirmEemail: "",
    };
  },
  methods: {
    validadeForm() {
      const whatsappOpt = document.querySelector("#whatsapp");
      const emailsmsOpt = document.querySelector("#email-sms");
      if (whatsappOpt.checked === true && emailsmsOpt.checked === true) {
        this.contact = "E-mail, SMS e Whatsapp";
      } else if (
        whatsappOpt.checked === true &&
        emailsmsOpt.checked === false
      ) {
        this.contact = "Whatsapp";
      } else if (
        whatsappOpt.checked === false &&
        emailsmsOpt.checked === true
      ) {
        this.contact = "E-mail e SMS";
      }
      if (!this.userName) {
        alert("Preencha o campo de nome.");
      } else if (!this.cpf || this.cpf.length < 11) {
        alert("Informe o CPF completo do usuário.");
      } else if (!this.birthday || this.birthday.length < 6) {
        alert("Informe a data de nascimento do usuário.");
      } else if (!this.phone || this.phone.length < 11) {
        alert("Informe o número do telefone do usuário.");
      } else if (!this.email || this.email.length == 0) {
        alert("Informe o e-mail do usuário.");
      } else if (this.email !== this.confirmEemail) {
        alert("Os e-mails informados não são iguais.");
      } else if (
        whatsappOpt.checked === false &&
        emailsmsOpt.checked === false
      ) {
        alert("Selecione pelo menos uma opção de contato.");
      }
    },
    goToNextStep() {
      this.$emit('nextStep')
    },
  },
};
</script>

<style>
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
.name-input-area {
  position: relative;
  width: 48%;
}
.name-input-area {
  width: 100%;
}
.input-area input,
.name-input-area input {
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

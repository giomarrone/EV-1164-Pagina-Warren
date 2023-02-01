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
        <input v-model="contactInfo.name" type="text" id="name-input" />
      </div>
      <div class="columns">
        <div class="input-area">
          <label class="form-label" for="contact-input">E-mail</label>
          <ph-envelope class="input-icon" :size="26" />
          <input
            v-model="contactInfo.email"
            type="text"
            class="input-with-icon"
          />
        </div>
        <div class="input-area">
          <label class="form-label" for="contact-input">Confirmar e-mail</label>
          <ph-envelope class="input-icon" :size="26" />
          <input v-model="confirmEemail" type="text" class="input-with-icon" />
        </div>
        <div class="input-area">
          <label class="form-label" for="cpf-input">CPF</label>
          <input
            maxlength="14"
            type="text"
            v-model="contactInfo.cpf"
            v-mask="'###.###.###-##'"
          />
        </div>
        <div class="input-area">
          <label class="form-label" for="phone-input">Celular</label>
          <input
            maxlength="15"
            type="text"
            v-model="contactInfo.phone"
            v-mask="'(##) #####-####'"
          />
        </div>
        <div class="input-area">
          <label class="form-label" for="birthday-input"
            >Data de nascimento</label
          >
          <div class="input-icon">
            <input
              class="input-date"
              v-model="birthday"
              type="date"
              style="height: 26px"
              @change="formatBday"
              id="foo"
            />
            <ph-calendar-blank :size="26" />
          </div>
          <!-- // useEffect like
          // Interceptar a mudanca birthday-raw
          // muda o brithday
          //-----
          //onChange(e)
          // receber e.value -> e muda birthday -->
          <input
            maxlength="10"
            type="text"
            v-model="contactInfo.formattedBirthday"
            v-mask="'##/##/####'"
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
        @click="validadeForm()"
      >
        Continuar
      </button>
    </form>
  </div>
</template>

<script>
import { PhEnvelope, PhCalendarBlank } from "phosphor-vue";
export default {
  name: "FormStepOne",

  emits: ["nextStep"],

  data() {
    return {
      birthday: "",
      confirmEemail: "",
      contactInfo: [
        {
          name: "",
          cpf: "",
          phone: "",
          email: "",
          formattedBirthday: "",
          contact: ""
        },
      ],
    };
  },
  components: {
    PhEnvelope,
    PhCalendarBlank,
  },

  methods: {
    formatBday() {
      const input = this.birthday;
      const process = input.split("-");
      const year = process[0];
      const day = process[2];
      const month = process[1];
      const output = `${day}/${month}/${year}`;
      this.formattedBirthday = output;
      console.log(output);
    },
    goToNextStep() {
      this.$emit("nextStep");
    },
    validateCpf(cpf) {
      cpf = this.cpf;
      cpf = cpf.replace(/[^\d]+/g, "");
      if (cpf == "") {
        alert("Informe um número de CPF.");
        return false;
      }
      // Elimina CPFs invalidos conhecidos
      if (
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"
      ) {
        alert("CPF inválido.");
        return false;
      }
      // Valida primeiro: digito
      let add = 0;
      for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
      let rev = 11 - (add % 11);
      if (rev == 10 || rev == 11) rev = 0;
      if (rev != parseInt(cpf.charAt(9))) {
        alert("CPF inválido.");
        return false;
      }
      // Valida segundo digito:
      add = 0;
      for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
      rev = 11 - (add % 11);
      if (rev == 10 || rev == 11) rev = 0;
      if (rev != parseInt(cpf.charAt(10))) {
        alert("CPF inválido.");
        return false;
      }
      this.goToNextStep();
    },
    validadeForm() {
      const whatsappOpt = document.querySelector("#whatsapp");
      const emailsmsOpt = document.querySelector("#email-sms");

      if (whatsappOpt.checked === true && emailsmsOpt.checked === true) {
        this.contactInfo.contact = "E-mail, SMS e Whatsapp";
      } else if (
        whatsappOpt.checked === true &&
        emailsmsOpt.checked === false
      ) {
        this.contactInfo.contact = "Whatsapp";
      } else if (
        whatsappOpt.checked === false &&
        emailsmsOpt.checked === true
      ) {
        this.contactInfo.contact = "E-mail e SMS";
      }
      if (!this.contactInfo.name) {
        alert("Preencha o campo de nome.");
      } else if (!this.contactInfo.cpf || this.contactInfo.cpf.length < 11) {
        alert("Informe o CPF completo do usuário.");
      } else if (!this.birthday || this.birthday.length < 8) {
        alert("Informe a data de nascimento do usuário.");
      } else if (!this.contactInfo.phone || this.contactInfo.phone.length < 11) {
        alert("Informe o número do telefone do usuário.");
      } else if (!this.contactInfo.email || this.contactInfo.email.length == 0) {
        alert("Informe o e-mail do usuário.");
      } else if (this.contactInfo.email !== this.confirmEemail) {
        alert("Os e-mails informados não são iguais.");
      } else if (
        whatsappOpt.checked === false &&
        emailsmsOpt.checked === false
      ) {
        alert("Selecione pelo menos uma opção de contato.");
      } else this.validateCpf();
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

.input-icon {
  position: absolute;
  z-index: 2;
  top: 18%;
  left: 3%;
}

.input-area input.input-with-icon {
  padding-left: 4rem;
}

input[type="date"]::-webkit-datetime-edit {
  display: none;
  background-color: antiquewhite;
}
input[type="date"]::-webkit-calendar-picker-indicator {
  transform: scale(1);
  height: 26px;
  position: absolute;
  left: 0;
  width: 24px;
  padding: 0;
  top: 0;
  opacity: 0;
}
.input-area input[type="date"] {
  color: transparent;
  background-color: transparent;
  position: absolute;
  border: none;
}

.input-area input[type="date"]:focus {
  outline: transparent;
}
</style>

<template>
    <section id="cards" class="cards wrapper">
      <div class="frame">
        <img
          class="left-to-right"
          src="../assets/family-together.jpg"
          alt="Família unida rindo"
        />
        <div class="frame-text">
          <h2>Facilitamos para você investir em viver</h2>
          <p>
            Organize seu dinheiro com base em seus objetivos estabelecendo metas
            em carteiras personalidadas.
          </p>
          <p>
            Isso com total segurança e consultoria, afinal, com a Warren você
            pode acompanhar a evolução dos seus investimentos e consultar
            especialistas sempre que precisar.
          </p>
          <ButtonMagenta text="Comece agora" linkto="https://warren.com.br/app/#/signup"></ButtonMagenta>
        </div>
      </div>
      <div class="frame">
        <div class="frame-text">
          <h2>3 etapas para começar a investir</h2>
          <p>
            Investir é complicado, mas para você não precisa ser. Em apenas três
            passos você pode fazer seu dinheiro render.
          </p>
          <div class="line"></div>
          <p>
            Primeiro, aqui você descobrirá seu
            <span>perfil de investidor</span> ao responder algumas perguntas
            simples. Então, vamos definir um
            <span>ponto de partida</span> juntos para o seu investimento. Por
            fim, comece a investir e veja seu dinheiro render!
          </p>
          <ButtonMagenta text="Comece agora" linkto="https://warren.com.br/app/#/signup"></ButtonMagenta>
        </div>
        <img
          src="../assets/man-holding-glasses.jpg"
          alt="Homem sorrindo usando uma camisa de cor magenta"
          class="right-to-left"
        />
      </div>
    </section>
  </template>
  <script>
  import ButtonMagenta from './ButtonMagenta.vue';
  export default {
    name: "HomeCards",
    components: {
        ButtonMagenta
    }
  };
  </script>
  <style scoped>
    .cards {
    margin-top: 8rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    gap: 8rem;
  }

  .frame {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
  }

  .frame img {
    width: 50%;
    height: 55rem;
    object-fit: cover;
    object-position: 40%;
    border-radius: 1rem;
  }

  .frame-text {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 40%;
  }

  .frame:nth-child(2) img {
    object-position: 35%;
  }

  .frame:nth-child(2) .frame-text {
    text-align: right;
  }

  .frame:nth-child(2) .frame-text button {
    align-self: flex-end;
    margin-right: 3rem;
  }

  .line {
    height: 1px;
    align-self: flex-end;
    background-color: var(--brand-magenta);
  }
  </style>
  
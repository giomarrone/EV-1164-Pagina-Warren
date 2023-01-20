<template>
  <section class="footer">
    <div class="wrapper">
      <div class="footer-content">
        <div class="column">
          <h3>Sobre</h3>
          <ul>
            <li><a target="_blank" href="https://warren.com.br/sobre/">Sobre a Warren</a></li>
            <li><a target="_blank" href="https://warren.com.br/quanto-custa/">Quanto Custa</a></li>
            <li><a target="_blank" href="https://warren.com.br/magazine/">Warren Magazine</a></li>
            <li><a target="_blank" href="https://shop.warren.com.br/">Warren Shop</a></li>
            <li><a target="_blank" href="https://lp.warren.com.br/convide-amigos-e-ganhe-premios">Programa de Indicação</a></li>
          </ul>
        </div>
        <div class="column">
          <h3>Investir</h3>
          <ul>
            <li><a target="_blank" href="https://warren.com.br/app/#/signup">Abra sua conta</a></li>
            <li><a target="_blank" href="https://warren.com.br/business/">Warren Pro</a></li>
            <li><a target="_blank" href="https://warren.com.br/bolsa/">Bolsa</a></li>
            <li><a target="_blank" href="https://warren.com.br/carteiras/">Carteiras</a></li>
            <li><a target="_blank" href="https://warren.com.br/home-broker/">Home Broker</a></li>
            <li><a target="_blank" href="https://warren.com.br/app/#/previdencia">Previdência</a></li>
          </ul>
        </div>
        <div class="column">
          <h3>Aprender</h3>
          <ul>
            <li><a href="https://educacao.warren.com.br/?_gl=1%2a1wu82g3%2a_ga%2aMTQ2NTA3OTMxNC4xNjY5NjY0NzA1%2a_ga_DJ7ETNN20S%2aMTY3MDAwNjM1OS44LjEuMTY3MDAwNzM1Ny4zLjAuMA..&_ga=2.74475089.2126990085.1670000359-1465079314.1669664705">Warren Edu</a></li>
          </ul>
        </div>
        <div class="column">
          <h3>Fale Conosco</h3>
          <ul>
            <li><a target="_blank" href="https://faq.warren.com.br/hc/pt-br">Acesse nosso FAQ</a></li>
            <li><a target="_blank" href="mailto:meajuda@warren.com.br">E-mail de suporte</a></li>
            <li><a target="_blank" href="mailto:meajuda@warren.com.br">Acesse o chat</a></li>
            <li><a target="_blank" href="https://api.whatsapp.com/send?phone=555140420024">Whatsapp</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeFooter",
};
</script>

<style scoped>
.footer {
  padding: 4rem 0;
  background-color: #e7e7e7;
}

.footer-content {
  display: flex;
  justify-content: space-between;
}

.footer h3 {
  font-size: 2.4rem;
}

.footer a {
  text-decoration: none;
  color: var(--paragraph);
  font-size: 1.6rem;
  line-height: 1.5;
}

.footer a:hover {
  text-decoration: none;
  text-decoration: underline;
  color: var(--brand-magenta);
}

.footer li {
  transition: 0.2s;
}

.footer li:hover {
  transform: translate(10px);
  transition: 0.2s;
}

.footer ul {
  list-style: none;
  line-height: 2rem;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>

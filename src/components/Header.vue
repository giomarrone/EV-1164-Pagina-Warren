<template>
  <header>
    <div class="wrapper">
      <img
        src="../assets/header-logo.png"
        alt="Logotipo da Warren"
        class="logo"
      />
      <ul>
        <li>
          <a target="_blank" href="https://warren.com.br/sobre/">Sobre</a>
        </li>
        <div class="dropdown">
          <li><a href="#">Investir</a></li>
          <div class="dropdown-content">
            <a href="https://warren.com.br/app/#/signup">Abra sua conta</a>
          </div>
        </div>
        <li>
          <a target="_blank" href="https://warren.com.br/quanto-custa/"
            >Quanto custa</a
          >
        </li>
        <li>
          <a
            target="_blank"
            href="https://educacao.warren.com.br/?_gl=1%2a1wu82g3%2a_ga%2aMTQ2NTA3OTMxNC4xNjY5NjY0NzA1%2a_ga_DJ7ETNN20S%2aMTY3MDAwNjM1OS44LjEuMTY3MDAwNzM1Ny4zLjAuMA..&_ga=2.74475089.2126990085.1670000359-1465079314.1669664705"
            >Aprender</a
          >
        </li>
        <li>
          <a target="_blank" href="https://warren.com.br/magazine/">Magazine</a>
        </li>
      </ul>
      <router-link to="/register">
        <ButtonBlack
          text="Abra sua Conta"
        ></ButtonBlack>
      </router-link>
    </div>
  </header>
</template>

<script>
import ButtonBlack from "./ButtonBlack.vue";
export default {
  name: "HomeHeader",
  components: {
    ButtonBlack,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background-color: white;
  padding: 1.5rem;
  border-bottom: 2px solid black;
  z-index: 10;
}

header .wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
ul {
  list-style: none;
  display: flex;
}
ul li a {
  font-size: 1.6rem;
  color: var(--title);
  font-weight: 700;
  text-decoration: none;
  padding: 2.6rem 2rem;
  box-sizing: border-box;
  transition: background-color 0.2s, border-bottom 0.2s;
}

ul li a:hover {
  background-color: rgb(249, 249, 249);
  border-bottom: 2px solid var(--brand-magenta);
}
.logo {
  width: 10.5rem;
  filter: invert(100%);
}

.dropdown a {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--title);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  flex-direction: column;
  margin-left: -3rem;
  text-align: center;
  border-radius: 0 0 1rem 1rem;
  transition: 0.2s;
  margin-top: 0rem;
  z-index: 100;
}

.dropdown-content a {
  border-top: 2px solid transparent;
  padding: 2rem 0;
  font-size: 1.4rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
}

.dropdown-content a:hover {
  border-top: 2px solid var(--brand-magenta);
  transition: 0.2s;
  background-color: white;
  color: var(--title);
}

.dropdown-content a:last-child:hover {
  border-radius: 0 0 1rem 1rem;
}

.dropdown:hover .dropdown-content {
  display: block;
  transition: 0.2s;
  animation-name: dropdown-animation;
  animation-duration: 0.2s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

@keyframes dropdown-animation {
  0% {
    transform: translateY(0);
    display: none;
    opacity: 0;
  }
  100% {
    transform: translateY(2.555rem);
    display: block;
    opacity: 1;
  }
}
</style>

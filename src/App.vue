<template>
  <div id="app">
    <HomePage></HomePage>
  </div>
</template>

<script>
import HomePage from './Pages/Home.vue'
export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
:root {
  --brand-magenta: #e02b57;
  --brand-magenta-hover: #f84773;
  --brand-magenta-light: #fddfe8;
  --brand-magenta-dark: #c7264e;
  --paragraph: #7e7e7e;
  --title: #1e1e1e;
}

span{
  color: var(--brand-magenta);
  font-weight: 700;
}

.wrapper {
  width: 85%;
  margin: 0 auto;
}
button {
  cursor: pointer;
}

h1 {
  font-size: 4.8rem;
}

h2 {
  font-size: 3.2rem;
}

p {
  font-size: 1.8rem;
  line-height: 1.5;
}

h1, h2, h3, h4, .dark-txt {
  color: var(--title);
}

p {
  color: var(--paragraph);
}
</style>

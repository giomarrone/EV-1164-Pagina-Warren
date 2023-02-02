<template>
  <a target="_blank" :href="linkto">
    <button  class="button1" :class="size">{{ text }}</button>
  </a>
</template>
<script>
export default {
  name: "ButtonBlack",
  props: {
    linkto: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    size: {
      type: String,
      require: false,
    },
  },
};
</script>
<style scoped>
.button1 {
  width: fit-content;
  padding: 1rem 2rem;
  background-color: var(--title);
  border: 2px solid transparent;
  border-radius: 8px;
  color: white;
  font-weight: 700;
  transition: 0.2s;
  height: fit-content;
}

.button1:hover {
  transition: 0.2s;
  box-shadow: 5px 5px 0 rgb(196, 196, 196);
  border: 2px solid var(--title);
  color: var(--title);
  background-color: white;
}

.size2-rounded {
  padding: 1.5rem 4rem;
  border-radius: 4rem;
}
</style>

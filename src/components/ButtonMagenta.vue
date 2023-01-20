<template>
  <a target="_blank" :href=linkto>
    <button :id="id" class="button1">{{ text }}</button>
  </a>
</template>
<script>
export default {
  name: "ButtonMagenta",
  props: {
      linkto: {
        type: String,
        require: true
      },
      text: {
        type: String,
        require: true
      },
      id: {
        type: String,
        require: false
      }
    },
    methods: {
        checkId() {
            const btnId = document.getElementById(this.id)
            if(btnId == "squared") {
                btnId.classList.add(".squared")
            }
        }
    }
};
</script>
<style scoped>
  .button1 {
    width: fit-content;
    padding: 1rem 2rem;
    background-color: var(--brand-magenta);
    border: 2px solid transparent;
    border-radius: 5rem;
    color: white;
    font-weight: 700;
    transition: 0.2s;
    height: fit-content;
  }

  .button1:hover {
    transition: 0.2s;
    box-shadow: 5px 5px 0 var(--brand-magenta);
    background-color: var(--brand-magenta-hover);
  }
</style>

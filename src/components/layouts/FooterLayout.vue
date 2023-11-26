<script setup>
  import BrandsGithub from '@/components/images/BrandsGithub.vue';
  import BrandsLinkedin from '@/components/images/BrandsLinkedin.vue';
</script>

<template>
  <footer>
    <a href="https://www.linkedin.com/in/olivier-mignot-42351911b/" target="_blank"><BrandsLinkedin class="logo"/></a>
    <a href="https://github.com/Olipt-M" target="_blank"><BrandsGithub class="logo"/></a>
  </footer>
</template>

<style lang="scss" scoped>

  footer {
    padding: 6rem 0 3rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a:first-of-type {
    margin-right: 2rem;
  }

  .logo {
    height: 4rem;
    color: $color-text-light-2;
    border: 1px solid $color-text-light-2;
    border-radius: 10px;
    padding: 1rem;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 80px 19px rgba($color-background-button-hover, 0.75);
      transform: translate(2px, 2px);
    }
  } 
</style>

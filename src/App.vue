<template>
  <div class="main-container">
    <HeaderLayout/>
    <RouterView />
  </div>
</template>

<script setup>
  import { RouterView } from 'vue-router';
  import HeaderLayout from '@/components/layouts/HeaderLayout.vue';
</script>

<style lang="scss">
  body {
    background: $color-background-dark-1;
    color: $color-text-light-1;
    font-family: 'Nunito Sans', sans-serif;
  }

  h1, h2 {
    font-family: 'Bruno Ace', display;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
}
</style>

<style lang="scss" scoped>
  .main-container {
    padding: 2rem 4rem;
    max-width: 1200px;
    margin: auto;
  }
</style>

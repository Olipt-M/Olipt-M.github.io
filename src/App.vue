<template>
  <div class="main-container">
    <HeaderLayout class="headerLayout"/>
    <RouterView class="mainLayout"/>
    <FooterLayout class="footerLayout"/>
  </div>
</template>

<script setup>
  import { RouterView } from 'vue-router';
  import HeaderLayout from '@/components/layouts/HeaderLayout.vue';
  import FooterLayout from '@/components/layouts/FooterLayout.vue';
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
</style>

<style lang="scss" scoped>
  .main-container {
    padding: 2rem 4rem 0 4rem;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .headerLayout, .footerLayout {
    flex-shrink: 0;
  }

  .mainLayout {
    flex: 1 0 auto;
  }
</style>

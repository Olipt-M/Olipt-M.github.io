<template>
  <div class="container">
    <h1>Olivier Mignot</h1>
    <h2>Développeur web</h2>
    <p>
      
      <br>Décollez avec moi et découvrez mes projets !
    </p>
    <MainButton><RouterLink :to="{name: 'projects'}" class="link-to-projects">Décollage immédiat</RouterLink></MainButton>
  </div>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
  import MainButton from '@/components/buttons/MainButton.vue';
</script>

<style lang="scss" scoped>
  .link-to-projects {
    text-decoration: none;
    color: $color-text-light-1;
  }
</style>

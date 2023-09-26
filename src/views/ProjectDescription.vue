<template>
  <main class="container">
    Bonjour
  </main>
</template>

<script setup>
  import { useProjectsStore } from '@/stores/ProjectsStore.js';
  const projectsStore = useProjectsStore();
  const projects = projectsStore.getProjects;
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 5rem;
  }

  
</style>

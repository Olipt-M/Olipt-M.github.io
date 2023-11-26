<script setup>
  import { useProjectsStore } from '@/stores/ProjectsStore.js';
  const projectsStore = useProjectsStore();
  const projects = projectsStore.getProjects;
</script>

<template>
  <main class="container">
    Bonjour
  </main>
</template>

<style lang="scss" scoped>
  .container {
    margin-top: 5rem;
  }

  
</style>

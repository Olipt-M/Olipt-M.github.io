<script setup>
  import ProjectCard from '@/components/cards/ProjectCard.vue';
  import { useProjectsStore } from '@/stores/ProjectsStore.js';
  const projectsStore = useProjectsStore();

  const projects = projectsStore.getProjects;
</script>

<template>
  <main class="container">
    <div class="projects-container">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project"></ProjectCard>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .container {
    margin-top: 5rem;
  }

  .projects-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    @media screen and (max-width: $lg-breakpoint) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: $sm-breakpoint) {
      grid-template-columns: 1fr;
    }
  }
</style>

<template>
  <div class="container">
    <div class="projects-container">
      <ProjectCard v-for="(project, index) in projects" :key="index" :project="project"></ProjectCard>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import ProjectCard from '@/components/cards/ProjectCard.vue';
  const projects = ref([
    {
      title: 'Zoonder',
      picture: "",
      description: "",
      technologies:"Vue.js"
    },
    {
      title: 'VueFlix',
      picture: "",
      description: "",
      technologies:"Vue.js; SASS"
    }
  ]);


</script>

<style lang="scss" scoped>

</style>

<script setup>
  const props = defineProps({
    project: {
      type: Object,
      required: true
    }
  });
</script>

<template>
  <div class="container">
    <div class="card">
      <div class="image-container">
        <img :src="project.pictures[0]" :alt="project.title">
      </div>
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <p class="technologies">
        Technologies utilisées:
        <img v-for="(tech, index) in project.technologies" :key="index" :src="tech.logo" alt="tech.name" class="tech-logos">
      </p>
      <a :href="project.githubPage" target="_blank">Envie d'essayer ? Télécharger depuis Github</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    display: grid;
    place-items: center;
    background: $color-background-dark-1;
    border: 1px solid $color-text-light-1;
    border-radius: 10px;

    &:hover {
      box-shadow: 0px 0px 80px 19px rgba($color-background-button-hover, 0.75);
    }
  }

  .card {
    padding: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 100%;
    position: relative;
    border-radius: 10px;
    width: 100%;
  }

  img {
    height: 400px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }

  .image-container {
    position: relative;
  }

  h2, p, a {
    padding: 0 1rem;
  }

  a {
    margin: 2rem 0;
    text-decoration: none;
    color: $color-text-light-1;
    font-size: 1.6rem;
    font-weight: 600;
  }

  .technologies {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
  }

  .tech-logos {
    height: 3rem;
    width: auto;
  }
</style>
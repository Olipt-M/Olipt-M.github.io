<template>
  <div class="container">
    <div class="card">
      <div class="image-container">
        <img :src="project.picture" :alt="project.title">
      </div>
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <p>Technologies utilisées: {{ project.technologies }}</p>
      <MainButton class="button">Voir le projet</MainButton>
    </div>
  </div>
</template>

<script setup>
  import MainButton from '@/components/buttons/MainButton.vue';

  const props = defineProps({
    project: {
      type: Object,
      required: true
    }
  });
</script>

<style lang="scss" scoped>
  .container {
    display: grid;
    place-items: center;
    background: $color-background-dark-1;
    border: 1px solid $color-text-light-1;
    border-radius: 10px;

    &:hover {
      box-shadow: 0px 0px 80px 12px rgba($color-background-button-hover, 0.4);
    }
  }

  .card {
    padding: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 830px;
    position: relative;
    border-radius: 10px;
    width: 100%;
  }

  img {
    height: 450px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;

    &:hover {
      cursor: pointer;
    }
  }

  .image-container {
    position: relative;
  }

  h2, p {
    padding: 0 1rem;
  }

  .button {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
  }
</style>
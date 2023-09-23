<template>
  <div class="container">
    <div class="image-container">
      <img :src="project.picture" :alt="project.title">
    </div>
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>
    <p>{{ project.technologies }}</p>
    <MainButton class="button">Voir le projet</MainButton>
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
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background: $color-background-card;
    height: 500px;
    position: relative;
    border-radius: 10px;

    &:hover {
      scale: 1.01;
    }
  }

  img {
    height: 350px;
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

  .button {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
  }
</style>
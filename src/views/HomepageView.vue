<template>
  <div class="container flex">
    <div class="presentation-container flex">
      <div class="presentation">
        <h1>Olivier Mignot</h1>
        <h2>Développeur web</h2>
        <p>
          Bienvenue sur mon vaisseau !
          Après 10 ans d'une première vie professionnelle faite d'expériences variées, je pars vers de nouveaux horizons en tant que développeur web.
          <br>Embarquez avec moi et découvrez mes projets à travers ce portfolio !
        </p>
        <MainButton><RouterLink :to="{name: 'projects'}" class="link-to-projects">Décollage immédiat</RouterLink></MainButton>
      </div>
    </div>
    <div class="image-container flex">
      <div class="merged-picture">
        <img :src="Olivier" alt="Photo d'Olivier Mignot" class="picture-olivier">
        <img :src="Rocket" alt="Image de fusée" class="picture-rocket">
      </div>
    </div>
  </div>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
  import MainButton from '@/components/buttons/MainButton.vue';
  import Olivier from '@/components/images/olivier-removebg.png';
  import Rocket from '@/components/images/rocket-removebg.png';
</script>

<style lang="scss" scoped>
  .presentation-container, .image-container {
    width: 50%;
  }

  .presentation-container {
    align-items: center;
  }

  h1 {
    font-size: 3rem;
    margin: 0;
  }

  h2 {
    font-size: 2rem;
    margin: 1rem 0 0 0;
  }

  p {
    margin: 4rem 0;
  }

  .link-to-projects {
    text-decoration: none;
    color: $color-text-light-1;
  }

  .image-container {
    justify-content: center;
    align-items: center;
    height: 600px;

    .merged-picture {
      height: 100%;
      position: relative;

      .picture-rocket {
        z-index: 2;
        width : 500px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .picture-olivier {
        z-index: 1;
        width : 70px;
        position: absolute;
        top: 34%;
        left: 51%;
        transform: translate(-50%, -50%);
      }
    }
  }
</style>

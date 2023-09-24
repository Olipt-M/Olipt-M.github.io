<template>
  <main class="container">
    <div class="presentation-container">
      <div class="presentation">
        <h1>Olivier Mignot</h1>
        <h2>Développeur web</h2>
        <p>
          Bienvenue sur mon vaisseau !
          <br>Après 10 ans d'une première vie professionnelle faite d'expériences variées, je pars vers de nouveaux horizons en tant que développeur web.
          <br>Embarquez avec moi et découvrez mes projets à travers ce portfolio !
        </p>
        <MainButton><RouterLink :to="{name: 'projects'}" class="link-to-projects">Décollage immédiat</RouterLink></MainButton>
      </div>
    </div>
    <div class="image-container">
      <div class="merged-picture">
        <img :src="Olivier" alt="Photo d'Olivier Mignot" class="picture-olivier">
        <img :src="Rocket" alt="Image de fusée" class="picture-rocket">
      </div>
    </div>
  </main>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
  import MainButton from '@/components/buttons/MainButton.vue';
  import Olivier from '@/components/images/olivier-removebg.png';
  import Rocket from '@/components/images/rocket-removebg.png';
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 5rem;
  }
  .presentation-container, .image-container {
    width: 45%;

    @media screen and (max-width: $md-breakpoint) {
      width: 100%;
    }
  }

  .presentation-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    @media screen and (max-width: $md-breakpoint) {
      order: 2;
    }
  }

  h1 {
    font-size: 3.5rem;
    margin: 0;
  }

  h2 {
    font-size: 2.2rem;
    margin: 1rem 0 0 0;
  }

  p {
    margin: 4rem 0;
    font-size: 1.7rem;
    line-height: 1.5;
  }

  .link-to-projects {
    text-decoration: none;
    color: $color-text-light-1;
    font-size: 1.6rem;
  }

  .presentation {
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: $md-breakpoint) {
      h1, h2 {
        text-align: center;
      }
    }
  }

  .image-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 600px;

    @media screen and (max-width: $md-breakpoint) {
      order: 1;
    }

    .merged-picture {
      height: 100%;
      position: relative;
      animation: 1s ease-in-out infinite alternate staticFlight;

      @keyframes staticFlight {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(0, 5px);
        }
      }

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

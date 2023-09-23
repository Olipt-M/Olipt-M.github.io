<template>
  <header>
    <p v-if="windowWidth > $md-breakpoint"><RouterLink :to="{name: 'home'}" class="logo">Olivier Mignot</RouterLink></p>
    <p v-else><RouterLink :to="{name: 'home'}" class="logo">OM</RouterLink></p>
    
    <nav>
      <ul>
        <li><RouterLink :to="{name: 'home'}" class="nav-link">Accueil</RouterLink></li>
        <li><RouterLink :to="{name: 'projects'}" class="nav-link">Projets</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
  import { ref } from 'vue';

  const windowWidth = ref(window.innerWidth);
</script>

<style lang="scss" scoped>
  header {
    background: $color-background-dark-1;
    color: $color-text-light-1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    display: inline-block;

    &:not(:first-child) {
      margin-left: 2rem;
    }
  }

  .nav-link, .logo {
    color: $color-text-light-1;
    text-decoration: none;
    padding-bottom: 1rem;
  }

  p, nav {
    font-family: 'Bruno Ace', display;
  }

  p {
    font-size: 2.2rem;
    text-transform: uppercase;
    font-weight: bold;

    .logo {
      color: $color-text-light-2;

      &:hover {
        box-shadow: 0px 0px 80px 19px rgba($color-background-button-hover, 0.75);
        background-color: rgba($color-background-button-hover, 0.3);
      }
    }
  }

  .nav-link:hover {
    border-bottom: 2px solid $color-text-light-2;
  }
</style>

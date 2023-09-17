<template>
  <header>
    <p><RouterLink :to="{name: 'home'}" class="nav-link">Olivier Mignot</RouterLink></p>
    
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
</script>

<style lang="scss" scoped>
  header {
    background: $color-background-dark-1;
    color: $color-text-light-1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav, ul {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  li {
    list-style-type: none;
  }

  .nav-link {
    color: $color-text-light-1;
    text-decoration: none;
  }

  p, nav {
    font-family: 'Bruno Ace', display;
  }

  p {
    font-size: 2rem;
    text-transform: uppercase;
  }
</style>

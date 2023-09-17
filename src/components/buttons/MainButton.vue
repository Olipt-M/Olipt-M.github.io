<template>
  <button type="button"><slot/></button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  button {
    cursor: pointer;
    padding: 1.5rem;
    background: $color-background-button;
    color: $color-text-light-1;
    border: none;
    border-radius: 7px;
    font-family: 'Bruno Ace', display;
    font-size: 1.5rem;

    &:hover {
      background: $color-background-button-hover;
    }
  }
</style>

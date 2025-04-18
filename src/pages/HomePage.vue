<template>
  <div class="home-page">
    <h1>Welcome to the Home Page</h1>
    <p>This is a simple home page component.</p>
    <BaseButton>Click Me!</BaseButton>
    <BaseButton disabled>Disabled Button</BaseButton>
  </div>
</template>

<script>
import BaseButton from '../components/baseButton.vue'

export default {
  name: 'HomePage',
  components: {
    BaseButton    
  }
}
</script>

<style scoped lang="css">
.home-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;
}
</style>
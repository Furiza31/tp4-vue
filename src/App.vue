<template>
  <BaseHeader />
  <HomePage />
  <BaseFooter />
</template>

<script>
import HomePage from './pages/HomePage.vue'
import BaseHeader from './components/baseHeader.vue'
import BaseFooter from './components/baseFooter.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    BaseHeader,
    BaseFooter
  }
}
</script>

<style>
/* Add global styles here, font unbuntu from google */
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
body {
  font-family: 'Ubuntu', sans-serif;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: underline;
}
</style>
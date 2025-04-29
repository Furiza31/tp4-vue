

<template>
    <div>
      <!-- Bouton pour lancer l’authentification -->
      <button @click="handleSignIn">Se connecter</button>
  
      <!-- Affichage des infos une fois connecté -->
      <div v-if="user">
        <p>Utilisateur connecté :</p>
        <ul>
          <li>Nom : {{ user.name || user.username }}</li>
          <li>Login (email) : {{ user.username }}</li>
        </ul>
      </div>
    </div>
  </template>

<script>
import { signInAndGetUser } from '@/lib/microsoftGraph.js'

export default {
  name: 'SigninButton',
  data() {
    return {
      user: null
    }
  },
  methods: {
    async handleSignIn() {
      try {
        this.user = await signInAndGetUser()
      } catch (err) {
        console.error('Erreur durant la connexion :', err)
      }
    }
  }
}
</script>

<style scoped>
button {
  padding: 0.5em 1em;
  cursor: pointer;
}
</style>


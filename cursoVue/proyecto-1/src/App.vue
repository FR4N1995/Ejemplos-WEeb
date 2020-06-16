<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <cabecera></cabecera>
    <listaFrutas></listaFrutas>
    
  </div>
</template>

<script>

import cabecera from './components/Cabecera.vue'
import listaFrutas from './components/Lista'

export default {
  name: 'App',
  components: {
    cabecera,
    listaFrutas

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

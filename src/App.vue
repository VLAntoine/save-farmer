<template>
  <img class="logo-app" alt="Save-farmer logo" src="./assets/save-farmer-logo.png">
  <HelloWorld msg="Bienvenue sur votre application"/>
  <AddClient/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AddClient from './components/AddClient.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    AddClient
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

.logo-app {
  width: 20%;
}

</style>

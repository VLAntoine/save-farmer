<template>
  <img class="logo-app" alt="Save-farmer logo" src="./assets/save-farmer-logo.png">
  <HelloWorld msg="Bienvenue sur votre application"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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

<template>
  <router-link to="/"> Home</router-link>
  <router-link to="/about"> About</router-link>
  <router-link to="/createAccount"> CreateAccount</router-link>
  <router-view />
</template>

<script>
import Search from './components/Search.vue';
export default {
  components: {
    Search
  }
}
</script>

<style>

</style>
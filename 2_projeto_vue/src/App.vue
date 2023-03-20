<template>
    <div>
      <PrimeiroComponente />
      <p>{{ teste }}</p>
    </div>
</template>

<script>
  import PrimeiroComponente from './components/primeiroComponente.vue';
  export default {
    name: 'App',
    components: {
      PrimeiroComponente
    }, 
    data() {
      return {
        teste: 'Testando...'
      }
    }
  }
</script>

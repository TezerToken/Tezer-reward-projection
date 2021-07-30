<template>
  <Rewards />
</template>

<script>
import Rewards from './components/Rewards.vue'

export default {
  name: 'App',
  components: {
    Rewards
  }

}
</script>

<style>
  body {
    background: rgb(2,0,36);
    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 43%, rgba(0,212,255,1) 100%);
    height: 100vh;
  }
</style>

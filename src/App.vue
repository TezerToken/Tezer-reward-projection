<template>
  <div>
    <Navbar />
    <CurrentRewards />
  </div>
</template>

<script>
//import RewardsUpdated from './components/RewardsUpdated.vue'
import Navbar from './components/Navbar.vue'
import CurrentRewards from './components/CurrentRewards.vue'

export default {
  name: 'App',
  components: {
    //RewardsUpdated,
    Navbar,
    CurrentRewards
  }

}
</script>

<style>
  body {
    background: #3E1443;
    background: -webkit-linear-gradient(top, #3E1443, #884B58);
    background: -moz-linear-gradient(top, #3E1443, #884B58);
    background: linear-gradient(to bottom, #3E1443, #884B58);
    height: 100vh;
    overflow: hidden;
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>

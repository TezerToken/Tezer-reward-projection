<template>
  <div class="container">
    <b-field>
      <b-input placeholder="Address..."
              type="search"
              icon="magnify"
              icon-clickable
              @icon-click="searchIconClick">
      </b-input>
    </b-field>

    <div class="card card-1">
      <h1 class="card-text">Rewards given to all holders: 13251 USDT</h1>
    </div>
    
    <div class="card card-2">
      <h1 class="card-text">Rewards given to you: 130 USDT</h1>
    </div>
  </div>
</template>


<script>
  export default {
    name: "CurrentRewards",
  }
</script>

<style scoped>
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card {
    border-radius: 20px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
    transition: all 0.2s;
  
    padding: 10px;
    width: 400px;
    min-height: 10px;

    margin: 10px;

    display: flex;
    justify-content: center;
  }

  .card-1 {
    background: radial-gradient(#1fe4f5, #3fbafe);
  }

  .card-2 {
    background: radial-gradient(#fbc1cc, #fa99b2);  
  }

  .card:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }

  .card-text {
    font-weight: 600;
  }
</style>
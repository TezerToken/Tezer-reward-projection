<template>
  <div class="parent">
    <div class="container">
      <div class="inputs">
        <b-field>
          <b-numberinput v-model="volume" placeholder="24H volume"></b-numberinput>
        </b-field>

        <b-field>
          <b-numberinput v-model="holdings" placeholder="My holdings"></b-numberinput>
        </b-field>

        <template v-if="holdings < 500">
          <b-notification
                type="is-info"
                has-icon
                aria-close-label="Close notification"
                role="alert">
                Conside that, under current parameters, to receive the rewards, you should own at least 500 TEZER.
            </b-notification>
        </template>

        <div class="projections">
          <div class="card-container">
            <div class="card card-1">
              <h2 class="card-text">EST. Daily Rewards: {{getDailyRewards(volume, holdings)}} <img src="../assets/tether_logo.svg"/></h2>
            </div>
            <div class="card card-2">
              <h2 class="card-text">EST. Monthly Rewards: {{getMonthlyRewards(volume, holdings)}} <img src="../assets/tether_logo.svg"/></h2>
            </div>
            <div class="card card-3">
              <h2 class="card-text">EST. Yearly Rewards: {{getYearlyRewards(volume, holdings)}} <img src="../assets/tether_logo.svg"/></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import axios from 'axios'
  export default {
    name: "RewardsUpdated",

  data() {
      return {
        tetherPrice: 0,
        volume: null,
        holdings: null,
      }
    },

    methods: {
      // fetching stable coin price, hah, thats some high iq shit
      getThetherPrice() {
        axios
          .get('https://api.pancakeswap.info/api/v2/tokens/0x55d398326f99059ff775485246999027b3197955')
          .then(res => (this.tetherPrice = res.data.data.price))
          .catch(e => (console.log(e)))
      },

      getDailyRewards(volume, holdings) {
        let sum = (volume*(holdings*0.000001))*0.009;
        sum = (sum / this.tetherPrice);
        return Number(sum).toFixed(3)
      },

      getMonthlyRewards(volume, holdings) {
        let sum = (volume*(holdings*0.000001))*0.009;
        sum = (sum / this.tetherPrice) * 30;
        return Number(sum).toFixed(3)
      },

      getYearlyRewards(volume, holdings) {
        let sum = (volume*(holdings*0.000001))*0.009;
        sum = (sum / this.tetherPrice) * 365;
        return Number(sum).toFixed(3)
      }

    },

    mounted: function() {
      this.getThetherPrice()
    }
  }
</script>

<style scoped>
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inputs {
    width: 500px;
  }

  .projections {
    display: flex;
    justify-content: center;
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
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

  .card:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }

  .card-1 {
    background: radial-gradient(#1fe4f5, #3fbafe);
  }

  .card-2 {
    background: radial-gradient(#fbc1cc, #fa99b2);  
  }

  .card-3 {
    background: radial-gradient(#76b2fe, #b69efe);
  }

  .card-text {
    font-weight: 600;
  }

  img {
    width: 20px;
    height: 20px;
  }




</style>

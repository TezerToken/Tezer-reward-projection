<template>
<div>
  <h1 class="header-msg">USDT Rewards projection, still under heavy development!</h1>
  <h3 class="credits-msg">Tezer telegram: <a href="https://t.me/TezerToken">@TezerToken</a></h3>


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
    </div>

    <div class="main-container">
      <div class="cards">
        <div class="card card-1">
          <h2 class="card__title">Daily Rewards: {{getDailyRewards(volume, holdings)}} <img src="../assets/tether_logo.svg"/></h2>
        </div>
      <div class="card card-2">
        <h2 class="card__title">Monthly Rewards: {{getMonthlyRewards(volume, holdings)}} <img src="../assets/tether_logo.svg"/></h2>
      </div>
      <div class="card card-3">
        <h2 class="card__title">Yearly Rewards: {{getYearlyRewards(volume, holdings)}} <img src="../assets/tether_logo.svg"/></h2>
      </div>
    </div>
  </div>
        
  </div>
</div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Rewards",

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
        let sum = (volume*(holdings*0.0000001))*0.09;
        sum = (sum / this.tetherPrice);
        return Number(sum).toFixed(3)
      },

      getMonthlyRewards(volume, holdings) {
        let sum = (volume*(holdings*0.0000001))*0.09;
        sum = (sum / this.tetherPrice) * 30;
        return Number(sum).toFixed(3)
      },

      getYearlyRewards(volume, holdings) {
        let sum = (volume*(holdings*0.0000001))*0.09;
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
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
    column-gap: 35%;
    margin-top: 150px;
  }

  .inputs {
    margin-top: 40px;
  }

  .header-msg {
    display: flex;
    justify-content: center;
    color: wheat;
    font-weight: 700;
    font-size: 2rem;
  }

  .credits-msg {
    display: flex;
    justify-content: center;
    color: wheat;
    font-style: italic;
    font-size: 1rem;
    margin-top: 10px;
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  margin: 10px;
  padding: 10px;
  width: 300px;
  min-height: 10px;
  display: grid;
  grid-template-rows: 5px 20px 0.5fr 20px;
  border-radius: 20px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
}

.card:hover {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  transform: scale(1.01);
}

.card__link,
.card__exit,
.card__icon {
  position: relative;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
}

.card__link::after {
  position: absolute;
  top: 25px;
  left: 0;
  content: "";
  width: 0%;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.6);
  transition: all 0.5s;
}

.card__link:hover::after {
  width: 100%;
}

.card__title {
  grid-row: 3/4;
  font-weight: 400;
  color:black;
}

.card__apply {
  grid-row: 4/5;
  align-self: center;
}

/* CARD BACKGROUNDS */

.card-1 {
  background: radial-gradient(#1fe4f5, #3fbafe);
}

.card-2 {
  background: radial-gradient(#fbc1cc, #fa99b2);
}

.card-3 {
  background: radial-gradient(#76b2fe, #b69efe);
}

img {
  width: 25px;
  height: 25px;
}



/* RESPONSIVE */

@media (max-width: 1600px) {
  .cards {
    justify-content: center;
  }
}

</style>
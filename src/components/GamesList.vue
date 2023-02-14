<script>
export default {
  created() {
    fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
      .then((response) => response.json())
      .then((games) => {
        this.games = games;
      });
  },

  computed: {
    addToCart() {
      return this.$store.state.cartValue;
    },
  },
  data() {
    return {
      games: [],
      title: "",
      id: "",
    };
  },
};
</script>

<style lang="scss" scoped>
//  IMPORTS/FONTS
@import "/assets/styles.scss";
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
//  IMPORTS/FONTS
.games-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  width: 100%;
}

.games-item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding-bottom: 30px;
  box-shadow: 0px 0px 30px 4px rgba(0, 0, 0, 1);
  cursor: pointer;
}

.games-img {
  width: 100%;
}

.game-title {
  padding-top: 40px;
  font-size: 20px;
  color: map-get($theme-colors, "text");
  font-family: "Poppins", sans-serif;
  max-width: 300px;
}

.sale-price {
  color: map-get($theme-colors, "danger");
  font-family: "Poppins", sans-serif;
  font-size: 20px;
}
</style>

<template>
  <div class="games-container container">
    <div class="games-item-container col" :key="game.id" v-for="game in games">
      <img class="games-img" :src="game.thumb" :key="games.id" />
      <p class="game-title">{{ game.title }}</p>
      <p class="sale-price">{{ game.salePrice }} $</p>
      <button
        type="button"
        class="btn btn-secondary"
        @click="$store.commit('addToCart', this.cartValue)"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>

<!-- :value="`${store.state.cartValue}`"
@click="${store.commit('addToCart')}" -->

<script>
export default {
  created() {
    fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
      .then((response) => response.json())
      .then((games) => {
        this.games = games;
      });
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
@import "/assets/styles.scss";

.games-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 100%;
}

.games-item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  padding-bottom: 30px;
}

.games-img {
  width: 100%;
}

.sale-price {
  color: map-get($theme-colors, "danger");
}
</style>

<template>
  <div class="games-container container">
    <div class="games-item-container col" :key="game.id" v-for="game in games">
      <img class="games-img" :src="game.thumb" :key="games.id" />
      <p class="game-title">{{ game.title }}</p>
      <p class="sale-price">{{ game.salePrice }} $</p>
      <button type="button" class="btn btn-outline-warning">Add to cart</button>
    </div>
  </div>
</template>

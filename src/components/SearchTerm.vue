<script>
export default {
  props: {
    searchTerm: {
      type: String,
      required: true,
    },
  },
  created() {
    this.games = [];
    this.fetchGames();
  },
  data() {
    return {
      games: null,
    };
  },

  watch: {
    searchTerm: function () {
      this.fetchGames();
    },
  },

  methods: {
    fetchGames() {
      fetch(`https://www.cheapshark.com/api/1.0/deals?title=${this.searchTerm}`)
        .then((response) => response.json())
        .then((games) => {
          this.games = games;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
//  IMPORTS/FONTS
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
//  IMPORTS/FONTS

.search-container {
  margin-top: 30px;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.search-result {
  font-family: "Poppins", sans-serif;
}

.game-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 20px;
  align-items: center;
  font-size: 30px;
  text-decoration: underline;
  border-radius: 5px;
  padding-bottom: 30px;
  box-shadow: 0px 0px 30px 4px rgba(0, 0, 0, 1);
  cursor: pointer;
  width: 400px;
  height: 400px;
}

.image-source {
  width: 100%;
}

.no-game {
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  margin-top: 40px;
}
</style>

<template>
  <div v-if="games.length > 0" class="search-container">
    <h1 class="search-result">Search Results for "{{ searchTerm }}"</h1>
    <div class="game-container" v-for="game in games" :key="game.gameID">
      {{ game.title }}
      <img class="image-source" :src="game.thumb" alt="" />
    </div>
  </div>
  <div class="no-game" v-else>
    There's no games with that name on sale, check in another time...
  </div>
</template>

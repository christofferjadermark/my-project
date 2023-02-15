<script>
import axios from "axios";
import { reactive } from "vue";

export default {
  mounted() {
    axios
      .get("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
      .then((response) => {
        console.log(response.data);
        this.games = response.data;
      })
      .catch((error) => {
        console.error(error);
      });

    this.startSlide();
  },

  setup() {
    const state = reactive({
      games: [
        { gameID: 1, thumbnailURL: "img1.jpg", title: "Game 1" },
        { gameID: 2, thumbnailURL: "img2.jpg", title: "Game 2" },
        { gameID: 3, thumbnailURL: "img3.jpg", title: "Game 3" },
      ],
      currentIndex: 0,
      timer: null,
    });

    const startSlide = () => {
      state.timer = setInterval(next, 4000);
    };

    const next = () => {
      state.currentIndex = (state.currentIndex + 1) % state.games.length;
    };

    const prev = () => {
      state.currentIndex =
        (state.currentIndex - 1 + state.games.length) % state.games.length;
    };

    const currentSlide = (n) => {
      state.currentIndex = n;
    };

    return {
      ...state,
      startSlide,
      next,
      prev,
      currentSlide,
    };
  },
};
</script>

<style>
.slideshow-container {
  position: relative;
  height: 200px;
  max-width: 100%;
}

.mySlides {
  display: none;
  text-align: center;
}

.mySlides img {
  margin: 0 auto;
  max-height: 200px;
  max-width: 100%;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 10px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 5px;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #717171;
}
</style>

<template>
  <div class="slideshow-container">
    <div
      v-for="(game, index) in games"
      :key="game.gameID"
      class="mySlides fade"
      :class="{ active: index === currentIndex }"
    >
      <div class="numbertext">{{ index + 1 }} / {{ games.length }}</div>
      <img :src="game.thumbnailURL" class="slide-img" />
      <div class="text">{{ game.title }}</div>
    </div>

    <a class="prev" @click="prev">&#10094;</a>
    <a class="next" @click="next">&#10095;</a>
  </div>
  <br />

  <div style="text-align: center">
    <span
      v-for="(game, index) in games"
      :key="game.gameID"
      class="dot"
      :class="{ active: index === currentIndex }"
      @click="currentSlide(index)"
    />
  </div>
</template>

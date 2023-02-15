<script>
import GamesList from "../components/GamesList.vue";
import SlidesComp from "../components/SlidesComp.vue";

export default {
  components: {
    GamesList,
    SlidesComp,
  },
};
</script>

<style lang="scss" scoped>
//  IMPORTS/FONTS
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
//  IMPORTS/FONTS

.main-header {
  display: flex;
  justify-content: center;
  margin: 50px 0;
  font-family: "Poppins", sans-serif;
}

.slides-comp {
  margin-bottom: 200px;
}
</style>

<template>
  <h1 class="main-header">Games that's on sale!</h1>
  <SlidesComp class="slides-comp" />
  <GamesList />
</template>

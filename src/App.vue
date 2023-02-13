<script>
import GamesList from "./components/GamesList.vue";
import SearchBar from "./components/SearchBar.vue";
export default {
  components: {
    GamesList,
    SearchBar,
  },
};
</script>

<style lang="scss" scoped>
.ul-lists {
  list-style: none;
  display: flex;
  gap: 40px;
  justify-content: center;
  height: 50px;
  align-items: center;
}
</style>

<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <ul class="ul-lists">
      <li>
        <RouterLink to="/">Hem</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">Om</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact">Kontakt</RouterLink>
      </li>
    </ul>
    <SearchBar />
  </nav>
  <RouterView />
</template>

<script>
// import GamesList from "./components/GamesList.vue";
import router from "./router";
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
      games: null,
      id: [],
      searchTerm: "",
    };
  },

  methods: {
    searchList() {
      fetch(`https://www.cheapshark.com/api/1.0/deals?title=${this.searchTerm}`)
        .then((response) => response.json())
        .then((games) => {
          this.games = games;
          router.push({ name: "searchResults", query: { q: this.searchTerm } });
        });
    },
  },
  components: {
    //GamesList,
  },
};
</script>

<style lang="scss" scoped>
//  IMPORTS/FONTS
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
//  IMPORTS/FONTS

.navbar-brand {
  color: white;
  font-size: 30px;
  font-family: "Lato", sans-serif;
  letter-spacing: 1px;
  text-decoration: underline;
}

.form-control {
  background-color: white;
  color: black;
}

.nav-link {
  color: white;
  font-family: "Lato", sans-serif;
  letter-spacing: 1px;
  font-size: 20px;
}
</style>

<template>
  <nav class="navbar navbar-expand-lg p-4 bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Games Sale</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Hem</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">Om</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact">Kontakt</RouterLink>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2 search-bar"
            type="text"
            placeholder="Search for games..."
            aria-label="Search"
            v-model="searchTerm"
            @keyup.enter="searchList"
          />
          <button class="btn btn-secondary" @click="searchList" type="submit">
            Search
          </button>
        </form>
        <i class="bi bi-cart2 bg-primary p-4" />
      </div>
    </div>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

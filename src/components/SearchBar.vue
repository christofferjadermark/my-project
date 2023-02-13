<script>
export default {
  components: {},

  //   created() {
  //     fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
  //       .then((response) => response.json())
  //       .then((games) => {
  //         this.games = games;
  //       });
  //   },
  //   data() {
  //     return {
  //       games: [],
  //       title: "",
  //       id: "",
  //     };
  //   },
};
</script>

<template>
  <div class="container col-6 mt-5">
    <input
      type="text"
      class="form-control mb-5 p-3"
      placeholder="Search here...."
      id="search-input"
    />
    <ul class="list-group list-group-flush text-primary h5">
      <li class="list-group-item p-3"></li>
    </ul>
  </div>
</template>

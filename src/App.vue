<script>
  import GamesList from './components/GamesList.vue'
  export default {
    components: {
      GamesList,
    }
  }
</script>


<style>
.ul-lists {
 list-style: none;
 display: flex;
 gap: 40px;
 justify-content: center;
 height: 100px;
 align-items: center;
}
</style>

<template>
  <nav>
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
  </nav>
  <GamesList />
</template>

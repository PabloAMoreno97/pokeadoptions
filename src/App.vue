<script setup>
import { RouterLink, RouterView } from 'vue-router'
import IconHeader from "./components/icons/IconHeader.vue"
</script>

<template>
  <header class="header">
    <div>
      <RouterLink to="/" class="header-title">
        <h1 class="header-pageName">PokeAdoptions</h1>
        <span class="header-logo">
          <IconHeader></IconHeader>
        </span>
      </RouterLink>
    </div>
    <nav class="header-nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/adoptions">Adoptions</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <footer>

  </footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  padding: 1rem;
  background-color: cadetblue;
}

.header-title {
  display: flex;
  align-items: center;
}

.header-pageName {
  color: white;
  font-family: 'Russo One', sans-serif;
}

.header-logo {
  width: 5rem;
}

.header-nav a {
  margin-left: 1rem;
  font-size: 1.5rem;
  color: white;
}
</style>
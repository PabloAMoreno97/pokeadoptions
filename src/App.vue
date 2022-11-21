<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import IconHeader from "./components/icons/IconHeader.vue"
import IconFooter from "./components/icons/IconFooter.vue"


</script>

<template>
  <header class="header">
    <div>
      <RouterLink to="/" class="header-title">
        <span class="header-logo">
          <IconHeader></IconHeader>
        </span>
        <h1 class="header-pageName">PokeAdoptions</h1>
      </RouterLink>
    </div>
    <nav class="header-nav">
      <RouterLink to="/">
        <font-awesome-icon icon="fa-solid fa-house" /> Home
      </RouterLink>
      <RouterLink to="/adoptions">
        <font-awesome-icon icon="fa-solid fa-hands-holding-child" /> Adoptions
      </RouterLink>
      <RouterLink to="/about">
        <font-awesome-icon icon="fa-solid fa-address-card" /> About
      </RouterLink>
    </nav>
  </header>

  <RouterView />

  <footer class="footer">
    <div class="footer-brand">
      <h2>PokeAdoptions</h2>
      <span class="footer-logo">
        <IconFooter></IconFooter>
      </span>
    </div>
    <div class="footer-sections">
      <section>
        <h3>Tools</h3>
      </section>
      <section>
        <h3>About</h3>
      </section>
      <section>
        <h3>Social</h3>
        <ul class="footer-contacts">
          <li>
            <font-awesome-icon icon="fa-brands fa-facebook" />
            <p>Facebook</p>
          </li>
          <li>
            <font-awesome-icon icon="fa-brands fa-instagram" />
            <p>Instagram</p>
          </li>
          <li>
            <font-awesome-icon icon="fa-brands fa-twitter" />
            <p>Twitter</p>
          </li>
          <li>
            <font-awesome-icon icon="fa-brands fa-whatsapp" />
            <p>WhatsApp</p>
          </li>
        </ul>
      </section>
    </div>
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

h3 {
  font-weight: 200;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  padding: 1rem;
  background-color: #5F9EA0;
}

.header-title {
  display: flex;
  align-items: center;
}

.header-pageName {
  color: #FFF;
  font-family: 'Russo One', sans-serif;
  font-weight: 100;
}

.header-logo {
  width: 5rem;
}

.header-nav a {
  margin-left: 1rem;
  font-size: 1.5rem;
  color: #FFF;
}

.header-nav a:hover {
  font-size: 1.6rem;
  transition: 500ms;
}

.footer {
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  background-color: rgb(134, 154, 155);
  color: #FFF;
  align-items: center;
  font-family: 'Russo One', sans-serif;
}

.footer-brand {
  display: flex;
  align-items: center;
}

.footer-brand h2 {
  font-weight: 100;
}

.footer-logo {
  width: 3.6rem;
  margin-left: 0.5rem;
}

.footer-sections {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.footer-sections section {
  text-align: center;
}

.footer-contacts li {
  display: flex;
  align-items: center;
}

.footer-contacts li p {
  margin-left: 0.5rem;
  font-weight: 100;
}
</style>
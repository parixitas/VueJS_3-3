<script setup>
import "./assets/app.css"
import { RouterLink, RouterView } from 'vue-router'
import EnjoyMessage from './components/EnjoyMessage.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <EnjoyMessage msg="Welcome" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/cards">Cards</RouterLink>
        <RouterLink to="/scroll">Scroll</RouterLink>
        <RouterLink to="/throw">Throw</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
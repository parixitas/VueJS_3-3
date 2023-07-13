<script setup>
import "../assets/welcome.css"
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Please Enjoy My App
    </h3>
  </div>
</template>

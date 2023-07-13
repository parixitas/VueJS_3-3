<template>
    <div class="cards">
      <GameCard
        v-for="(card, index) in cards"
        :key="card"
        :card="card"
        :is-current="index === 0"
        @cardAccepted="$emit('cardAccepted');"
        @cardRejected="$emit('cardRejected');"
        @cardSkipped="$emit('cardSkipped');"
        @hideCard="$emit('hideCard');"
      />
    </div>
  </template>
  
  <script>
  import GameCard from "./GameCard.vue";
  
  export default {
    components: {
      GameCard
    },
  
    props: {
      cards: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .cards {
    position: relative;
    display: flex;
    justify-content: center;
  }
  </style>
  
<script setup>
import ThrowCards from '../components/ThrowCards.vue';
</script>

<template>
  <div class="throw">
    <ThrowCards :cards="visibleCards" @cardAccepted="handleCardAccepted" @cardRejected="handleCardRejected"
      @cardSkipped="handleCardSkipped" @hideCard="removeCardFromDeck" />
  </div>
</template>
<style>
.throw {
  min-height: 320px;
}
</style>
<script>
export default {
  name: "App",
  components: {
    ThrowCards
  },

  data() {
    return {
      visibleCards: this.$store.state.cards.map(i=>String(i))
    };
  },

  methods: {
    handleCardAccepted() {
      console.log("handleCardAccepted");
    },
    handleCardRejected() {
      console.log("handleCardRejected");
    },
    handleCardSkipped() {
      console.log("handleCardSkipped");
    },
    removeCardFromDeck() {
      this.visibleCards.shift();
    }
  }
};
</script>

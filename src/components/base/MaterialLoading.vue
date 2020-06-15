<template>
  <v-overlay :opacity="0.5" :value="starLoading">
    <v-progress-circular indeterminate color="green darken-4" size="100" :width="8"></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
  name: "MaterialLoading",
  computed: {
    starLoading: {
      get() {
        return this.$store.state.starLoading;
      },
      set(val) {
        this.$store.commit("SET_LOADING", val);
      }
    }
  }
};
</script>
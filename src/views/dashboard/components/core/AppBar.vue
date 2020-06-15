<template>
  <v-app-bar id="app-bar" absolute app color="transparent" flat height="75">
    <v-btn class="mr-3" elevation="1" fab small @click="setDrawer(!drawer)">
      <v-icon v-if="drawer">mdi-dots-vertical</v-icon>
      <v-icon v-else>mdi-view-quilt</v-icon>
    </v-btn>

    <v-toolbar-title class="hidden-sm-and-down font-weight-light" v-text="$route.name" />

    <v-spacer />

    <v-btn class="ml-2" min-width="0" text to="/dashboard">
      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
// Utilities
import { mapState, mapMutations } from "vuex";

export default {
  name: "DashboardCoreAppBar",

  data: () => ({
    notifications: []
  }),

  computed: {
    ...mapState(["drawer"])
  },

  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER"
    })
  }
};
</script>

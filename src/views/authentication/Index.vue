<template>
  <v-app>
    <base-material-loading />
    <base-material-snackbar
      v-model="notification.show"
      :type="notification.color"
      v-bind="{
        top: true,
        right: true
      }"
    >
      <span class="font-weight-bold">{{notification.message}}</span>
    </base-material-snackbar>
    <v-container fluid fill-height class="background-image">
      <v-row justify="center" align="center">
        <v-col cols="12" md="4" lg="4">
          <router-view />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "AuthenticationIndex",
  computed: {
    notification: {
      get() {
        return this.$store.state.notification;
      },
      set(val) {
        this.$store.commit("SET_NOTIFICATION", val);
      }
    }
  }
};
</script>

<style lang="scss">
.background-image {
  background-image: url("../../../src/assets/login.jpg");
  background-size: cover;
}
</style>

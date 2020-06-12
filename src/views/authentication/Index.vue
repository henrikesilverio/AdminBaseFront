<template>
  <v-app>
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
  name: "AuthenticationIndex"
};
</script>

<style lang="scss">
.background-image {
  background-image: url("../../../src/assets/login.jpg");
  background-size: cover;
}
</style>

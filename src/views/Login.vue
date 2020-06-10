<template>
  <v-app>
    <v-container fluid fill-height class="background-image">
      <v-row justify="center" align="center">
        <v-col cols="12" md="4" lg="3">
          <base-material-card>
            <template v-slot:heading>
              <div class="display-2 font-weight-bold text-center">Login</div>
            </template>

            <v-form>
              <v-container>
                <validation-observer ref="obs">
                  <v-row>
                    <v-col cols="12" md="12">
                      <validation-provider name="userName" rules="required">
                        <v-text-field
                          v-model="userName"
                          slot-scope="{errors, valid}"
                          prepend-icon="mdi-email"
                          label="Usuário"
                          :error-messages="errors"
                          :success="valid"
                          required
                        />
                      </validation-provider>
                    </v-col>

                    <v-col cols="12" md="12">
                      <validation-provider name="password" rules="required">
                        <v-text-field
                          v-model="password"
                          slot-scope="{errors, valid}"
                          prepend-icon="mdi-lock"
                          label="Senha"
                          :error-messages="errors"
                          :success="valid"
                          required
                        />
                      </validation-provider>
                    </v-col>

                    <v-col cols="12" class="text-right">
                      <v-btn color="success" class="mr-0" @click="singUp">Entrar</v-btn>
                    </v-col>
                  </v-row>
                </validation-observer>
              </v-container>
            </v-form>
          </base-material-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    singUp() {
      this.$refs.obs.validate();
    }
  }
};
</script>

<style lang="scss">
.background-image {
  background-image: url("../../src/assets/login.jpg");
  background-size: cover;
}
</style>
<template>
  <base-material-card>
    <template v-slot:heading>
      <div class="display-2 font-weight-bold text-center">{{titleHeading}}</div>
    </template>

    <v-window v-model="isLoginScreen">
      <v-window-item :value="true">
        <validation-observer ref="formLogin">
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" md="12">
                  <validation-provider name="email" rules="required|email">
                    <v-text-field
                      v-model="userName"
                      slot-scope="{errors, valid}"
                      prepend-icon="mdi-email"
                      label="Email"
                      autocomplete="new-password"
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
                      label="Senha"
                      prepend-icon="mdi-lock"
                      autocomplete="new-password"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :error-messages="errors"
                      :success="valid"
                      :type="showPassword ? 'text' : 'password'"
                      @click:append="showPassword = !showPassword"
                      required
                    />
                  </validation-provider>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </validation-observer>
      </v-window-item>

      <v-window-item :value="false">
        <validation-observer ref="formReset">
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" md="12">
                  <validation-provider name="email" rules="required|email">
                    <v-text-field
                      v-model="userName"
                      slot-scope="{errors, valid}"
                      prepend-icon="mdi-email"
                      label="Email"
                      autocomplete="new-password"
                      :error-messages="errors"
                      :success="valid"
                      required
                    />
                  </validation-provider>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </validation-observer>
      </v-window-item>
    </v-window>

    <template v-slot:actions>
      <v-btn text color="blue darken-4" @click="toogleScreen">{{titleFirstButton}}</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="green" class="mr-0" @click="sendData">{{titleSecondButton}}</v-btn>
    </template>
  </base-material-card>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      userName: "",
      password: "",
      isLoginScreen: true,
      showPassword: false,
      titleHeading: "Login",
      titleFirstButton: "Esqueceu sua senha ?",
      titleSecondButton: "Entrar"
    };
  },
  methods: {
    sendData() {
      if (this.isLoginScreen) {
        this.$refs.formLogin.validate();
      } else {
        this.$refs.formReset.validate();
      }
    },
    toogleScreen() {
      this.isLoginScreen = !this.isLoginScreen;
      if (this.isLoginScreen) {
        this.$refs.formReset.reset();
        this.titleHeading = "Login";
        this.titleFirstButton = "Esqueceu sua senha?";
        this.titleSecondButton = "Entrar";
      } else {
        this.titleHeading = "Redefinir senha";
        this.titleFirstButton = "Lembrei minha senha!";
        this.titleSecondButton = "Enviar";
        this.$refs.formLogin.reset();
      }
    }
  }
};
</script>

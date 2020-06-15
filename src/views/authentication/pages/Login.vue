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
    async sendData() {
      if (this.isLoginScreen && (await this.$refs.formLogin.validate())) {
        this.$api.auth
          .authentication({ email: this.userName, password: this.password })
          .then(data => {
            localStorage.setItem("authtoken", data.token.token);
            this.$router.push("dashboard");
          })
          .catch(error => {
            this.$store.dispatch("NOTIFICATION_ERROR", error.message);
          });
      } else if (
        !this.isLoginScreen &&
        (await this.$refs.formReset.validate())
      ) {
        this.$api.auth
          .forgotPassword({ email: this.userName })
          .then(() => {
            this.$store.dispatch(
              "NOTIFICATION_INFO",
              "Em breve você receberá um e-mail para redefinir sua senha."
            );
          })
          .catch(error => {
            this.$store.dispatch("NOTIFICATION_ERROR", error.message);
          });
      }
    },
    toogleScreen() {
      this.isLoginScreen = !this.isLoginScreen;
      if (this.isLoginScreen) {
        this.titleHeading = "Login";
        this.titleFirstButton = "Esqueceu sua senha?";
        this.titleSecondButton = "Entrar";
        this.userName = "";
        this.$refs.formReset.reset();
      } else {
        this.titleHeading = "Redefinir senha";
        this.titleFirstButton = "Lembrei minha senha!";
        this.titleSecondButton = "Enviar";
        this.userName = "";
        this.$refs.formLogin.reset();
      }
    }
  }
};
</script>

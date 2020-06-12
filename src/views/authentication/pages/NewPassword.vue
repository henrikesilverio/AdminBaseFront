<template>
  <base-material-card>
    <template v-slot:heading>
      <div class="display-2 font-weight-bold text-center">Nova senha</div>
    </template>
    <validation-observer ref="formNewPassword">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              <validation-provider name="newPassword" rules="required" vid="newPassword">
                <v-text-field
                  v-model="newPassword"
                  slot-scope="{errors, valid}"
                  label="Nova senha"
                  prepend-icon="mdi-lock"
                  autocomplete="new-password"
                  :append-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :error-messages="errors"
                  :success="valid"
                  :type="showNewPassword ? 'text' : 'password'"
                  @click:append="showNewPassword = !showNewPassword"
                  required
                />
              </validation-provider>
            </v-col>

            <v-col cols="12" md="12">
              <validation-provider name="confirmPassword" rules="required|confirmed:newPassword">
                <v-text-field
                  v-model="confirmPassword"
                  slot-scope="{errors, valid}"
                  label="Confirma senha"
                  prepend-icon="mdi-lock"
                  autocomplete="new-password"
                  :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :error-messages="errors"
                  :success="valid"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  @click:append="showConfirmPassword = !showConfirmPassword"
                  required
                />
              </validation-provider>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </validation-observer>

    <template v-slot:actions>
      <v-spacer></v-spacer>
      <v-btn color="green" class="mr-0" @click="sendData">Enviar</v-btn>
    </template>
  </base-material-card>
</template>

<script>
export default {
  name: "NewPasswordPage",
  data() {
    return {
      newPassword: "",
      confirmPassword: "",
      showNewPassword: false,
      showConfirmPassword: false
    };
  },
  methods: {
    sendData() {
        this.$refs.formNewPassword.validate();
    }
  }
};
</script>
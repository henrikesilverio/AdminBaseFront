<template>
  <v-app>
    <v-container fluid tag="section">
      <v-row justify="center">
        <v-col cols="12" md="4">
          <base-material-card>
            <template v-slot:heading>
              <div class="display-2 font-weight-light text-center">Login</div>
            </template>

            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" md="12">
                    <v-text-field class="purple-input" label="Usuário">
                      <v-icon slot="prepend">mdi-email</v-icon>
                    </v-text-field>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-text-field class="purple-input" label="Senha">
                      <v-icon slot="prepend">mdi-lock</v-icon>
                    </v-text-field>
                  </v-col>

                  <v-col cols="12" class="text-right">
                    <v-btn color="success" class="mr-0">Entrar</v-btn>
                  </v-col>
                </v-row>
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
  //
};
</script>
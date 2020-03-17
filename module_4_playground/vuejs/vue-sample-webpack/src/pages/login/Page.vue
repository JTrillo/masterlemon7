<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <h3 class="headline">Login</h3>
        </v-card-title>
        <v-card-text>
          <form-component
            :login="login"
            :update-login="updateLogin"
            :login-request="loginRequest"
          />
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Login } from './viewModel';
import { FormComponent } from './components';

export default Vue.extend({
  name: 'LoginPage',
  components: { FormComponent },
  props: {
    login: {} as PropOptions<Login>,
    updateLogin: {} as PropOptions<(name: string, password: string) => void>,
    loginRequest: {} as PropOptions<() => void>,
  },
});
</script>
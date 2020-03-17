<template>
  <form>
    <v-layout column justify-center>
      <v-text-field
        label="Name"
        :value="login.name"
        @input="(name) => updateLogin(name, login.password)"
      />
      <v-text-field
        label="Password"
        type="password"
        :value="login.password"
        @input="(password) => updateLogin(login.name, password)"
      />
      <v-btn type="submit" color="info" @click.prevent="loginRequest">Login</v-btn>
    </v-layout>
  </form>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Login } from "../viewModel";

export default Vue.extend({
  name: 'FormComponent',
  props: {
    login: {} as PropOptions<Login>,
    updateLogin: {} as PropOptions<(name: string, password: string) => void>,
    loginRequest: {} as PropOptions<() => void>,
  },
});
</script>
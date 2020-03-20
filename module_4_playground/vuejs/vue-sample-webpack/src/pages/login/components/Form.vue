<template>
  <v-form v-model="valid" ref="form">
    <v-layout column justify-center>
      <v-text-field
        label="Name"
        :value="login.name"
        :rules="[resultLoginError.name]"
        @input="(name) => updateLogin('name', name)"
        @blur="updateLogin('name', login.name)"
      />
      <v-text-field
        label="Password"
        type="password"
        :value="login.password"
        :rules="[resultLoginError.password]"
        @input="(password) => updateLogin('password', password)"
        @blur="updateLogin('password', login.password)"
      />
      <v-btn type="submit" color="info" @click.prevent="handleClick">Login</v-btn>
    </v-layout>
  </v-form>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';
import { FormProps } from "../formProps";
import { ResultLoginError } from '../viewModel';

interface Refs {
  $refs: {
    form: HTMLFormElement;
  };
}

export default (Vue as VueConstructor<Vue & Refs>).extend({
  name: 'FormComponent',
  props: {
    login: {},
    loginError: {},
    updateLogin: {},
    loginRequest: {},
  } as FormProps,
  data() {
    return {
      valid: true,
    };
  },
  computed: {
    resultLoginError(): ResultLoginError {
      return Object.keys(this.loginError).reduce(
        (acc, item) => ({
          ...acc,
          [item]:
            this.loginError[item as keyof ResultLoginError].succeeded ||
            this.loginError[item as keyof ResultLoginError].errorMessage,
        }),
        {} as ResultLoginError
      )
    },
  },
  methods: {
    handleClick() {
      //(this.$refs.form as HTMLFormElement).validate();
      this.$refs.form.validate();
      this.loginRequest();
    },
  },
});
</script>
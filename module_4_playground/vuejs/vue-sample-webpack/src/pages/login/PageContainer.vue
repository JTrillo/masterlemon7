<template>
 <!-- <login-page
    :login="login"
    :update-login="updateLogin"
    :login-request="loginRequest"
  /> -->
  <login-page v-bind="{ login, loginRequest, updateLogin }" />
</template>

<script lang="ts">
import Vue from 'vue';
import LoginPage from './Page.vue';
import { createEmptyLogin } from './viewModel';
import { mapLoginVmToModel } from './mappers';
import { loginRequest } from '../../rest-api/api/login';

export default Vue.extend({
  name: 'LoginPageContainer',
  components: { LoginPage },
  data() {
    return {
      login: createEmptyLogin(),
    };
  },
  methods: {
    updateLogin(name, password){
      this.login = {
        name,
        password
      }
    },
    loginRequest() {
      const loginModel = mapLoginVmToModel(this.login);
      loginRequest(loginModel)
        .then(() => {
          this.$router.push("/recipe");
        })
        .catch(error => console.log(error));
    },
  }
});
</script>
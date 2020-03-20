<template>
 <!-- <login-page
    :login="login"
    :update-login="updateLogin"
    :login-request="loginRequest"
  /> -->
  <login-page v-bind="{ login, loginError, updateLogin, loginRequest }" />
</template>

<script lang="ts">
import Vue from 'vue';
import LoginPage from './Page.vue';
import { createEmptyLogin, createEmptyLoginError } from './viewModel';
import { mapLoginVmToModel } from './mappers';
import { loginRequest } from '../../rest-api/api/login';
import { validations } from "./validations";

export default Vue.extend({
  name: 'LoginPageContainer',
  components: { LoginPage },
  data() {
    return {
      login: createEmptyLogin(),
      loginError: createEmptyLoginError(),
    };
  },
  methods: {
    updateLogin(field: string, value: string){
      this.login = {
        ...this.login,
        [field]: value
      };

      validations
        .validateField(this.login, field, value)
        .then(FieldValidationResult => {
          this.loginError = {
            ...this.loginError,
            [field]: FieldValidationResult
          }
        })
        .catch(error => console.log(error));
    },
    loginRequest() {
      validations.validateForm(this.login)
        .then(formValidationResult => {
          if(formValidationResult.succeeded){
            const loginModel = mapLoginVmToModel(this.login);
            loginRequest(loginModel)
              .then(() => {
                this.$router.push("/recipe");
              })
              .catch(error => console.log(error));
          }else{
            this.loginError = {
              ...this.loginError,
              ...formValidationResult.fieldErrors,
            };
          }
        })
        .catch(error => console.log(error));

    },
  }
});
</script>
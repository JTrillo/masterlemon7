<template>
  <v-app>
    <v-content>
      <v-container>
        <router-view />
        <loader-component />
        <snackbar-component />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { LoaderComponent, SnackbarComponent } from "./common/components";

export default Vue.extend({
  name: 'App',
  components: { LoaderComponent, SnackbarComponent },
});
</script>
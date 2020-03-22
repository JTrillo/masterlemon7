<template>
  <v-app>
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { MemberTable } from "./components";

export default Vue.extend({
  name: "App",
  components: { MemberTable }
});
</script>

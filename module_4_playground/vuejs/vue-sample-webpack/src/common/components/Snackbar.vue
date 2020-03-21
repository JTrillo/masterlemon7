<template>
  <v-snackbar
    :color="snackbar.type"
    :value="snackbar.isActive"
  >{{ snackbar.message }}</v-snackbar>
</template>

<script lang="ts">
import Vue from 'vue';
import { Snackbar } from "../../store/model";

export default Vue.extend({
  name: 'Snackbar',
  computed: {
    snackbar(): Snackbar {
      return this.$store.state.snackbar;
    },
  },
})
</script>
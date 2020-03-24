<template>
  <v-list-tile avatar>
    <v-list-tile-avatar>
      <v-icon large>{{icon}}</v-icon>
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title v-text="title"></v-list-tile-title>
      <v-list-tile-sub-title v-text="text"></v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { User } from "../../../model/user";

export default Vue.extend({
  name: 'InfoRowComponent',
  props: {
    icon: String,
    title: String,
    text: String,
  },
});
</script>
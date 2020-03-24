<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card
        class="mx-auto"
        max-width="400"
      >
        <v-card-title>
          <v-avatar left size="36px">
            <v-img :src="user.avatar_url" />
          </v-avatar>
          <span class="title font-weight-light">{{ user.name }}</span>
        </v-card-title>

        <info-component :user="user" />

        <v-card-actions>
          <v-btn round @click="goBack">Go back to member page</v-btn>
          <v-btn round @click="goGithub">Visit user's Github</v-btn>
        </v-card-actions>

      </v-card>    
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import InfoComponent from './Info.vue';
import { User } from "../../../model/user";

export default Vue.extend({
  name: 'CardComponent',
  components: { InfoComponent },
  props: {
    user: {} as PropOptions<User>,
    goBack: {} as PropOptions<() => void>,
  },
  methods: {
    goGithub() {
      window.open(this.user.html_url);
    },
  }
});
</script>
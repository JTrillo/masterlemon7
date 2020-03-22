<template>
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

    <!-- SEGUIR CON EL CUERPO Y LAS ACTIONS DE LA CARD -->
  </v-card>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { User } from "../../../model/user";

export default Vue.extend({
  name: 'CardComponent',
  props: { user: {} as PropOptions<User> },
});
</script>
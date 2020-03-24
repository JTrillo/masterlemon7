<template>
  <v-list>
    <info-row-component icon="domain" title="Company" :text="user.company" />
    <info-row-component icon="email" title="Email" :text="user.email" />
    <info-row-component icon="folder_shared" title="Public repos" :text="String(user.public_repos)" />
    <info-row-component icon="supervisor_account" title="Followers" :text="String(user.followers)" />
    <info-row-component icon="supervised_user_circle" title="Following" :text="String(user.following)" />
  </v-list>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import InfoRowComponent from "./InfoRow.vue";
import { User } from "../../../model/user";

export default Vue.extend({
  name: 'InfoComponent',
  components: { InfoRowComponent },
  props: { user: {} as PropOptions<User> },
});
</script>
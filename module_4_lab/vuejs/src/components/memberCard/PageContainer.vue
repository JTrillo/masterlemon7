<template>
  <member-card-page
    :user="user"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import MemberCardPage from "./Page.vue";
import { User, createDefaultUser } from "../../model/user";
import { getUser } from "../../api/userAPI";

export default Vue.extend({
  name: 'MemberCardPageContainer',
  components: { MemberCardPage },
  props: { login: String },
  data() {
    return {
      user: createDefaultUser(),
    };
  },
  beforeMount() {
    const id = String(this.login || 'brauliodiez');
    getUser(id)
      .then(user => {
        this.user = user;
      })
      .catch(error => console.log(error));
  },
});
</script>
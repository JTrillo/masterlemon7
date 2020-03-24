<template>
  <member-card-page
    :user="user"
    :go-back="goBack"
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
    const userLogin = String(this.login || 'brauliodiez');
    this.$store.commit('setLoading', { loading: true });
    getUser(userLogin)
      .then(user => {
        this.user = user;
      })
      .catch(error => console.log(error))
      .finally(() => this.$store.commit('setLoading', { loading: false }));
  },
  methods: {
    goBack(){
      this.$router.back();
    }
  }
});
</script>
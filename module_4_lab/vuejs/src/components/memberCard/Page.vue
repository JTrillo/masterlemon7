<template>
  <card-component :user="user" />
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { CardComponent } from "./components";
import { User } from "../../model/user";

export default Vue.extend({
  name: 'MemberCardPage',
  components: { CardComponent },
  props: { user: {} as PropOptions<User> },
  created() {
    console.log(this.user);
  }
});
</script>
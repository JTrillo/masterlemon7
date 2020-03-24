<template>
  <card-component
    :user="user"
    :go-back="goBack"
  />
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { CardComponent } from "./components";
import { User } from "../../model/user";

export default Vue.extend({
  name: 'MemberCardPage',
  components: { CardComponent },
  props: {
    user: {} as PropOptions<User>,
    goBack: {} as PropOptions<() => void>,
  },
});
</script>
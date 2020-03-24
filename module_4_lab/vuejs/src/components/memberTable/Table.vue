<template>
  <div>
    <h2>Member Page</h2>
    <v-text-field
      label="Organization"
      v-model="organization"
    />
    <v-btn @click="loadMembers">Load</v-btn>

    <search-bar-component v-bind="{ searchText, onSearch, disableBar }" />

    <v-data-table
      :headers="headers"
      :items="filteredMembers"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td>
          <v-img :src="props.item.avatar_url" :class="$style.image" />
        </td>
        <td>{{ props.item.id }}</td>
        <td>
          {{ props.item.login }}
          <v-btn flat icon :to="`member/${props.item.login}`">
            <v-icon>search</v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { SearchBarComponent } from "./components";
import { Member } from "../../model/member";
import { getAllMembers } from "../../api/memberAPI";
import { filterMembersByCommaSeparatedText } from "./business/filterMemberBusiness";

export default Vue.extend({
  name: "MemberTable",
  components: { SearchBarComponent },
  data: () => ({
    //members: [] as Member[],
    organization: "lemoncode",
    headers: [
      { text: 'Avatar', value: 'avatar_url', sortable: false },
      { text: 'Id', value: 'id', sortable: false },
      { text: 'Name', value: 'login', sortable: false },
    ],
    searchText: '',
  }),
  computed: {
    members(): Member[] {
      return this.$store.state.members;
    },
    filteredMembers(): Member[] {
      return filterMembersByCommaSeparatedText(this.members, this.searchText);
    },
    disableBar(): boolean {
      return this.members.length === 0 ? true : false;
    }
  },
  methods: {
    loadMembers: async function() {
      this.$store.dispatch('getAllMembers', { organization: this.organization })
      /*getAllMembers(this.organization).then(members => {
        this.members = members;
      });*/
    },
    onSearch(value: string) {
      this.searchText = value;
    },
  },
});
</script>

<style module>
.image {
  max-width: 10rem;
}
</style>

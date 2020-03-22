<template>
  <v-text-field
    placeholder="Search for members comma separated..."
    :value="searchText"
    @input="onSearch"
    :disabled="disableBar"
  />
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  name: 'SearchBarComponent',
  props: {
    searchText: String,
    onSearch: {} as PropOptions<(value: string) => void>,
    disableBar: Boolean,
  },
});
</script>
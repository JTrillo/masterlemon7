<template>
  <v-container>
    <h2>Recipes</h2>
    <search-bar-component v-bind="{ searchText, onSearch }"/>
    <table-component :recipes="recipes" />
  </v-container>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Recipe } from './viewModel';
import { TableComponent, SearchBarComponent } from "./components";

export default Vue.extend({
  name: 'RecipeListPage',
  components: { TableComponent, SearchBarComponent },
  props: {
    recipes: {} as PropOptions<Recipe[]>,
    searchText: String,
    onSearch: {} as PropOptions<(value: string) => void>,
  },
});
</script>
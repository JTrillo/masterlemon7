<template>
  <v-container>
    <h2>Recipes</h2>
    <table-component :recipes="recipes" />
  </v-container>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Recipe } from './viewModel';
import { TableComponent } from "./components";

export default Vue.extend({
  name: 'RecipeListPage',
  components: { TableComponent },
  props: {
    recipes: {} as PropOptions<Recipe[]>,
  },
});
</script>
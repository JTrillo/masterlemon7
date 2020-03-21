<template>
  <recipe-list-page
    :recipes="filteredRecipes"
    :search-text="searchText"
    :on-search="onSearch"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import { Recipe } from './viewModel';
import { mapRecipeListModelToVm } from './mappers';
import { fetchRecipes } from '../../../rest-api/api/recipe';
import RecipeListPage from './Page.vue';
import { filterRecipesByCommaSeparatedText } from "./business/filterRecipeBusiness";

export default Vue.extend({
  name: 'RecipeListPageContainer',
  components: { RecipeListPage },
  data() {
    return {
      searchText: '',
    };
  },
  computed: {
    filteredRecipes(): Recipe[] {
      return filterRecipesByCommaSeparatedText(this.recipes, this.searchText);
    },
    recipes(): Recipe[] {
      return this.$store.state.recipes;
    }
  },
  async created() {
    await this.$store.dispatch('fetchRecipes');
  },
  methods: {
    onSearch(value: string) {
      this.searchText = value;
    }
  },
});
</script>
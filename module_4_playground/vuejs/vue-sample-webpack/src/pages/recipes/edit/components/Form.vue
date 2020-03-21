<template>
  <form>
    <v-container>
      <v-layout row>
        <v-text-field
          label="Name"
          :value="recipe.name"
          :rules="[resultRecipeError]"
          @input="name => onUpdateRecipe('name', name)"
        />
      </v-layout>

      <v-layout column>
        <v-text-field
          label="Ingredients"
          placeholder="Add ingredient"
          append-icon="add"
          v-model="ingredient"
          @click:append="() => onAddIngredient(ingredient)"
        />
        <ingredient-list-component
          v-bind="{ ingredients: recipe.ingredients, onRemoveIngredient }"
        />
      </v-layout>
      <v-alert
        :value="!recipeError.ingredients.succeeded"
        color="error"
        outline
      >{{recipeError.ingredients.errorMessage}}</v-alert>

      <v-layout row>
        <v-textarea 
          placeholder="Description..."
          rows="10"
          :value="recipe.description"
          :no-resize="true"
          @input="(value) => onUpdateRecipe('description', value)"
        />
      </v-layout>

      <v-layout row justify-end>
        <v-btn type="button" color="success" @click.prevent="onSave">Save</v-btn>
      </v-layout>
    </v-container>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import { FormProps } from '../formProps';
import IngredientListComponent from './IngredientList.vue';

export default Vue.extend({
  name: 'FormComponent',
  components: { IngredientListComponent },
  data() {
    return {
      ingredient: "",
    }
  },
  computed: {
    resultRecipeError(): boolean | string {
      return this.recipeError.name.succeeded || this.recipeError.name.errorMessage;
    },
  },
  props: {
    recipe: {},
    recipeError: {},
    onUpdateRecipe: {},
    onSave: {},
    onRemoveIngredient: {},
    onAddIngredient: {},
  } as FormProps,
});
</script>
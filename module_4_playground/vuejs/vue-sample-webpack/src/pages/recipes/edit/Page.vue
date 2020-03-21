<template>
  <form-component
    :recipe="recipe"
    :recipe-error="recipeError"
    :on-update-recipe="onUpdateRecipe"
    :on-save="onSave"
    :on-remove-ingredient="onRemoveIngredient"
    :on-add-ingredient="onAddIngredient"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import { FormProps } from "./formProps";
import { FormComponent } from './components';

export default Vue.extend({
  name: 'RecipeEditPage',
  components: { FormComponent },
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
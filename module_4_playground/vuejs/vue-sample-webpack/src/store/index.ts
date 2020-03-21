import Vue from 'vue';
import Vuex from 'vuex';
import { RootState, Recipe, Snackbar } from "./model";
import { fetchRecipes } from "../rest-api/api/recipe";

// Antes de exportar el store le decimos a Vue que deberá usarlo
Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  strict: true,
  state: {
    loading: false,
    recipes: [],
    snackbar: {
      message: '',
      isActive: false,
      type: undefined,
    },
  },
  mutations: { // CÓDIGO SÍNCRONO
    setLoading: function(state, payload: { loading: boolean }) {
      state.loading = payload.loading;
    },
    setSnackbar: function(state, payload: { snackbar: Snackbar }) {
      const { message, isActive, type } = payload.snackbar;
      state.snackbar = {
        message,
        isActive,
        type: type || 'success',
      };
    },
    addRecipes: function(state, payload: { recipes: Recipe[]}) {
      state.recipes = [...state.recipes, ...payload.recipes]
    }
  },
  actions: { // CÓDIGO ASÍNCRONO O SÍNCRONO
    showSnackbar: function(context, payload: { snackbar: Snackbar }) {
      context.commit('setSnackbar', { snackbar: {...payload.snackbar, isActive: true } })

      setTimeout(() => {
        context.commit('setSnackbar', { snackbar: {...payload.snackbar, isActive: false } })
      }, 3000);
    },
    fetchRecipes: function(context) { // <= $store { commit, dispatch, state, getters }
      
      context.commit('setLoading', { loading: true }); // Activate spinner
      return fetchRecipes()
        .then(recipes => context.commit('addRecipes', { recipes }))
        .catch(error => {
          context.dispatch('showSnackbar', {
            snackbar: {
              message: error,
              type: 'error',
            }
          });
        })
        .finally(()=> context.commit('setLoading', { loading: false })); // Deactivate spinner
    },
  }
});
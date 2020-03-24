import Vue from 'vue';
import Vuex from 'vuex';
import { RootState } from "./model";
import { Member } from "../model/member";
import { getAllMembers } from "../api/memberAPI";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  strict: true,
  state: {
    loading: false,
    members: [],
  },
  mutations: {
    setLoading: function(state, payload: { loading: boolean }) {
      state.loading = payload.loading;
    },
    setMembers: function(state, payload: { members: Member[] }) {
      state.members = payload.members;
    }
  },
  actions: {
    getAllMembers: function(context, payload: { organization: string }) {
      context.commit('setLoading', { loading: true }); //Activate spinner
      return getAllMembers(payload.organization)
        .then(members => context.commit('setMembers', { members }))
        .catch(() => context.commit('setMembers', { members: [] }))
        .finally(()=> context.commit('setLoading', { loading: false })); // Deactivate spinner
    },
  },
});
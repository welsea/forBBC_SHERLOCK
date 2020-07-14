import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    note:[],
    notes:[]
  },
  mutations:{
      ADD_NOTE(state,payload){
          const { note }=payload;
          state.notes.push(note);
      }
  }
})

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const API_BASE = 'http://localhost:3000/api/v1';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    note:{},
    notes:[],
    img:{},
    imgs:[]
  },
  mutations:{
      ADD_NOTE(state,payload){
          const { note }=payload;
          state.notes.push(note);
      },
      ALL_NOTES(state,payload){
        const { notes }=payload;

        state.notes=notes;
      }

  },
  getters:{
    allNotes(state){
      return state.notes;
    }
  },
  actions:{
    allNotes({ commit }){
      axios.get(`${API_BASE}/notes`).then(response=>{
        console.log('response',response);
        commit('ALL_NOTES',{
          notes:response.data,
        })
      })
    },
    addNote({commit},payload){
      const{ note }=payload;

      axios.post(`${API_BASE}/notes`,note).then(response=>{
        console.log('response',response);
        commit('ADD_NOTE',{
          note:response.data,
        })
      })
    }
  }
})

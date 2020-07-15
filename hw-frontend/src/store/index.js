import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const API_BASE = 'http://localhost:3000/api/v1';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    //版务
    note:{},
    notes:[],
    //图
    img:{},
    imgs:[],
    //文
    fic:{},
    fics:[],
    //视频
    video:{},
    videos:[],
    //留言
    msg:{},
    msgs:[],

  },
  mutations:{
      ADD_NOTE(state,payload){
          const { note }=payload;
          state.notes.push(note);
      },
      ALL_NOTES(state,payload){
        const { notes }=payload;

        state.notes=notes;
      },

      //图
      ALL_IMGS(state,payload){
        const { imgs }=payload;
        state.imgs=imgs;
      },
      ADD_IMG(state,payload){
        const { img }=payload;
        state.notes.push(img);
      },

      //fic
      ALL_FICS(state,payload){
        const { fics }=payload;
        state.fics=fics;
      },

      //video
      ALL_VIDEOS(state,payload){
        const { videos }=payload;
        state.videos=videos;
      },
  },
  getters:{
    allNotes(state){
      return state.notes;
    },
    allImgs(state){
      return state.imgs;
    },
    allFics(state){
      return state.fics;
    },
    allVideos(state){
      return state.videos;
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
    },
    allImgs({ commit }){
      axios.get(`${API_BASE}/imgs`).then(response=>{
        console.log('response',response);
        commit('ALL_IMGS',{
          imgs:response.data,
        })
      })
    },
    allImgsSort({commit},payload){
      axios.get(`${API_BASE}/imgs/sort`).then(response=>{
        console.log('response',response);
        commit('ALL_IMGS',{
          imgs:response.data,
        })
      })  
    },
    allFics({ commit }){
      axios.get(`${API_BASE}/fics`).then(response=>{
        console.log('response',response);
        commit('ALL_FICS',{
          fics:response.data,
        })
      })
    },
    allFicsSort({commit},payload){
      axios.get(`${API_BASE}/fics/sort`).then(response=>{
        console.log('response',response);
        commit('ALL_FICS',{
          fics:response.data,
        })
      })  
    },
    allVideos({ commit }){
      axios.get(`${API_BASE}/videos`).then(response=>{
        console.log('response',response);
        commit('ALL_VIDEOS',{
          videos:response.data,
        })
      })
    },
    allVideosSort({commit},payload){
      axios.get(`${API_BASE}/videos/sort`).then(response=>{
        console.log('response',response);
        commit('ALL_VIDEOS',{
          videos:response.data,
        })
      })  
    }
  }
})

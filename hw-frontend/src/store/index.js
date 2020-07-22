import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const API_BASE = 'http://localhost:3000/api/v1';
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    //版务
    note: {},
    notes: [],
    //图
    img: {},
    imgs: [],
    //文
    fic: {},
    fics: [],
    //视频
    video: {},
    videos: [],
    //留言
    msg: {},
    msgs: [],

  },
  mutations: {
    ADD_NOTE(state, payload) {
      const {
        note
      } = payload;
      state.notes.push(note);
    },
    ALL_NOTES(state, payload) {
      const {
        notes
      } = payload;

      state.notes = notes;
    },

    //图
    ALL_IMGS(state, payload) {
      const {
        imgs
      } = payload;
      state.imgs = imgs;
    },
    ADD_IMG(state, payload) {
      const {
        img
      } = payload;
      state.imgs.push(img);
    },
    IMG_BY_ID(state, payload) {
      const {
        img
      } = payload;
      state.product = img;
    },

    //fic
    ALL_FICS(state, payload) {
      const {
        fics
      } = payload;
      state.fics = fics;
    },
    ADD_FIC(state, payload) {
      const {
        fic
      } = payload;
      state.fics.push(fic);
    },
    FIC_BY_ID(state, payload) {
      const {
        fic
      } = payload;
      state.product = fic;
    },

    //video
    ALL_VIDEOS(state, payload) {
      const {
        videos
      } = payload;
      state.videos = videos;
    },
    ADD_VIDEO(state, payload) {
      const {
        video
      } = payload;
      state.videos.push(video);
    },

    //MSG
    ALL_MSGS(state, payload) {
      const {
        msgs
      } = payload;
      state.msgs = msgs;
    },
    ADD_MSG(state, payload) {
      const {
        msg
      } = payload;
      state.msgs.push(msg);
    },
  },
  getters: {
    allNotes(state) {
      return state.notes;
    },
    allImgs(state) {
      return state.imgs;
    },
    imgById: (state, getters) => id => {
      if (getters.allImgs.length > 0) {
        return getters.allImgs.filter(img => img._id === id)[0]
      } else {
        return state.img;
      }

    },
    allFics(state) {
      return state.fics;
    },
    allVideos(state) {
      return state.videos;
    },
    allMsgs(state) {
      return state.msgs;
    },

  },
  actions: {
    allNotes({
      commit
    }) {
      axios.get(`${API_BASE}/notes`).then(response => {
        console.log('response', response);
        commit('ALL_NOTES', {
          notes: response.data,
        })
      })
    },
    addNote({
      commit
    }, payload) {
      const {
        note
      } = payload;

      axios.post(`${API_BASE}/notes`, note).then(response => {
        console.log('response', response);
        commit('ADD_NOTE', {
          note: response.data,
        })
      })
    },

    //img
    allImgs({
      commit
    }) {
      axios.get(`${API_BASE}/imgs`).then(response => {
        console.log('response', response);
        commit('ALL_IMGS', {
          imgs: response.data,
        })
      })
    },
    allImgsSort({
      commit
    }, payload) {
      axios.get(`${API_BASE}/imgs/sort`).then(response => {
        console.log('response', response);
        commit('ALL_IMGS', {
          imgs: response.data,
        })
      })
    },
    limitImgs({
      commit
    }, payload) {
      axios.get(`${API_BASE}/imgs/commend`).then(response => {
        console.log('response', response);
        commit('ALL_IMGS', {
          imgs: response.data,
        })
      })
    },
    imgById({
      commit
    }, payload) {
      const { id } = payload;
      axios.get(`${API_BASE}/img?id=${id}`).then(response => {
        commit('IMG_BY_ID', {
          img: response.data
        });
      })
    },
    findImgs({
      commit
    }, payload){
      const { kw } = payload;
      axios.get(`${API_BASE}/imgs/find?kw=${kw}`).then(response => {
        commit('ALL_IMGS', {
          imgs: response.data
        });
      })
    },

    //fic
    allFics({
      commit
    }) {
      axios.get(`${API_BASE}/fics`).then(response => {
        console.log('response', response);
        commit('ALL_FICS', {
          fics: response.data,
        })
      })
    },
    allFicsSort({
      commit
    }, payload) {
      axios.get(`${API_BASE}/fics/sort`).then(response => {
        console.log('response', response);
        commit('ALL_FICS', {
          fics: response.data,
        })
      })
    },
    limitFics({
      commit
    }, payload) {
      axios.get(`${API_BASE}/fics/commend`).then(response => {
        console.log('response', response);
        commit('ALL_FICS', {
          fics: response.data,
        })
      })
    },
    findFics({
      commit
    }, payload){
      const { kw } = payload;
      axios.get(`${API_BASE}/fics/find?kw=${kw}`).then(response => {
        commit('ALL_FICS', {
          fics: response.data
        });
      })
    },

    //video
    allVideos({
      commit
    }) {
      axios.get(`${API_BASE}/videos`).then(response => {
        console.log('response', response);
        commit('ALL_VIDEOS', {
          videos: response.data,
        })
      })
    },
    allVideosSort({
      commit
    }, payload) {
      axios.get(`${API_BASE}/videos/sort`).then(response => {
        console.log('response', response);
        commit('ALL_VIDEOS', {
          videos: response.data,
        })
      })
    },
    limitVideos({
      commit
    }, payload) {
      axios.get(`${API_BASE}/videos/commend`).then(response => {
        console.log('response', response);
        commit('ALL_VIDEOS', {
          videos: response.data,
        })
      })
    },
    findVideos({
      commit
    }, payload){
      const { kw } = payload;
      axios.get(`${API_BASE}/videos/find?kw=${kw}`).then(response => {
        commit('ALL_VIDEOS', {
          videos: response.data
        });
      })
    },

    //msg
    allMsgs({
      commit
    }) {
      axios.get(`${API_BASE}/msgs`).then(response => {
        console.log('response', response);
        commit('ALL_MSGS', {
          msgs: response.data,
        })
      })
    },
    allMsgsSort({
      commit
    }, payload) {
      axios.get(`${API_BASE}/msgs/sort`).then(response => {
        console.log('response', response);
        commit('ALL_MSGS', {
          msgs: response.data,
        })
      })
    },
    limitMsgs({
      commit
    }, payload) {
      axios.get(`${API_BASE}/msgs/commend`).then(response => {
        console.log('response', response);
        commit('ALL_MSGS', {
          msgs: response.data,
        })
      })
    },
    addMsg({
      commit
    }, payload) {
      const {
        msg
      } = payload;

      axios.post(`${API_BASE}/msgs`, msg).then(response => {
        console.log('response', response);
        commit('ADD_MSG', {
          msg: response.data,
        })
      })
    },
  }
})

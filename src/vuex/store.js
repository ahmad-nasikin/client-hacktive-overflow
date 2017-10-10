import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/'

Vue.use(Vuex)
const http = axios.create({
  baseURL: 'http://localhost:3000'
})

const state = {
  questions: [],
  questionbyid: {},
  userQuestion: '',
  userAnswer: '',
  registerUser: {},
  loginUser: ''
}

const mutations = {
  setToken (state, payload) {
    state.token = payload
  },
  setQuestions(state, payload) {
    state.questions = payload
  },
  register(state, payload) {
    state.registerUser = payload
  },
  login(state, payload) {
    state.loginUser = payload
  },
  clearState (state) {
    localStorage.clear()
  },
}

const actions = {
  getAllQuestions ({ commit }) {
    http.get('/questions')
    .then(response => {
      commit('setQuestions', response.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  register({commit}, formRegister) {
    http.post('/register', formRegister)
      .then(({data}) => {
        console.log('data register', data)
        commit('register', {
          data: data
        })
        formRegister = {}
      })
      .catch(err => {
        console.error(err)
      })
  },
  loginUser ({ commit }, payload) {
    http.post('/login', {
      username: payload.username,
      password: payload.password
    })
    .then(response => {
      console.log('ini respon', response)
      console.log('token', response.data.token)
      if (response.data.token == null) {
        alert('Password Salah Atau Username Tidak Ada')
      } else {
        localStorage.setItem('token', response.data.token)
      }
    })
    .catch(err => {
      console.log(err)
    })
  },
  logout ({ commit }) {
    commit('clearState')
    // this.$router.push({ path: '/login'})
  },
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store

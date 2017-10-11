import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/'

Vue.use(Vuex)
const http = axios.create({
  baseURL: 'http://localhost:3000'
  // baseURL: 'http://35.187.251.216'
})

const state = {
  questions: [],
  questionbyid: {},
  // userQuestion: [],
  userAnswer: [],
  registerUser: {},
  loginUser: ''
}

const mutations = {
  setToken (state, payload) {
    state.token = payload
  },
  setAllQuestions(state, payload) {
    state.questions = payload
  },
  setQuestions(state, payload) {
    console.log('set', payload)
    state.questionbyid = payload
  },
  setCreateQuestion(state, payload) {
    state.questions.push(payload)
    state.userQuestion = payload
  },
  setCreateAnswer(state, payload) {
    state.questionbyid.answer.push(payload)
    state.userAnswer = payload
  },
  deleteQuestion(state, payload) {
    console.log('payload', payload)
    let idx =state.questions.findIndex((question) => question.id === payload)
    state.questions.splice(idx, 1)
  },
  register(state, payload) {
    state.registerUser = payload
  },
  login(state, payload) {
    state.loginUser = payload
  },
  clearState (state) {
    localStorage.clear()
  }
}

const actions = {
  getAllQuestions ({ commit }) {
    http.get('/questions')
    .then(response => {
      commit('setAllQuestions', response.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  getOneQuestion ({ commit }, id) {
    console.log('id', id)
    http.get(`/questions/${id}`)
    .then(response => {
      console.log('respon', response)
      commit('setQuestions', response.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  createQuestion (context, payload) {
    http.post('/questions', payload, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(response => {
      console.log('create questions', response.data)
      context.commit('setCreateQuestion', response.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  createAnswer (context, payload) {
    console.log('answer', payload)
    http.post(`/answer/${payload.id}`, payload, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(response => {
      console.log('create answer', response.data)
      context.commit('setCreateAnswer', response.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  deleteQuestion ({ commit }, question) {
    console.log('question', question)
    http.delete(`/questions/` + question._id, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(response => {
      commit('deleteQuestion', question._id)
    })
    .catch(err => {
      console.log(err)
    })
  },
  editQuestion ({commit}, question) {
    http.put(`/questions/${question.id}`, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(({ data }) => {
      console.log('question berhasil update')
    })
    .catch(err => console.error(err))
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

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
  setQuestions(state, payload) {
    console.log('data mutations', payload)
    state.questions = payload
  },
  register(state, payload) {
    state.registerUser = payload
  },
  login(state, payload) {
    state.loginUser = payload
  }
}

const actions = {
  getAllQuestions({commit}) {
    http.get('/questions')
      .then(response => {
        console.log('respon pertama', response.data)
        http.get('/users')
          .then(responseUser => {
            console.log('respon User', responseUser.data[0].id)
            for (let i = 0; i < response.data.length; i++) {
              for (let j = 0; j < responseUser.data.length; j++) {
                if (response.data[i].UserId === responseUser.data[j].id) {
                  response.data[i]['name'] = responseUser.data[j].fullname
                }
              }
            }
            commit('setQuestions', response.data)
            console.log('set question', response.data)
          })
      })
      .catch(err => {
        console.error(err)
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
  login({commit}, formLogin) {
    http.post('/login', formLogin)
      .then(({data}) => {
        console.log('data pertama', data)
        if (typeof(data) === 'object') {
          let token = JSON.stringify(data)
          commit('login', token)
          localStorage.setItem('token', token)
          router.push('/')
        } else {
          commit('login', data)
        }
      })
      .catch(err => {
        console.error(err)
      })
  }  
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store

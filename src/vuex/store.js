import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/'

Vue.use(Vuex)
const http = axios.create({
  baseURL: 'http://localhost:3000'
})

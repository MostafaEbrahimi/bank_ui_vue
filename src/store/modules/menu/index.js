import * as types from '../../mutation-types'
// import statistics from './statistics'
// import forms from './forms'
// import dashboard from './dashboard'
// import ui from './ui'
// import maps from './maps'
// import tables from './tables'
// import auth from './auth'
import admin from './admin'
import employe from './employe'
import hesabhayeriali from './hesabhayeriali'
// import extra from './extra'
import VueLocalStorage from 'vue-localstorage'
import Vue from 'vue'

Vue.use(VueLocalStorage)
let role = Vue.localStorage.get('role', 'admin')
console.log(role)
var state1 = []
if (role === 'customer') {
  state1 = {
    items: [
      hesabhayeriali
    ]
  }
} else if (role === 'admin') {
  state1 = {
    items: [
      admin
    ]
  }
} else if (role === 'employee') {
  state1 = {
    items: [
      employe
    ]
  }
}
const state = state1


const mutations = {
  [types.TOGGLE_EXPAND_MENU_ITEM] (state, payload) {
    let menuItem = payload.menuItem
    let expand = payload.expand
    if (menuItem.children && menuItem.meta) {
      menuItem.meta.expanded = expand
    }
  }
}

const actions = {
  toggleExpandMenuItem ({commit}, payload) {
    commit(types.TOGGLE_EXPAND_MENU_ITEM, payload)
  }
}

export default {
  state,
  mutations,
  actions
}

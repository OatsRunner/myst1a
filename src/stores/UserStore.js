import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state: {
      user: null
    },
    // ...
})
export default store

export default {
    login ({ commit }, user) {
      return axios.post('/api/login', user).then(response => {
        if (response.status === 200 && response.data.success) {
          commit('setUser', response.data.user)
          return true
        } else {
          throw new Error('Login failed!')
        }
      })
    },
    // ...
}

export default {
    setUser (state, user) {
      state.user = user
    },
    // ...
  }
  

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['currentUser']),
    // ...
  },
  // ...
}

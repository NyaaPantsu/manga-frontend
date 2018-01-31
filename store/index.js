
export const state = () => ({
  sidebar: false,
  nsfw: false,
  user: false,
  extended: false,
  username: null,
  token: null,
  show: false
})

export const mutations = {
  show (state, show) {
    state.show = show
  },
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  toggleNsfw (state) {
    state.nsfw = !state.nsfw
  },
  username (state, username) {
    state.username = username
  },
  token (state, token) {
    state.token = token
  },
  user (state, user) {
    state.user = user
  },
  extended (state, extended) {
    state.extended = extended
  }
}

export const actions = {
  async nuxtServerInit ({
    commit
  }, {
    req
  }) {
    console.log('server init')
  }
}

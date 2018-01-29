export const state = () => ({
  success: [],
  warn: [],
  error: [],
  info: []
})

export const mutations = {
  addAlert (state, {
    atype,
    alert
  }) {
    state[atype].push(alert)
  },
  removeAlert (state, {
    atype,
    alertIndex
  }) {
    state[atype] = state[atype].splice(alertIndex, 1)
  },
  clearAlert (state, atype) {
    state[atype] = []
  },
  consumeAlert ({ state, commit }, {
    atype,
    alertIndex
  }) {
    // error handling -- non-number type is error state
    if (typeof state[atype][alertIndex].remainingCount !== 'number') {
      commit('removeAlert', {
        atype,
        alertIndex
      })
    }
    // if not persistent alert
    if (state[atype][alertIndex].remainingCount !== -1) {
      state[atype][alertIndex].remainingCount -= 1
      // if no remainingCount left, remove
      if (state[atype][alertIndex].remainingCount === 0) {
        commit('removeAlert', {
          atype,
          alertIndex
        })
      }
    }
  }
}

export const actions = {
  getAlerts ({ state, commit }) {
    let alerts = []
    for (let atype of ['success', 'warn', 'info', 'error']) {
      for (let alertIndex in state[atype]) {
        if (typeof state[atype][alertIndex] === 'string') {
          alerts.push({
            text: state[atype][alertIndex],
            remainingCount: 1,
            type: atype
          })
        } else if (typeof state[atype][alertIndex] === 'object') {
          alerts.push({
            ...state[atype][alertIndex],
            type: atype
          })
        } else {
          // error state
        }
        commit('consumeAlert', {
          atype,
          alertIndex
        })
      }
    }
  }
}

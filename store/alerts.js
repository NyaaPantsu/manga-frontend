export const state = () => ({
  success: [],
  warn: [],
  error: [],
  info: []
})

export const mutations = {
  addAlert (state, alert) {
    if (typeof alert.alert === 'string') {
      state[alert.type].push({
        text: alert.alert,
        remainingCount: 1,
        type: alert.type
      })
    } else if (typeof alert.alert === 'object') {
      state[alert.type].push({
        ...alert.alert,
        type: alert.type
      })
    } else {
      // error state
    }
  },
  removeAlert (state, alert) {
    state[alert.type] = state[alert.type].splice(alert.index, 1)
  },
  clearAlert (state, type) {
    state[type] = []
  },
  decrementAlertRemainingCount (state, alert) {
    state[alert.type][alert.index].remainingCount -= 1
  }
}

export const actions = {
  consumeAlert (store, alert) {
    // error handling -- non-number type is error state
    if (typeof store.state[alert.type][alert.index].remainingCount !== 'number') {
      store.commit('removeAlert', alert)
      return
    }
    // if not persistent alert
    if (store.state[alert.type][alert.index].remainingCount !== -1) {
      store.commit('decrementAlertRemainingCount', { type: alert.type, index: alert.index })
      // if no remainingCount left, remove
      if (store.state[alert.type][alert.index].remainingCount === 0) {
        store.commit('removeAlert', alert)
      }
    }
  },
  async getAlerts (store) {
    let alerts = []
    for (let atype of ['success', 'warn', 'info', 'error']) {
      for (let alertIndex in store.state[atype]) {
        if (typeof store.state[atype][alertIndex] === 'object') {
          alerts.push({
            ...store.state[atype][alertIndex],
            type: atype
          })
        } else {
          // error state
        }
        store.dispatch('consumeAlert', { type: atype, index: alertIndex })
      }
    }
    return alerts
  }
}

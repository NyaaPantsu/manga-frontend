export const state = () => ({
  success: [],
  warn: [],
  error: [],
  info: []
})

export const mutations = {
  addAlert (state, alert) {
    state[alert.type].push(alert.alert)
  },
  removeAlert (state, alert) {
    state[alert.type] = state[alert.type].splice(alert.index, 1)
  },
  clearAlert (state, type) {
    state[type] = []
  },
  consumeAlert (store, alert) {
    // error handling -- non-number type is error store.state
    if (typeof store.state[alert.type][alert.index].remainingCount !== 'number') {
      store.commit('removeAlert', alert)
    }
    // if not persistent alert
    if (store.state[alert.type][alert.index].remainingCount !== -1) {
      store.state[alert.type][alert.index].remainingCount -= 1
      // if no remainingCount left, remove
      if (store.state[alert.type][alert.index].remainingCount === 0) {
        store.commit('removeAlert', alert)
      }
    }
  }
}

export const actions = {
  getAlerts (store) {
    let alerts = []
    for (let atype of ['success', 'warn', 'info', 'error']) {
      for (let alertIndex in store.state[atype]) {
        if (typeof store.state[atype][alertIndex] === 'string') {
          alerts.push({
            text: store.state[atype][alertIndex],
            remainingCount: 1,
            type: atype
          })
        } else if (typeof store.state[atype][alertIndex] === 'object') {
          alerts.push({
            ...store.state[atype][alertIndex],
            type: atype
          })
        } else {
          // error state
        }
        store.commit('consumeAlert', { type: atype, index: alertIndex })
      }
    }
    return alerts
  }
}

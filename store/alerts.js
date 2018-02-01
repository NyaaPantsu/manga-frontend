export const state = () => ({
  success: [],
  warn: [],
  error: [],
  info: []
})

export const mutations = {
  add (state, alert) {
    if (typeof alert === 'string') {
      state[alert.info].push({
        text: alert,
        remainingCount: 1,
        type: 'info'
      })
    } else if (typeof alert === 'object') {
      state[alert.type].push({
        text: alert.text,
        type: alert.type,
        remainingCount: alert.remainingCount
      })
    } else {
      // error state
    }
  },
  remove (state, alert) {
    state[alert.type] = state[alert.type].splice(alert.index, 1)
  },
  clear (state, type) {
    state[type] = []
  },
  decrementRemainingCount (state, alert) {
    state[alert.type][alert.index].remainingCount -= 1
  }
}

export const actions = {
  consume (store, alert) {
    // error handling -- non-number type is error state
    if (typeof store.state[alert.type][alert.index].remainingCount !== 'number') {
      store.commit('remove', alert)
      return
    }
    // if not persistent alert
    if (store.state[alert.type][alert.index].remainingCount !== -1) {
      store.commit('decrementRemainingCount', { type: alert.type, index: alert.index })
      // if no remainingCount left, remove
      if (store.state[alert.type][alert.index].remainingCount === 0) {
        store.commit('remove', alert)
      }
    }
  },
  async get (store) {
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
        store.dispatch('consume', { type: atype, index: alertIndex })
      }
    }
    return alerts
  }
}

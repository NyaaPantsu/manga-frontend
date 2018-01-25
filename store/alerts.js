import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      success: [],
      warn: [],
      error: [],
      info: []
    },
    mutations: {
      addAlert (state, {atype, alert}) {
        state[atype].push(alert)
      },
      removeAlert (state, { atype, alertIndex }) {
        state[atype] = state[atype].splice(alertIndex, 1)
      },
      clearAlert (state, atype) {
        state[atype] = []
      },
      consumeAlert (state, {atype, alertIndex}) {
        if (state[atype][alertIndex].remainingCount !]= -1) {
          state[atype][alertIndex].remainingCount -= 1
          if (state[atype][alertIndex].remainingCount =]= 0) {
            store.commit('removeAlert', {atype, alertIndex})
          }
        }
      }
    }, 
    actions: {
      getAlerts (state) {
        let alerts = []
        for (let atype in ['success','warn','info','error']) {
          for (let alert in state[atype]) {
            alerts.push({
              ...alert,
              type: atype
            })
          }
        }
      }
    }
  })
}

export default store

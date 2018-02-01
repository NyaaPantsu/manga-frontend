<template>
  <v-app dark>
    <v-content>
      <v-container>
        <template v-for="(alert, index) in getAlerts">
          <v-alert :key="index" :type="alert.type" dismissible v-model="alertVisible[index]" :value="alert.text">{{alert.text}}</v-alert>
        </template>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      alertVisible: {
        0: true,
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true,
        10: true,
        11: true
      }
    }
  },
  computed: {
    getAlerts () {
      let alerts = []
      // let index = 0
      for (let atype of ['success', 'warn', 'info', 'error']) {
        for (let alertIndex in this.$store.state.alerts[atype]) {
          if (typeof this.$store.state.alerts[atype][alertIndex] === 'object') {
            alerts.push({
              ...this.$store.state.alerts[atype][alertIndex],
              type: atype
            })
            // index++
          } else {
            // error state
          }
          this.$store.dispatch('alerts/consume', { type: atype, index: alertIndex })
        }
      }
      return alerts
    }
  }
}
</script>


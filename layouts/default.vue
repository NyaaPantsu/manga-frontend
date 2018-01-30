<template>
  <v-app dark>
    <v-content>
      <v-container>
        <template v-for="alert in getAlerts">
          <v-alert :key="alert" :type="alert.type" dismissible :value="alert.text">{{alert.text}}</v-alert>
        </template>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',

  computed: {
    getAlerts () {
      let alerts = []
      for (let atype of ['success', 'warn', 'info', 'error']) {
        for (let alertIndex in this.$store.state.alerts[atype]) {
          if (typeof this.$store.state.alerts[atype][alertIndex] === 'object') {
            alerts.push({
              ...this.$store.state.alerts[atype][alertIndex],
              type: atype
            })
          } else {
            // error state
          }
          this.$store.dispatch('consumeAlert', { type: atype, index: alertIndex })
        }
      }
      return alerts
    }
  }
}
</script>


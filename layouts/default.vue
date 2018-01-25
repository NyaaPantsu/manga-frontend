<template>
  <v-app dark>
    <v-content>
      <v-container>
        <template v-for="alert in $store.disptach('getAlerts')">
          <v-alert :key="alert" :type="alert.type" :value="alert.text" />
        </template>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>
  

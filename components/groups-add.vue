<template>
  <div>
    <v-form>
      <v-text-field label="Name" v-model="name" required></v-text-field>
      <v-text-field label="Description" v-model="description" required></v-text-field>
      <v-text-field label="Urls" v-model="urls" required></v-text-field>
      <v-btn @click="submit">
        submit
      </v-btn>
    </v-form>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        name: '',
        description: '',
        urls: '',
        releasedelay: 0
      }
    },
    methods: {
      submit: function (event) {
        var header = 'Bearer ' + this.$store.state.token
        console.log(header)
        this.$axios.$post('/groups_scanlation', JSON.stringify({
          name: this.name,
          description: this.description,
          urls: this.urls,
          releasedelay: this.releasedelay
        }), {
          headers: {
            Authorization: header
          }
        }).then((response) => {
          console.log(response)
        })
      }
    }
  }
</script>
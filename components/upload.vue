<template>
  <div>
        <v-card color="secondary" flat>
      <v-card-text>
      <v-form id="form">
        <v-select
          v-model="name"
          label="Series"
            :loading="loading"
              dark
              cache-items
              required
                :search-input.sync="search"
          autocomplete
          :items="items"
        ></v-select>
          <v-text-field v-model="title" label="Title"></v-text-field>
        
      <v-select v-model="language" label="Language" v-bind:items="this.languages" autocomplete></v-select>
                   <v-select
              v-model="group"
              label="Groups"
            :loading="loadinggroup"
            dark
                :search-input.sync="groupSearch"
              chips
              tags
              autocomplete
              :items="groups"
            ></v-select>
            <v-text-field v-model="volumenumber" label="Volume Number" mask="###"></v-text-field>
            <v-text-field v-model="volumechapternumber" label="Volume Chapter Number" mask="###.###"></v-text-field>
            <v-text-field v-model="absolutenumber" label="Absolute Chapter Number" mask="###.###"></v-text-field>
            <v-text-field v-model="delay" label="Release Delay" mask="###"></v-text-field>
              <input type="file" name="files"/>
      <v-btn @click="submit">
        submit
      </v-btn>
      </v-form>
   </v-card-text>
        </v-card>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      name: '',
      title: '',
      language: '',
      group: [],
      groups: [],
      volumenumber: 0,
      volumechapternumber: 0,
      absolutenumber: 0,
      delay: 0,
      files: '',
      items: [],
      loadinggroup: false,
      search: null,
      groupSearch: null
    }
  },
  props: {
    languages: {
      type: Array,
      required: true
    }
  },
  watch: {
    search (val) {
      val && this.querySelections(val)
    },
    groupSearch (val) {
      val && this.queryGroups(val)
    }
  },
  methods: {
    submit: function (event) {
      var formData = new FormData(document.getElementById('form'))
      formData.append('name', this.name)
      formData.append('title', this.title)
      formData.append('chapternum', this.absolutenumber)
      formData.append('chaptervol', this.volumechapternumber)
      formData.append('volnum', this.volumenumber)
      formData.append('groups', this.group.join())
      formData.append('languages', this.language)
      formData.append('delay', this.delay)
      var header = 'Bearer ' + this.$store.state.token
      this.$axios.$post('/series_chapters', formData, {
        headers: {
          Authorization: header}
      }).then((response) => {
        console.log(response)
      })
    },
    queryGroups (v) {
      this.loadinggroup = true
      // Simulated ajax query
      setTimeout(() => {
        this.$axios.$get('/groups_scanlation?query=Name__icontains:' + v).then((response) => {
          this.groups = response['response'].map(function (item) { return item.Name })
          this.loadinggroup = false
        })
      }, 500)
    },
    querySelections (v) {
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.$axios.$get('/series?query=Name__icontains:' + v).then((response) => {
          this.items = response['response'].map(function (item) { return item.Name })
          this.loading = false
        })
      }, 500)
    }
  }
}
</script>


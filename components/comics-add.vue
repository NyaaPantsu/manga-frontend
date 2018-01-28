<template>
  <div>
    <v-card color="secondary" flat>
      <v-card-text>
      
    <v-form id="form">
      <v-text-field
        label="Name"
        v-model="name"
        name="name"
        require
      ></v-text-field>
      <v-text-field
        label="Description"
        v-model="description"
        name="description"
        require
      ></v-text-field>
       <v-select
              v-model="tags"
              label="Tags"
              chips
              tags
              :items="proptags"
            ></v-select>
        <v-select
              v-model="authors"
              label="Authors"
              chips
              tags
              v-bind:items="propauthors"
            >
            </v-select>
               <v-select
              v-model="artists"
              label="Artists"
              chips
              tags
              :items="propartists"
            ></v-select>
                           <v-select
              v-model="aliases"
              label="Series Aliases"
              chips
              tags
            ></v-select>
      <v-select v-model="statuses" label="Status" v-bind:items="this.status" item-value="text" name="status"></v-select>
      <v-select v-model="typename" label="Type Name" v-bind:items="this.types" item-value="text" name="typename">
      </v-select>
        <v-select v-model="typedemonym" label="Type Demonym" v-bind:items="this.demonyms" item-value="text" name="typedemonym">
      </v-select>
      <v-checkbox label="Mature" v-model="mature" dark name="mature"></v-checkbox>
      <input type="file" name="cover"/>
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
      description: '',
      tags: [],
      authors: [],
      artists: [],
      aliases: [],
      statuses: '',
      typename: '',
      typedemonym: '',
      mature: 0,
      status: [
        { text: 'Ongoing' },
        { text: 'Stalled' },
        { text: 'Discontinued' },
        { text: 'Complete' }
      ],
      types: [
        { text: 'Webcomic' },
        { text: 'Manga' },
        { text: 'Manhwa' }
      ],
      demonyms: [
        { text: 'Japanese' },
        { text: 'Korean' },
        { text: 'Chinese' }
      ]
    }
  },
  props: {
    proptags: {
      type: Array,
      required: true
    },
    propauthors: {
      type: Array,
      required: true
    },
    propartists: {
      type: Array,
      required: true
    }
  },
  methods: {
    submit: function (event) {
      var formData = new FormData(document.getElementById('form'))
      formData.append('status', this.statuses)
      formData.append('typedemonym', this.typedemonym)
      formData.append('typename', this.typename)
      formData.append('mature', this.mature)
      formData.append('tags', this.tags.join())
      formData.append('artists', this.artists.join())
      formData.append('authors', this.authors.join())
      for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }
      var header = 'Bearer ' + this.$store.state.token
      this.$axios.$post('/series', formData, {
        headers: {
          Authorization: header}
      }).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>

<template>
<div>
   <v-layout>
    <v-flex xs12>
      <v-layout column>
        <v-flex xs5>
            <img style="float: left; padding: 3px;" src=""/>
        </v-flex>
        <v-flex xs7>
          <v-layout row>


          </v-layout>
        </v-flex>
        <v-layout row>
                      <v-btn flat icon color="pink">
              <v-icon>favorite</v-icon>
            </v-btn>
                       <v-btn flat icon color="indigo">
              <v-icon>star</v-icon>
            </v-btn> 

        </v-layout>
       
      </v-layout>
    </v-flex>
    
  </v-layout> 
    <v-layout row>
    <v-flex xs12>
      <v-layout row>
        <v-toolbar dark color="blue-grey darken-3" class="pa-0">
          <v-toolbar-title class="white--text">Latest Updates</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>apps</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>list</v-icon>
          </v-btn>
        </v-toolbar>
      </v-layout>

      <v-layout class="pa-1">
        <v-flex style="flex: 0 0 50px">
        </v-flex>
        <v-flex xs8 sm6 class="px-2" id="title" @click="search">
          Title
        </v-flex>
        <v-flex xs4 hidden-xs-only>
          Group
        </v-flex>
        <v-flex xs4 sm2 id="title" @click="search">
          Language
        </v-flex>
        <v-flex xs4 sm2 id="title" @click="search">
          Date
        </v-flex>
      </v-layout>

      <v-layout row class="px-2">
        <v-flex style="flex: 0 0 50px"></v-flex>
        <v-flex xs12>
          <v-divider ></v-divider>
        </v-flex>
      </v-layout>
      <v-layout row class="px-2" v-for="(item, index) in chapters"
        v-bind:item="item"
        v-bind:index="index"
        v-bind:key="item.id">
        <v-flex style="flex: 0 0 50px">
          <img src="/information.png"/>
        </v-flex>
        <v-flex xs12>
          <v-layout class="pa-1">
            <v-flex xs12>
              <img style="float: left; padding: 3px;" src="/information.png"/> <router-link :to="{ name: 'comics-id', params: { id: item.SeriesId.Id }}">{{ item.SeriesId.Name }}</router-link>
            </v-flex>
          </v-layout>
          <v-divider ></v-divider>
          <v-layout class="pa-1">
            <v-flex xs8 sm6>
              <img style="float: left; padding: 3px 4px;" src="/book_open.png" /> <router-link :to="{ name: 'reader-id', params: { id: item.Hash }}">Vol.1 Ch.2: 2</router-link>
            </v-flex>
            <v-flex xs4 hidden-xs-only>
              {{ item.ContributorId.Username }}
            </v-flex>
            <v-flex xs4 sm2>
              <flag :iso="item.ChapterLanguage.Code" />
            </v-flex>
            <v-flex xs4 sm2>
              <timeago :since="item.TimeUploaded | timestamp"></timeago>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
        </v-flex>
      </v-layout>
    </v-flex>
    </v-layout>
  
</div>
 
  
</template>
<script>
export default {
  name: 'ComicsOne',
  data () {
    return {
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Sodium (mg)', value: 'sodium' },
        { text: 'Calcium (%)', value: 'calcium' },
        { text: 'Iron (%)', value: 'iron' }
      ],
      items: []
    }
  },
  async mounted () {
    var id = this.$route.params.id
    const chapters = await this.$axios.$get('/series_chapters?query=SeriesId.Id:' + id + '&limit=' + this.limit + '&offset=' + this.offset)
    this.items = chapters['response']
    console.log(chapters)
  }
}
</script>

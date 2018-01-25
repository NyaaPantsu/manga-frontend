<template>
<div>
       <v-layout row class="px-2">
        <v-flex xs7>
          <img src="/information.png"/>
        </v-flex>
        <v-flex xs12>
          <v-layout class="pa-1">
            <v-flex xs8 sm6>
              <img style="float: left; padding: 3px 4px;" src="/book_open.png" />
            </v-flex>
            <v-flex xs4 hidden-xs-only>
              test
            </v-flex>
            <v-flex xs4 sm2>
            </v-flex>
            <v-flex xs4 sm2>
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
    this.series = this.items['SeriesId']
    console.log(chapters)
    console.log(this.series)
  }
}
</script>

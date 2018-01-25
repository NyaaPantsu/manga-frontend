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
            <div>test</div>
            <div>test</div>
            <div>test;</div>

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

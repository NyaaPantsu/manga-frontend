<template>
<div>
         <v-card color="secondary" flat>
    <v-card-text>
       <v-layout row class="px-2">

        <v-flex xs3 mb5>
          <img :src="cdn + series.CoverImage" style="max-width:500px; max-height: 500px;"/>
        </v-flex>
        <v-flex xs12>
          <v-layout column class="pa-1">
            <v-flex>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{ this.series.Name }}</h3>
                  <v-chip color="primary" text-color="white" v-for="alias in series.SeriesAliases">{{ alias.Name }}</v-chip>
                </div>
              </v-card-title>
            </v-flex>
            <v-flex v-html="series.Description">
            </v-flex>
            <v-flex>
                <v-chip color="primary" text-color="white" v-for="tag in series.SeriesTags">{{ tag.TagNamespace }}:{{ tag.TagName }}</v-chip>
            </v-flex>
            <v-flex>
              {{ series.SeriesRatings }}
            </v-flex>
            <v-flex>
              <v-chip>{{ series.TypeName }}</v-chip>
              <v-chip>
               {{ series.TypeDemonym }}
              </v-chip>
            </v-flex>
            <v-flex>
            </v-flex> 
          </v-layout>
        </v-flex>

      </v-layout>
      </v-card-text>
      <v-card-actions>
          <v-btn fab dark small color="pink" @click="follow"><v-icon dark>favorite</v-icon></v-btn>
          <v-btn fab dark small color="indigo"><v-icon dark>star</v-icon></v-btn>
          <v-btn fab dark small color="indigo"><v-icon dark>pen</v-icon></v-btn>
          <v-btn fab dark small color="indigo"><v-icon dark>star</v-icon></v-btn>
        </v-card-actions>
      
         </v-card>
</div>
</template>
<script>
export default {
  name: 'ComicsOne',
  data: () => {
    return {
      cdn: '://cdn.manga.sh/covers/'
    }
  },
  props: {
    series: {
      type: Object,
      required: true
    }
  },
  methods: {
    follow: function (event) {
      var header = 'Bearer ' + this.$store.state.token
      this.$axios.$get('/follow/' + this.series.Id, { headers: { Authorization: header }
      }).then((response) => {
        console.log(response)
      })
    },
    rate: function (event) {
    }
  }
}
</script>

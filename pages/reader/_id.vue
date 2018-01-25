<template>
<v-layout>
  <app-header/>
  <reader />

</v-layout>
  
</template>
<script>
import AppHeader from '~/components/header'
import Reader from '~/components/reader'
export default {
  name: 'reader-id',
  components: {
    AppHeader,
    Reader
  }
}
</script>
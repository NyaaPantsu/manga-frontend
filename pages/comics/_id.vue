<template>
<div>
  <div>
    <app-header />
  </div>
  <div>
    <Comics/>  
  </div>
  <div>
    <Table/>
  </div>
</div>
</template>
<script>
import AppHeader from '~/components/header'
import Comics from '~/components/comics'
import Table from '~/components/table'
export default {
  name: 'comics-id',
  components: {
    AppHeader,
    Comics,
    Table
  }
}
</script>
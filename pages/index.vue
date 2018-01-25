<template>
<div>
  <div>
    <AppHeader/>
</div>
<div>
    <Table/>
</div>
</div>


  
</template>
<script>
import AppHeader from '~/components/header'
import Table from '~/components/table'
export default {
  name: 'index',
  components: {
    AppHeader,
    Table
  }
}
</script>

<template>
  <div id="home">
    <Chart/>
    <Firestore />
  </div>
</template>

<script>
  import Chart from '@/components/Chart'
  import Firestore from '@/components/Firestore'
  export default {
    components: {
      Chart,
      Firestore
    }
  }
</script>
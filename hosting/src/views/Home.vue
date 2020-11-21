<template>
  <div id="home">
    <Chart />
    <Firestore />
  </div>
</template>

<script>
  import Firestore from '@/components/Firestore'
  import Chart from '@/components/Chart'
  export default {
    components: {
      Chart,
      Firestore
    }
  }
</script>
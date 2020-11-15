<template>
  <div id="home">
    <Firestore />
  </div>
</template>

<script>
  import Firestore from '@/components/Firestore'
  export default {
    components: {
      Chart,
      Firestore
    }
  }
</script>
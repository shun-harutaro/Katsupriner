<template>
    <div class="share">
        <p>ここに成績表が来ます</p>
        <Score/>
    </div>
</template>

<script>
import Score from '@/components/Score'
export default {
    name: 'share',
    components: {
        Score
    }
}
</script>
<template>
    <div>
        <slides></slides>
        <description></description>
        <portfolio></portfolio>
        <contactform></contactform>
    </div>
</template>
<script>
import slides from './slideshow'
import description from './description'
import portfolio from './portfolio'
import contactform from './contactform'

export default {
    name:'home',
    components:{slides,description,portfolio,contactform}
}
</script>
<style lang="scss" >

</style>
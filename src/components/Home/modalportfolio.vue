<template>
    <div ref="sendform" @click="close">
        <div class="beintouch" @click.stop>
            <img src="/svg/close.svg" alt="close" @click="close" class="close">
            <img :src="'/photos/'+dados.photo" alt="">
            <h2>{{dados.name}}</h2>
            <p>
                {{dados.description}}
            </p>
            <!-- {{dados}} -->
        </div>
    </div>
</template>
<script>
import mixinss from '../../mixins/mixins.js'
export default {
    name:'modalform',
    props: ['dados'],
    mixins:[mixinss],
    methods:{
        open(){
            mixinss.methods.fadeIn(this.$refs.sendform, 0.3, 'flex')
            document.body.style.overflowY = 'hidden'
        },
        close(){
            mixinss.methods.fadeOut(this.$refs.sendform, 0.3, 'none')
            document.body.style.overflowY = 'auto'
        }
    }
}
</script>
<style lang="scss" scoped>
    div{
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 1;
        background-color: rgba($color: #000000, $alpha: 0.6);
        align-items: center;
        justify-content: center;
        flex-direction: row;
        width: 100%;
        height: 100%;
        .beintouch{
            margin-left: 15px;
            margin-right: 15px;
            height: auto;
            border-radius: 3px;
            background-color: white;
            width: -webkit-fill-available;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            overflow: hidden;
            padding: 20px;
            h2{
                text-align: center;
                font-size: 20.8px;
                font-weight: 400;  
            }
            h3{
                text-align: center;
                font-size: 20.8px;
                padding-top: 20px;
                color:#8ec642;
                font-weight: 800;
            }
            img{
                width: 100%;
            }
            .close{
                position: absolute;
                top: 20px;
                right: 20px;
                width: 30px;
                font-weight: 800;
            }
        }
        
    }
</style>
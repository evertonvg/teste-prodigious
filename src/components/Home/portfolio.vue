<template>
    <section>
        <h1>\ PORTFOLIO</h1>
        <button type="button" class="filter">
            {{filter}} <img src="/svg/arrow.svg" alt="">
        </button>
        <div v-for="d in object" :key="d.name" class="item">
            <img :src="'/photos/'+d.photo" alt="">
            <div class="title">
                {{d.name}}  
                <svg xmlns="http://www.w3.org/2000/svg" @click="activetext"
                xmlns:xlink="http://www.w3.org/1999/xlink" 
                aria-hidden="true" focusable="false" width="1em" 
                height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" 
                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M15 2.013H9V9H2v6h7v6.987h6V15h7V9h-7z" :fill="d.color"/></svg>
            </div>
            <p class="textdetail">
                {{d.description}}
            </p>
        </div>
        <div class="loadmore">
            <button type="button" @click="limitbreak">load more</button>
        </div>
    </section>
</template>
<script>
import axios from 'axios'
export default {
    name:'portfolio',
    data(){
        return{
            dados:[],
            filter:'All',
            limit:5
        }
    },
    computed:{
        object(){
            return this.limit ? this.dados.slice(0,this.limit) : this.dados
        }
        
    },
    methods:{
        limitbreak(){
            this.limit = null
        },
        activetext(el){
            console.log(el.target)
        }
    },
    mounted:function(){
        let context = this
        axios.get('/api/portifolio')
        .then(function(res){
            context.dados = res.data.clients
        }).catch(function(error){
            console.log(error)
        })
    }
}
</script>
<style lang="scss" scoped>
    @import "../../styles/variables.scss";
    section{
        padding-top: 40px;
        h1{
            font-size: 25px;
            font-weight: 800;
            margin: 25px 15px;
        }
        .filter{
            width: 100%;
            color: white;
            background-color:$blue;
            padding: 20px 15px;
            font-size: 20.8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: none;
            transition: 0.3s ease all;
            &:hover{
               background-color:#3b6e00; 
            }
            img{
                width: 55px;
                transform:rotate(180deg)
            }
        }
        .loadmore{
            width: 100%;
            background-color: black;
            padding: 25px 15px;
            button{
                border-radius: 3px;
                border: 1px solid $blue;
                color: $blue;
                width: 100%;
                height: 45px;
                background-color: black;
                transition: 0.3s ease all;
                cursor: pointer;
                &:hover{
                    background-color: #001100;
                }
            }
        }
        .item{
            width: 100%; 
            img{
                width: 100%;
                margin: 0;
                padding: 0;
                margin-bottom: -3px;
            } 
            .title{
                margin: 0;
                height: 45px;
                padding: 5px 15px;
                width: 100%;
                background-color: black;
                color: white;
                font-size:16.6px;
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                svg{
                    z-index: 1;
                    position: relative;
                    path{
                        z-index: -1;
                        position: relative;
                    }
                }
            }
            p{
                padding: 0;
                overflow: hidden;
                height: 0;
                transition: 0.3s ease all;
            }
            p.active{
                padding: 15px;
                height: auto;
            }
        }
    }
</style>
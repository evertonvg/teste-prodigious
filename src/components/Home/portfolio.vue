<template>
    <section>
        <h1>\ PORTFOLIO</h1>

        <button type="button" class="filter"  @click="openfiltermethod">
            {{filter}} 
            <img src="/svg/arrow.svg" alt="arrow" :class="{'active': openfilter == true , 'loading' : loading == true }" >
        </button>
            
        <div class="searchitens">
            <div :class="{'active': openfilter == true }" @click="callnewitens">All</div>
            <div v-for="c in categories" :key='c' :class="{'active': openfilter == true }" @click="callnewitens">
                {{c}}
            </div>
        </div>

        <div v-for="d in object" :key="d.name" class="item active">
            <div class="imagebox">
                <img :src="'/photos/'+d.photo" :alt="d.name">
            </div>
            <div class="title" >
                {{d.name}}  
                <button class="titleplus" @click="activemodal(d)">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        xmlns:xlink="http://www.w3.org/1999/xlink" 
                        aria-hidden="true" focusable="false" width="1em" 
                        height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" 
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M15 2.013H9V9H2v6h7v6.987h6V15h7V9h-7z" :fill="d.color"/>
                    </svg>
                </button>
                
            </div>
        </div>
        <div class="loadmore" :class="{'hide': limit>object.length }">
            <button type="button" @click="limitbreak" >{{button}}</button>
        </div>
        <modalportfolio :dados="dataclient" ref="modal"></modalportfolio>
    </section>
</template>

<script>
import axios from 'axios'
import modalportfolio from './modalportfolio'
export default {
    name:'portfolio',
    components:{modalportfolio},
    data(){
        return{
            loaddados:[],
            dados:[],
            filter:'All',
            button:'load more',
            limit:3,
            openfilter: false,
            count:0,
            loading : false,
            dataclient:[]
        }
    },
    computed:{
        object(){
            return this.limit ? this.dados.slice(0,this.limit) : this.dados
        },
        categories(){
            let d = []
            this.loaddados.forEach(function(el){
                if(d.indexOf(el.category)=== -1){
                    d.push(el.category)
                }
            })
            return d.sort()
        }
        
    },
    methods:{
        limitbreak(){
            this.button = 'loading'
            let context = this
            setTimeout(function(){
                context.limit = context.limit+3
                context.button = 'load more'
            },500)
        },
        openfiltermethod(){
            this.openfilter = !this.openfilter
        },
        callnewitens(ev){
            let context = this
            this.openfilter = !this.openfilter
            this.button = 'loading'
            this.filter = 'loading'
            this.loading = true
            this.limit = 3
            setTimeout(function(){
                if(ev.target.innerHTML=='All'){
                    context.dados = context.loaddados
                }else{
                    context.dados = []
                    context.loaddados.forEach(function(element){
                        let c1 = String(element.category).trim()
                        let c2 = String(ev.target.innerHTML).trim()
                        if(c1==c2){
                            context.dados.push(context.loaddados[context.count])
                        }
                        context.count++
                    })
                    context.count = 0
                }
                context.filter = ev.target.innerHTML
                context.loading = false
                context.button = 'load more'                
            },500)
        },
        activemodal(el){
            this.dataclient = el
            this.$refs.modal.open()
        }
    },
    mounted:function(){
        let context = this
        axios.get('/api/portifolio')
        .then(function(res){
            context.loaddados = res.data.clients
            // context.loaddados.forEach(function(el){
            //     el.active = false
            // })
            context.dados = context.loaddados

        }).catch(function(error){
            console.log(error)
        })
    }
}
</script>

<style lang="scss" scoped>
    @import "../../styles/variables.scss";

    @keyframes rotation {
        0%   {transform:rotate(180deg);}
        25%  {transform:rotate(270deg);}
        50%  {transform:rotate(0);}
        100% {transform:rotate(90deg);}
    }

    @keyframes fadeInLeft{
        from{
            transform: translateX(50%)
            opacity 0;
        }
        to{
            transform: translateX(0)
            opacity 1;
        }
    }
      
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
            padding: 15px 15px;
            font-size: 20.8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: none;
            transition: 0.3s ease all;
            cursor: pointer;
            img{
                width: 55px;
                transform:rotate(180deg);
                transition:0.3s ease all;
            }
            img.active{
                transform:rotate(0)
            }
            img.loading{
                animation:rotation 0.5s infinite;
                animation-timing-function: linear;
            }
        }
        .searchitens{
            width: 100%;
            background-color:darkgrey;
            div{
                height: 0;
                overflow: hidden;
                color: white;
                transition: 0.3s ease all;
                cursor: pointer;
                &:hover{
                    background-color:grey;
                }
            }
            div.active{
                height: auto;
                border-bottom: 1px solid white;
                padding: 15px;
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
            float: left;
            transition: 0.3s ease all;
            animation:fadeInLeft 0.3s 0.3s;
            transition: 0.3s ease all;
            .imagebox{
                animation:fadeInLeft 0.3s 0.3s;
                overflow:hidden;
                width: 100%;
                height: 200px;
                background-color: black;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0;
                padding: 0;
                margin-bottom: -3px;
                img{
                    width: 100%;
                    transition: 0.3s ease all;
                    &:hover{
                        transform:scale(1.3)
                    }
                } 
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
                .titleplus{
                    background-color: transparent;
                    border: none;
                    position: relative;
                    z-index: 1;
                    svg{
                        position: relative;
                        z-index: -1;
                        width: 20px;
                        height: 20px;
                    }
                    svg.active{
                        display: block;
                    }
                }

            }

        }
    }
    @media(min-width:600px){
        section{
            margin-top: 40px;
            padding: 0;
            h1{
                margin: 25px 5%;
            }
            .filter{
                padding: 20px 5%;
            }
            .item{
                width: 50%;
                .imagebox{
                    height: 250px;
                }
            }
        }
    }
    @media(min-width:900px){
        section{
            h1{
                margin: 25px 10%;
            }
            .filter{
                padding: 20px 10%;
            }
            .item{
                width: 33.3%;
                .imagebox{
                    height: 300px;
                }
                .title{
                    height: 55px;
                    padding: 10px 15px;
                    font-size: 20.6px;
                    .titleplus{
                        cursor: pointer;
                        svg{
                            width: 30px;
                            height: 30px;
                        }

                    }
                }
            }
        }
    }
    @media(min-width:1500px){
        section{
            .item{
                .imagebox{
                    height: 390px;
                }
                
            }
        }
    }
    .hide{
        display: none;
    }
</style>
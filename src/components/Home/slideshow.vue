<template>
    <section>
        <VueSlickCarousel  v-bind="settings" class="slick-videos" ref="carousel" @afterChange="handleAfterChange" >
            <div v-for="v in videos" :key="v.id" class="item">
                <figure>
                    <a href="javascript:void(0)" class="play-icon">
                        <svg xmlns="http://www.w3.org/2000/svg"   
                            xmlns:xlink="http://www.w3.org/1999/xlink"  
                            aria-hidden="true" focusable="false" 
                            style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" 
                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path @click="playvideo" d="M19 3H5c-1.11 0-2 .89-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2m-9 13V8l5 4" />
                        </svg>
                    </a>
                    <a href="javascript:void(0)" class="max-icon">
                        <svg xmlns="http://www.w3.org/2000/svg"   
                            xmlns:xlink="http://www.w3.org/1999/xlink" 
                            aria-hidden="true" focusable="false" 
                            style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" 
                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50">
                            <path @click="requestfullscreen" d="M2 15.758V2h14.299l5.262 4h-8.769L22 15.758L16.299 21L7 12.251v8.769zM33.752 2H48v13.809l-4 5.261v-8.768L33.997 21.51l-5.364-5.456L37.259 7H28.49zM48 33.752V48H33.701l-5.262-4h8.769L28 33.997l5.701-5.364L43 37.259V28.49zM16.248 48H2V33.701l4-5.262v8.769L16.003 28l5.364 5.701L12.741 43h8.769z" />
                        </svg>
                    </a>
                    <a href="" class="pause-icon">
                        <svg xmlns="http://www.w3.org/2000/svg"   
                            xmlns:xlink="http://www.w3.org/1999/xlink" 
                            aria-hidden="true" focusable="false"  
                            style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" 
                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                            <path @click="pausevideo" d="M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" />
                            <path @click="pausevideo" d="M22 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"  />
                        </svg>
                    </a>
                   

                    <video :src="v.src" type="video/mp4" class="myvideo" :poster="v.thumbnail">
                    </video>

                </figure>
            </div>
        </VueSlickCarousel>
    </section>
</template>
<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
    name:'slides',
    components:{VueSlickCarousel},
    data(){
        return{
            videos:[
                {
                    id:1,
                    src:'/videos/video.mp4',
                    thumbnail:'/videos/cover.png'
                },
                {
                    id:2,
                    src:'/videos/video.mp4',
                    thumbnail:'/videos/cover.png'
                },
                {
                    id:3,
                    src:'/videos/video.mp4',
                    thumbnail:'/videos/cover.png'
                },
                {
                    id:4,
                    src:'/videos/video.mp4',
                    thumbnail:'/videos/cover.png'
                }
            ],
            settings: {
                arrows: false,
                dots: true,
                autoplay:false,
                autoplaySpeed:10000,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                pauseOnHover: true,
                draggable:true, 
                dotsClass:'dots', 
                pauseOnFocus:true,
                cssEase: "ease"     
            },
        }
    },
    methods:{
        playvideo(ev){
            ev.target.parentNode.parentNode.querySelector('.myvideo').play()
            ev.target.parentNode.querySelector('.play-icon').style.display = 'none'
            ev.target.parentNode.querySelector('.pause-icon').style.display = 'block'            
        },
        pausevideo(ev){
            ev.target.parentNode.querySelector('.myvideo').pause()
            ev.target.parentNode.querySelector('.play-icon').style.display = 'block'
            ev.target.parentNode.querySelector('.pause-icon').style.display = 'none' 
        },
        requestfullscreen(ev){
            ev.target.parentNode.querySelector('.myvideo').requestFullscreen()
        },
        handleAfterChange() {
            document.querySelectorAll('.myvideo').forEach(function(el){
                el.parentNode.querySelector('.play-icon').style.display = 'block'
                el.parentNode.querySelector('.pause-icon').style.display = 'none'
                el.pause()
            })
        }
    },
    
}
</script>
<style lang="scss" scoped >
    
    section{
        width:100%;
        padding: 0 15px;
        margin-top: 83px;
        .item{
            width: 100%;
            figure{
                position: relative;
                video{
                    width: 100%;
                    cursor: pointer;
                }
                img{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    cursor: pointer;
                }
                .play-icon{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    z-index: 2; 
                    width: 100px;
                    height: 100px;
                    fill: rgba($color: #000000, $alpha: 0.5);
                    transition:0.3s ease all;
                    cursor: pointer;
                    &:hover{
                       fill: rgba($color: red, $alpha: 1); 
                    }
                }
                .max-icon{
                    position: absolute;
                    bottom: 10px;
                    right: 10px;
                    fill: rgba($color: #000000, $alpha: 0.5);
                    z-index: 2;
                    width: 30px;
                    height: 30px;
                    cursor: pointer;
                    transition:0.3s ease all;
                    &:hover{
                       fill: rgba($color: white, $alpha: 1); 
                    }
                }
                .pause-icon{
                    display: none;
                    position: absolute;
                    bottom: 10px;
                    left: 10px;
                    fill: rgba($color: #000000, $alpha: 0.5);
                    z-index: 2;
                    width: 30px;
                    height: 30px;
                    cursor: pointer;
                    transition:0.3s ease all;
                    &:hover{
                       fill: rgba($color: white, $alpha: 1); 
                    }
                }
            }
            
        }
        
    }

    @media(min-width: 600px){
        section{
            margin-top: 105px;
            padding: 0 5%;
        }
    }
    @media(min-width: 900px){
        section{
            margin-top: 130px;
            padding: 0 10%;
            .item{
                figure{
                    max-width: 900px;
                    margin: 0 auto;
                }
            }
        }
    }
</style>
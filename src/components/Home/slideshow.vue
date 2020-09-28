<template>
    <section class="slideshow">
        <VueSlickCarousel  v-bind="settings" class="slick-videos" ref="carousel" @afterChange="handleAfterChange" >
            <div v-for="v in videos" :key="v.id" class="item">
                <figure>                 
                    <video  preload="none"  class="video-js vjs-default-skin myvideo" :poster="v.thumbnail" 
                        controls data-setup='{ "aspectRatio":"1920:1080", "playbackRates": [1, 1.5, 2] }'>
                        <source :src="v.src" type="video/mp4">
                    </video>
                </figure>
            </div>
        </VueSlickCarousel>
    </section>
</template>
<script>

import  videojs from 'video.js'
import 'video.js/dist/video-js.css'
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
        handleAfterChange() {
            document.querySelectorAll('.myvideo').forEach(function(el){
                videojs(el).pause()
            })
        }
    }    
}
</script>
<style lang="scss" >
    @import "../../styles/variables.scss";
    .video-js {
        height: auto;
        font-size: 10px;
        color: $primary-foreground-color;
    }

    .vjs-default-skin .vjs-big-play-button {

        font-size: 3em;
        line-height: $big-play-height;
        height: $big-play-height;
        width: $big-play-width;
        border: none;
        border-radius: 0.3em;
        @if $center-big-play-button {
            left: 50%;
            top: 50%;
            margin-left: -($big-play-width / 2);
            margin-top: -($big-play-height / 2);   
        } @else {
            left: 0.5em;
            top: 0.5em;
        }
    }

    .video-js .vjs-control-bar,
    .video-js .vjs-big-play-button,
    .video-js .vjs-menu-button .vjs-menu-content {
        background-color: $primary-background-color;
        background-color: rgba($primary-background-color, 0.7);
    }
    .video-js.vjs-fluid{
        height: 160px;
    }

    $slider-bg-color: lighten($primary-background-color, 33%);

    .video-js .vjs-slider {
    background-color: $slider-bg-color;
    background-color: rgba($slider-bg-color, 0.5);
    }

    .video-js .vjs-volume-level,
    .video-js .vjs-play-progress,
    .video-js .vjs-slider-bar {
    background: $primary-foreground-color;
    }

    .video-js .vjs-load-progress {
    background: lighten($slider-bg-color, 25%);
    background: rgba($slider-bg-color, 0.5);
    }

    .video-js .vjs-load-progress div {
    background: lighten($slider-bg-color, 50%);
    background: rgba($slider-bg-color, 0.75);
    }

    section.slideshow{
        width:100%;
        padding: 0 15px;
        margin-top: 83px;
        .item{
            width: 100%;
            figure{
                // position: relative;
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
        section.slideshow{
            margin-top: 105px;
            padding: 0 5%;
        }
    }
    @media(min-width: 900px){
        section.slideshow{
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
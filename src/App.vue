<template>
  <div>
      <Header></Header>
      <router-view></router-view>
      <Footer v-show=" permission!='accepted'"></Footer>
  </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'

export default {
    components: {Header,Footer},
    data(){
      return{
        permission: sessionStorage.getItem("permission")
      }
    }
}

</script>

<style lang="scss">
  @import "./styles/variables.scss";
  @font-face {
    font-family: "Gotham Book";
    src: url("/fonts/GothamLight.ttf") format("truetype");
    font-weight: 200;
    font-style: normal;
  }
  
  @font-face {
    font-family: "Gotham Book";
    src: url("/fonts//GothamBook.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Gotham Book";
    src: url("/fonts/GothamMedium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Gotham Book";
    src: url("/fonts/GothamBold.ttf") format("truetype");
    font-weight: 800;
  }
  *{
    box-sizing: border-box;
    outline: none;
    margin: 0;
    padding: 0;
    font-family: 'Gotham Book', Gotham-Book, sans-serif;
    overflow-wrap: break-word;
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
  }

  
  html {
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  ul {
    margin: 0;
  }
   
  .dots{
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 14px !important;
    li{
        list-style: none !important;
        margin:0 3px !important;
        button{
          color:transparent !important;
          background-color: white !important;
          width: 10px !important;
          height: 10px !important;
          border-radius: 100% !important;
          border:1px solid black !important;
        }
    }
    .slick-active{
        button{
          background-color: black !important;
        }
    }    
  }
  @media(min-width: 600px){
    .dots{
      li{
        margin:0 15px !important;
      }
    }
  }
</style>

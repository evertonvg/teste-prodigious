<template>
    <header>
        <router-link to="/"><img src="/svg/logo_prodigious.svg" alt="Logo Prodigious"></router-link> 
        <label for="check" class="checkin" @click="menuverify">
            <input type="checkbox" id="check" hidden ref="hbmenu">
            <span class="hamburguer"></span>        
        </label>       
        <nav :class="{'active': active == 'active' }" @click="menuclose">
            <ul>
                <li>
                    <router-link to="/" title="home">Home</router-link>
                </li>
                <li>
                    <router-link to="/Portfolio" title="Portfolio">Portfolio</router-link>
                </li>
                <li>
                    <router-link to="/Contact" title="Contact">Contact</router-link>
                </li>
                <li>
                    <router-link to="/OurNetwork" title="Our Network">Our Network</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name:'header-component',
    data(){
        return {
            active:'deactive'
        }
    },
    methods:{
        menuverify(){
            if(this.$refs.hbmenu.checked==true){
                this.menuopen()
            }else{
                this.menuclose()
            }
        },
        menuopen(){
            this.active = 'active'
            document.body.style.overflowY = 'hidden'
            this.$refs.hbmenu.checked=true
        },
        menuclose(){
            this.active = 'deactive'
            document.body.style.overflowY = 'auto'
            this.$refs.hbmenu.checked=false   
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "../styles/variables.scss";
    header{
        z-index: 1;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: $header;
        padding: 0 15px;
        height: 68px;
        img{
            width: 120px;
        }
        label{
            width: 30px;
            height: 30px;
            background-color: transparent;
            cursor: pointer;
            position: relative;
            z-index: 999;
            input[type=checkbox] {
                &:checked ~ span{
                    transform: rotate(45deg);
                    background-color: white;
                }
                &:checked ~ span:before{
                    transform: rotate(90deg);
                    top: 0;
                    background-color: white;
                }
                &:checked ~ span:after{
                    transform: rotate(90deg);
                    bottom: 0;
                    background-color: white;
                }
            }
            span{
                width: 100%;
                height: 4px;
                color: black;
                background-color: currentColor;
                position: absolute;
                top: 50%;
                left: 0;
                transform: translate(0,-50%);
                transition: all 0.3s ease-in-out;
                &:before{
                    display: block;
                    content: "";
                    position: absolute;
                    top: -10px;
                    left: 0;
                    width: 30px;
                    height: 4px;
                    background-color: currentColor;
                    transition: all 0.3s ease-in-out;
                }
                &:after{
                    display: block;
                    content: "";
                    position: absolute;
                    bottom: -10px;
                    left: 0;
                    width: 30px;
                    height: 4px;
                    background-color: currentColor;
                    transition: all 0.3s ease-in-out;
                }
            }
        }
        nav{
            overflow: hidden;
            width: 0;
            height: 100vh;
            background-color: rgba($color: #000000, $alpha: 0.9);
            position: fixed;
            z-index: 998;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.3s ease all;
            ul{
                padding-bottom: 200px;
                list-style: none;
                opacity: 0;
                transition: 0.5s ease all;
                li{
                    text-align: center;
                    margin: 35px 0;
                    a{
                        color:white;
                        text-decoration: none;
                        font-size: 20px;
                        text-transform: uppercase;
                        font-weight: 800;
                    }
                    .router-link-exact-active.router-link-active{
                        color:$pink;
                    }
                }
            }
        }
        nav.active{
            width: 100%;
            ul{
                opacity: 1;
            }
        }
    }
    @media(min-width: 600px){
        header{
            padding:0 5%;
            height: 90px;
            img{
                width: 150px;
            }
        }
    }

    @media(min-width: 900px){
        header{
            padding:20px 10%;
            img{
                width: auto;
            }
            label{
                display: none;
            }
            nav{
                position: initial;
                padding:0;
                width: auto;
                height: auto;
                background-color: transparent;
                ul{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 1;
                    padding:0;
                    li{
                        margin: 0;
                        margin-left: 30px;
                        a{
                            color:#000;
                            transition: 0.3s ease all;
                            font-size: 16px;
                            &:hover{
                                color:gray;
                            }
                        }
                        .router-link-exact-active.router-link-active{
                            color:$pink;
                        }
                    }
                }
            }
        }
    }
</style>
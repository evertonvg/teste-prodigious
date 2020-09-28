<template>
    <section>
        <h1>\ <span>CONTACT</span> US</h1>
        <sendformulario ref="sendcomponent"></sendformulario>
        <form action="fictionalform.php" method="post">
            <div class="inputfield">
                <label for="name">Name:</label>
                <input type="text" v-model="name" name="name" id="name" ref="nameinput"> 
                <div class="error">{{nameerror}}</div>
            </div>
            <div class="inputfield">
                <label for="phone">Phone:</label>
                <input type="text" v-model="phone" name="phone" id="phone" v-mask="'(##)#####-####'" ref="phoneinput"> 
                <div class="error">{{phoneerror}}</div>
            </div>
            <div class="inputfield">
                <label for="email">E-mail</label>
                <input type="email" v-model="email" name="email" id="email" ref="emailinput"> 
                <div class="error">{{emailerror}}</div>
            </div>
            <div class="inputfield">
                <label for="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" v-model="message" ref="messageinput"></textarea>
                <div class="error ">{{messageerror}}</div>
            </div>
            <input type="submit" value="Send" @click="validate">
        </form>
    </section>
</template>
<script>
import axios from 'axios'
import sendformulario from './sendform'

export default {
    name:'contactform',
    components:{sendformulario},
    data(){
        return{
            name:'',
            nameerror:'',
            phone:'',
            phoneerror:'',
            emailregex:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            email:'',
            emailerror:'',
            message:'',
            messageerror:'',
            contacts:[],
            showmodal:false
        }
    },
    methods:{
        validate(el){
            el.preventDefault()
            let send = true
            let context = this
            if(this.$refs.nameinput.value==''){
                this.$refs.nameinput.classList.add('inputerror')
                this.nameerror = '(fill this field)'
                send = false
            }else if(this.$refs.nameinput.value.length<5){
                this.$refs.nameinput.classList.add('inputerror')
                this.nameerror = '(minimum of 5 characters in ths field)'
                send = false
            }else{
                this.$refs.nameinput.classList.remove('inputerror')
                this.nameerror = ''
            }

            if(this.$refs.emailinput.value==''){
                this.$refs.emailinput.classList.add('inputerror')
                this.emailerror = '(fill this field)'
                send = false
            }else if(!this.emailregex.test(this.$refs.emailinput.value)){
                this.$refs.emailinput.classList.add('inputerror')
                this.emailerror = '(fill in with a valid email)'
                send = false
            }else{
                this.$refs.emailinput.classList.remove('inputerror')
                this.emailerror = ''
            }

            if(this.$refs.phoneinput.value==''){
                this.$refs.phoneinput.classList.add('inputerror')
                this.phoneerror = '(fill this field)'
                send = false
            }else if(this.$refs.phoneinput.value.length<13){
                this.$refs.phoneinput.classList.add('inputerror')
                this.phoneerror = '(fill this field with a valid number)'
                send = false
            }else{
                this.$refs.phoneinput.classList.remove('inputerror')
                this.phoneerror = ''
            }

            if(this.$refs.messageinput.value==''){
                this.$refs.messageinput.classList.add('inputerror')
                this.messageerror = '(fill this field)'
                send = false
            }else if(this.$refs.messageinput.value.length<20){
                this.$refs.messageinput.classList.add('inputerror')
                this.messageerror = '(minimum of 20 characters in ths field)'
                send = false
            }else{
                this.$refs.messageinput.classList.remove('inputerror')
                this.messageerror = ''
            }
            if(send==true){
                axios.post('/api/contacts',{
                    name:this.$refs.nameinput.value,
                    phone:this.$refs.phoneinput.value,
                    email:this.$refs.emailinput.value,
                    message:this.$refs.messageinput.value
                }).then(function(res){
                    console.log(res)
                    context.$refs.sendcomponent.open()
                    context.name = ''
                    context.phone = ''
                    context.email = ''
                    context.message = ''
                }).catch(function(error){
                    console.log(error)
                })
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "../../styles/variables.scss";
    section{
        padding: 0 15px;
        padding-top: 40px;
        padding-bottom: 90px;
        width: 100%;
        clear: both;
        h1{
            font-size: 25px;
            font-weight: 200;
            margin-bottom: 25px;
            span{
                font-weight: 800;
            }
        }
        form{
            width: 100%;
            .inputfield{
                position: relative;
                input:-webkit-autofill {
                    -webkit-box-shadow: 0 0 0 30px white inset;
                    -webkit-text-fill-color: $purple ;
                }
                input,textarea,label{
                    width: 100%;
                }
                label{
                    color:$purple;
                    font-size: 12.5px;
                    font-weight: 800;
                   
                }
                input{
                    margin-top: 10px;
                    height: 30px;
                    border: 1px solid $purple;
                    border-radius: 3px;
                    margin-bottom: 30px;
                    color: $purple;
                    padding-left: 10px;
                    font-size: 12.5px;
                }
                textarea{
                    margin-top: 10px;
                    border: 1px solid $purple;
                    border-radius: 3px;
                    margin-bottom: 30px;
                    color: $purple;
                    padding: 10px;
                    font-size: 12.5px;
                    resize: none;
                }
                .inputerror{
                    color:#e90000;
                    border: 1px solid #e90000;
                    -webkit-text-fill-color: #e90000;
                }
                .error{
                    position: absolute;
                    bottom: 14px;
                    left: 0;
                    color:#e90000;
                    font-size: 10.4px;
                }
            }
            input[type=submit]{
                width: 100%;
                background-color: $purple;
                font-size: 14.5px;
                font-weight: 800;
                color:white;
                padding: 15px 0;
                border-radius: 3px;
                border: none;
                cursor:pointer;
                transition: 0.3s ease all;
                &:hover{
                    background-color: #5f2182; 
                }
            }
            
        }
    }
    .hide{
        display: none;
    }
    @media(min-width: 600px){
        section{
            padding: 0 5%;
            padding-top: 40px;
            padding-bottom: 90px;
        }
    }
    @media(min-width: 900px){
        section{
            padding: 0 10%;
            padding-top: 40px;
            padding-bottom: 90px;
            form,h1{
                max-width: 1200px;
                margin: 25px auto;
            }
        }
    }
</style>
import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import OurNetwork from './components/OurNetwork/OurNetwork'
import notfound from './components/notfound/notfound'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {path:'/',component: Home},
        {path:'/Portfolio',component: Portfolio},
        {path:'/Contact',component: Contact},
        {path:'/OurNetwork',component: OurNetwork},
        {path:'*',component:notfound}
    ]
})
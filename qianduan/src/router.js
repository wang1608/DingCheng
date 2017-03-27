
import Vue from 'vue'
import VueRouter from "vue-router";


import Home from './components/home.vue';
import Faxian from './components/faxian.vue';
import Dingdan from './components/dingdan.vue';
import Wode from './components/wode.vue';
import Shopcar from './components/shopcar.vue';
import Detail from './components/detail.vue';
import Shouye from './components/shouye.vue';
import resource from 'vue-resource';

Vue.use(resource);
Vue.use(VueRouter);

//定义路由路径
const routes=[
    {path:"/shouye",
        component:Shouye,
        redirect:"/shouye/home",
        children:[
            {
                path:"home",
                component:Home,
                name:"shouye"
            },
            {
                path:"detail/:id",
                component:Detail,
                name:"detail"
            }
        ]
        },
    {path:"/dingdan",component:Dingdan,//Goods里面有两个孩子
        // children:[{
        //     path:"list",
        //     component:List
        // },
        // {
        //     path:"detail/:id",
        //     component:Detail
        // }]
    },
    {path:"/faxian",component:Faxian},
    {path:"/wode",component:Wode},  
    {path:"/shopcar",component:Shopcar},                                   //每一个都是单独的组件
    {path:"/",redirect:"/shouye"}
]

const router=new VueRouter({
    mode:"history",
    routes
})

export default router
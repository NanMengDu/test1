import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',component:()=>import('./components/main'),
            children:[
                {path:'/',component:()=>import('./components/aboutme')},
                {path:'/pageone',component:()=>import('./components/pageone')},
                {path:'/aboutpage',component:()=>import('./components/aboutpage')},
                {path:'/hobby',component:()=>import('./components/hobby')},
                {path:'/contact',component:()=>import('./components/contact')}
            ]
        },
        {
            path:'/test',
            component:()=>import('./components/mytab')
        }
    ]
})
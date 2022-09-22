import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/', component: () => import('./components/main'),
            children: [
                { path: '/', component: () => import('./components/aboutme'), name: 'aboutme' },
                { path: '/pageone', component: () => import('./components/pageone'), name: 'pageone'},
                { path: '/aboutpage', component: () => import('./components/aboutpage'), name: 'aboutpage' },
                { path: '/hobby', component: () => import('./components/hobby'), name: 'hobby' },
                { path: '/contact', component: () => import('./components/contact'), name: 'contact' }
            ]
        },
        {
            path:'/earth',component:()=>import('./components/newPage/index')
        },
    ]
})
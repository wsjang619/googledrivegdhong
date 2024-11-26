
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);




import IndexerIndexManager from "./components/listers/IndexerIndexCards"
import IndexerIndexDetail from "./components/listers/IndexerIndexDetail"




export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [


            {
                path: '/indexers/indices',
                name: 'IndexerIndexManager',
                component: IndexerIndexManager
            },
            {
                path: '/indexers/indices/:id',
                name: 'IndexerIndexDetail',
                component: IndexerIndexDetail
            },





    ]
})

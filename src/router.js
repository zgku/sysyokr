import Vue from "vue";
import Router from "vue-router";
import UserOkr from "./views/user/UserOkr.vue"
import TeamOkr from "./views/team/TeamOkr.vue"
import TeammateOkr from "./views/team/TeammateOkr.vue"
import Check from "./views/evaluation/Check.vue"
import Audit from "./views/evaluation/Audit.vue"
import MydoOkr from "./views/evaluation/MydoOkr.vue"
import Login from "./views/user/Login.vue"
import Layout from "./views/Layout.vue"
Vue.use(Router);

const router = new Router({
    routes: [{
            path: "/",
            name: "layout",
            component: Layout,
            meta: {
                title:"首页"
            },
            children: [{
                    path: "userokr",
                    component: UserOkr,
                    meta: {
                        title:"我的OKR"
                    }
                },
                {
                    path: "teamokr",
                    component: TeamOkr,
                    meta: {
                        title:"团队OKR",
                        module:"团队OKR"
                    }
                },
                {
                    path: "teammateokr",
                    component: TeammateOkr,
                    meta: {
                        title:"团队成员OKR",
                        module:"团队OKR"
                    }
                },
                {
                    path: "check",
                    component: Check,
                    meta: {
                        title:"我的考评",
                        module:"OKR考评"
                    }
                },
                {
                    path: "audit",
                    component: Audit,
                    meta: {
                        title:"我的审核",
                        module:"OKR考评"
                    }
                },
                {
                    path: "mydookr",
                    component: MydoOkr,
                    meta: {
                        title:"我的考评",
                        module:"OKR考评"
                    }
                },
            ]
        },
        {
            path: "/login",
            name: "login",
            component: Login,
            meta: {
                title:"登录"
            }
        },


    ]
});
router.beforeEach((to, from, next) => {
    document.title = "OKR考核管理系统 - " + to.meta.title;
    next()
})

export default router
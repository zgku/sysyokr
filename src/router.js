import Vue from "vue";
import Router from "vue-router";
<<<<<<< HEAD

=======
import UserOkr from "./views/user/UserOkr.vue"
import TeamOkr from "./views/team/TeamOkr.vue"
import TeammateOkr from "./views/team/TeammateOkr.vue"
import Check from "./views/evaluation/Check.vue"
import Audit from "./views/evaluation/Audit.vue"
import MydoOkr from "./views/evaluation/MydoOkr.vue"
import Login from "./views/user/Login.vue"
import Layout from "./views/Layout.vue"
>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf
Vue.use(Router);

const router = new Router({
    routes: [{
            path: "/",
            name: "layout",
<<<<<<< HEAD
            redirect: "/login",
            component: () => import("@/views/Layout.vue"),
=======
            component: Layout,
>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf
            meta: {
                title:"首页"
            },
            children: [{
<<<<<<< HEAD
                    path: "userokr",              
                    component: () => import("@/views/user/UserOkr.vue"),
=======
                    path: "userokr",
                    component: UserOkr,
>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf
                    meta: {
                        title:"我的OKR"
                    }
                },
                {
                    path: "teamokr",
<<<<<<< HEAD
                    component: () => import("@/views/team/TeamOkr.vue"),
=======
                    component: TeamOkr,
>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf
                    meta: {
                        title:"团队OKR",
                        module:"团队OKR"
                    }
                },
                {
                    path: "teammateokr",
<<<<<<< HEAD
                    component: () => import("@/views/team/TeammateOkr.vue"),
=======
                    component: TeammateOkr,
>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf
                    meta: {
                        title:"团队成员OKR",
                        module:"团队OKR"
                    }
                },
                {
                    path: "check",
<<<<<<< HEAD
                    component: () => import("@/views/evaluation/Check.vue"),
=======
                    component: Check,
>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf
                    meta: {
                        title:"我的考评",
                        module:"OKR考评"
                    }
                },
                {
                    path: "audit",
<<<<<<< HEAD
                    component: () => import("@/views/evaluation/Audit.vue"),
=======
                    component: Audit,
>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf
                    meta: {
                        title:"我的审核",
                        module:"OKR考评"
                    }
                },
                {
                    path: "mydookr",
<<<<<<< HEAD
                    component: () => import("@/views/evaluation/MydoOkr.vue"),
=======
                    component: MydoOkr,
>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf
                    meta: {
                        title:"我的考评",
                        module:"OKR考评"
                    }
                },
<<<<<<< HEAD
                {
                    path: "addTarget",
                    component: () => import("@/components/AddTarget.vue"),
                    meta: {
                        title:"添加目标",
                        module:"我的OKR"
                    }
                },

=======
>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf
            ]
        },
        {
            path: "/login",
            name: "login",
<<<<<<< HEAD
            component: () => import("@/views/user/Login.vue"),
=======
            component: Login,
>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf
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
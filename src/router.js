import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    routes: [{
            path: "/",
            name: "layout",
            redirect: "/login",
            component: () => import("@/views/Layout.vue"),
            meta: {
                title:"首页"
            },
            children: [{
                    path: "userokr",              
                    component: () => import("@/views/user/UserOkr.vue"),
                    meta: {
                        title:"我的OKR"
                    }
                },
                {
                    path: "teamokr",
                    component: () => import("@/views/team/TeamOkr.vue"),
                    meta: {
                        title:"团队OKR",
                        module:"团队OKR"
                    }
                },
                {
                    path: "teammateokr",
                    component: () => import("@/views/team/TeammateOkr.vue"),
                    meta: {
                        title:"团队成员OKR",
                        module:"团队OKR"
                    }
                },
                {
                    path: "check",
                    component: () => import("@/views/evaluation/Check.vue"),
                    meta: {
                        title:"我的考评",
                        module:"OKR考评"
                    }
                },
                {
                    path: "audit",
                    component: () => import("@/views/evaluation/Audit.vue"),
                    meta: {
                        title:"我的审核",
                        module:"OKR考评"
                    }
                },
                {
                    path: "mydookr",
                    component: () => import("@/views/evaluation/MydoOkr.vue"),
                    meta: {
                        title:"我的考评",
                        module:"OKR考评"
                    }
                },
                {
                    path: "addTarget",
                    component: () => import("@/components/AddTarget.vue"),
                    meta: {
                        title:"添加目标",
                        module:"我的OKR"
                    }
                },

            ]
        },
        {
            path: "/login",
            name: "login",
            component: () => import("@/views/user/Login.vue"),
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
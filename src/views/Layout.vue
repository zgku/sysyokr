<template>
  <div>
    <a-layout class="layout">
      <a-layout-sider
        v-model="collapsed"
        :trigger="null"
        collapsible
      >
        <div class="logo">{{collapsed?'OKR':'公司OKR'}}</div>
        <a-menu
          theme="dark"
          mode="inline"
          :defaultOpenKeys="openKeys"
          :default-selected-keys="selectedKeys"
        >
          <a-menu-item key="我的OKR">
<<<<<<< HEAD
            <router-link to="/userokr">
=======
            <router-link
              to="/userokr"
            >
>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf
              <a-icon type="read" />
              <span>我的OKR</span>
            </router-link>
          </a-menu-item>
          <a-sub-menu key="团队OKR">
            <span slot="title">
              <router-link
                to="/teamokr"
                tag="div"
              >
                <a-icon type="appstore" />
                <span>团队OKR</span>
              </router-link>
            </span>
            <a-menu-item key="/teamokr">
              <router-link
                to="/teamokr"
                tag="div"
              >
                <span>团队OKR</span>
              </router-link>
            </a-menu-item>
            <a-menu-item key="/teammateokr">
              <router-link
                to="/teammateokr"
                tag="div"
              >
                <span>团队成员OKR</span>
              </router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="OKR考评">
            <span slot="title">
              <router-link
                to="/check"
                tag="div"
              >
                <a-icon type="file-done" />
                <span>OKR考评</span>
              </router-link>
            </span>
            <a-menu-item key="/check">
              <router-link
                to="/check"
                tag="div"
              >
                <span>考评</span>
              </router-link>
            </a-menu-item>
            <a-menu-item key="/audit">
              <router-link
                to="/audit"
                tag="div"
              >
                <span>审核</span>
              </router-link>
            </a-menu-item>
            <a-menu-item key="/mydookr">
              <router-link
                to="/mydookr"
                tag="div"
              >
                <span>我的考评</span>
              </router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="4">
            <a-icon type="cluster" />
            <span>组织架构</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
<<<<<<< HEAD
      <a-layout>      
          <a-layout-header style="background: #fff; padding: 0 ">
            <a-icon
              class="trigger"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="() => (collapsed = !collapsed)"
            />
            <template>             
              <a-breadcrumb-item v-if="$route.meta.module">
                <a href>{{$route.meta.module}}</a>
              </a-breadcrumb-item>
              <a-breadcrumb-item>{{$route.meta.title}}</a-breadcrumb-item>
            </template>          
          <a-dropdown style="float:right">
=======
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0 ">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
          <a-dropdown style="margin-right:20px;float:right">
>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf
            <a
              class="ant-dropdown-link"
              @click="e => e.preventDefault()"
            >
              Simba
              <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;">
                  <a-icon type="edit" />修改密码
                </a>
              </a-menu-item>
              <a-menu-item>
                <a
                  href="javascript:;"
                  @click="logout"
                >
                  <a-icon type="logout" />注销登录
                </a>
              </a-menu-item>
            </a-menu>
<<<<<<< HEAD
          </a-dropdown>          
        </a-layout-header>
       
        <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">         
=======
          </a-dropdown>
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
          <bread></bread>
>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import Bread from '../components/Bread.vue';
<<<<<<< HEAD

=======
>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf
export default {
  components: { Bread },
  data() {
    return {
      collapsed: false,
      selectedKeys:[],
      openKeys:[]
    };
  },
  created(){
    if(this.$route.meta && this.$route.meta.module){
      this.openKeys = [this.$route.meta.module];
    }
    this.selectedKeys= [this.$route.path];
  },
  methods:{
    logout(){
      this.$router.push("/login");
    }
  }
};
</script>
<style lang='scss'>
.layout {
  height: 100vh;
  .logo {
    height: 32px;
    line-height: 32px;
    color: #fff;
    text-align: center;
    letter-spacing: 4px;
    front: {
      size: 2px;
      weight: blod;
      family: 楷体;
    }
<<<<<<< HEAD
=======

>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
<<<<<<< HEAD

=======
>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf
    &:hover {
      color: #1890ff;
    }
  }
}
</style>
<template>
  <div>
    <div class='select-target'>
      <span>目标周期：</span>
      <a-select
        default-value="8月考核"
        style="width: 120px"
        @change="handleChange"
      >
        <a-select-option value="7月考核">
          7月考核
        </a-select-option>
      </a-select>
<<<<<<< HEAD
      <span style="padding-left:50px">总权重：</span>  
      <a-button  style="float: right;">
        <router-link :to="{ path: '/AddTarget'}" append>
        <a-icon type="plus" />新增目标</router-link>
        </a-button>   
    </div>
    <a-divider></a-divider>
    <div>
      <a-table
        :columns="columns"
        :data-source="data"
      >      
        <span
          slot="action"
          slot-scope="text, record"
        >
          <a>Invite 一 {{ record.name }}</a>
          <a-divider type="vertical" />
          <a>Delete</a>
          <a-divider type="vertical" />         
        </span>
=======
      <span style="padding-left:50px">总权重：</span>
      <add-target style="float:right"></add-target>
    </div>
  <a-divider></a-divider>
    <div>
      <a-table
        :pagination="false"
        :columns="columns"
        :data-source="data"
      >
>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf
      </a-table>
    </div>
    <div style="padding:10px">
      <a-pagination
        v-model="current"
        :total="50"
        show-less-items
      />
    </div>
  </div>
</template>
<script>
import AddTarget from '../../components/AddTarget.vue';
<<<<<<< HEAD
import { findTargetList } from '../../api/target'

const columns = [
  {
    dataIndex: 'userTarget',
    key: 'userTarget',
    title: 'userTarget',
  },
   {
    title: 'targetName',
    dataIndex: 'targetName',
    key: 'targetName',
  },
  {
    title: 'progress',
=======
const columns = [
  {
    title: '负责人',
    dataIndex: 'name',
    key: 'name',  
  },
  {
    title: '进度',
>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf
    dataIndex: 'progress',
    key: 'progress',
  },
  {
<<<<<<< HEAD
    title: 'targetWeight',
    dataIndex: 'targetWeight',
    key: 'targetWeight',
  },
   {
    title: 'targetResult',
    dataIndex: 'targetResult',
    key: 'targetResult',
  },
   {
    title: 'finished',
    dataIndex: 'finished',
    key: 'finished',
  },
   {
    title: 'gmtModified',
    dataIndex: 'gmtModified',
    key: 'gmtModified',
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
=======
    title: '关键结果KR',
    dataIndex: 'keyresult',
    key: 'keyresult',
  },
  {
    title: '权重 完成情况',
    dataIndex: 'weight',
    key: 'weight',
  },
  {
    title: '完成进度',
    dataIndex: 'finished',
    key: 'finished',
  },
  {
    title: '更新时间',
    dataIndex: 'updatetime',
    key: 'updatetime',
  },
  {
    title: '操作',
    key: 'action',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    progress: 32,
    keyresult: 'New York No. 1 Lake Park',
    weight: ['nice', 'developer'],
    finished:'80%',
    updatetime:'2020-09-10 17:19:44'
  },
  {
    key: '2',
    name: 'Jim Green',
    progress: 42,
    keyresult: 'London No. 1 Lake Park',
    weight: ['loser'],
    finished:'80%',
    updatetime:'2020-09-10 17:19:44'
  },
  {
    key: '3',
    name: 'Joe Black',
    progress: 32,
    keyresult: 'Sidney No. 1 Lake Park',
    weight: ['cool', 'teacher'],
    finished:'80%',
    updatetime:'2020-09-10 17:19:44'
>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf
  },
];

export default {
  components: { AddTarget },
  data() {
    return {
<<<<<<< HEAD
      data: [],
      count: 0,
=======
      data,
>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf
      columns,
      current:1,
    };
  },
<<<<<<< HEAD
  created(){
  //  this.getTargetList()
  this.$ajax('http://localhost:8081/target/findTargets').then(res => {
          this.data = res.data
          console.log(res.data);
        }).catch(function (error) {
          console.log(error);
        });
    
  },
  methods:{
    handleChange(value) {     
      console.log(`selected ${value}`);
    },
    // async getTargetList(){
    //   const {data} = await findTargetList()    
    //   console.log(data);
    // }
=======
  methods:{
    handleChange(value) {
      console.log(`selected ${value}`);
    },
>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf
  }
};
</script>

<style lang='scss'>
.select-target {
  padding: 10px;
  font-family: 微软雅黑;
<<<<<<< HEAD
  
=======
>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf
}
</style>

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
    dataIndex: 'progress',
    key: 'progress',
  },
  {
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
  },
];

export default {
  components: { AddTarget },
  data() {
    return {
      data: [],
      count: 0,
      columns,
      current:1,
    };
  },
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
  }
};
</script>

<style lang='scss'>
.select-target {
  padding: 10px;
  font-family: 微软雅黑;
  
}
</style>

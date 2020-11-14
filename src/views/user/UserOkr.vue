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
      <add-target style="float:right"></add-target>
    </div>
  <a-divider></a-divider>
    <div>
      <a-table
        :pagination="false"
        :columns="columns"
        :data-source="data"
      >
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
const columns = [
  {
    title: '负责人',
    dataIndex: 'name',
    key: 'name',  
  },
  {
    title: '进度',
    dataIndex: 'progress',
    key: 'progress',
  },
  {
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
  },
];

export default {
  components: { AddTarget },
  data() {
    return {
      data,
      columns,
      current:1,
    };
  },
  methods:{
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  }
};
</script>

<style lang='scss'>
.select-target {
  padding: 10px;
  font-family: 微软雅黑;
}
</style>

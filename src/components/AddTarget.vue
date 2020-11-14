<template>
  <div class="addtarget">
    <a-divider></a-divider>
    <div style="padding-top:10px">
    <a-button><router-link :to="{ path: '/UserOkr'}" append>返回</router-link></a-button>
   </div>
  <a-form-model 
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
    
  >
    <a-form-model-item ref="name" label="目标名称" prop="name">
      <a-input
        v-model="form.name"
        @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        "
      />
    </a-form-model-item>
    <a-form-model-item label="目标权重" prop="target_weight">      
         <a-input
        v-model="form.target_weight"
        @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        "
      />   
    </a-form-model-item>
    <a-form-model-item label="目标周期" prop="target_circle">
      <a-select v-model="form.target_circle" placeholder="请选择目标名周期">
        <a-select-option value="">
          一月考核
        </a-select-option>
        <a-select-option value="">
          二月考核
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="目标类型" prop="target_type">
      <a-radio-group v-model="form.target_type">
        <a-radio value="1">
          个人
        </a-radio>
        <a-radio value="2">
          团队
        </a-radio>
      </a-radio-group>
    </a-form-model-item>

    <a-form-model-item ref="name" label="目标责任人" prop="create_user_name">
      <a-input
        v-model="form.create_user_name"
        @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        "
      />
    </a-form-model-item>
    <a-form-model-item ref="name" label="关键结果" prop="task">
      <a-input
        v-model="form.task"
        @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        "
      />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">
        提交
      </a-button>
      <a-button style="margin-left: 30px;" @click="resetForm">
        重置
      </a-button>
    </a-form-model-item>
  </a-form-model>
  </div>
</template>
<script>
import UserOkr from "../views/user/UserOkr"

export default {
  components: { UserOkr },
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: '',
      form: {
        name: '',
        target_weight: undefined,
        target_circle: undefined,
        target_type: undefined,
        create_user_name: '',
        task:'',
      },
      rules: {
        name: [{ required: true, message: '请输入目标名称', trigger: 'blur' }],
        target_weight: [{ required: true, message: '请输入目标权重', trigger: 'blur' }],
        target_circle: [{ required: true, message: '请选择目标周期', trigger: 'change' }],
        target_type: [
          {
            required: true,
            trigger: 'change',
          },
        ],       
        create_user_name: [{ required: true, message: '请选择目标责任人', trigger: 'blur' }],
        task:[{required: false}]
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>
<style lang='scss'>
.addtarget{
  padding-left: 20px;

}
</style>


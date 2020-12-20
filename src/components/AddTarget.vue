<template>
<<<<<<< HEAD
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
=======
  <div>
    <a-button type="primary" @click="showDrawer"> <a-icon type="plus" /> 新增目标 </a-button>
    <a-drawer
      title="Create a new account"
      :width="720"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <a-form :form="form" layout="vertical" hide-required-mark>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Name">
              <a-input
                v-decorator="[
                  'name',
                  {
                    rules: [{ required: true, message: 'Please enter user name' }],
                  },
                ]"
                placeholder="Please enter user name"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Url">
              <a-input
                v-decorator="[
                  'url',
                  {
                    rules: [{ required: true, message: 'please enter url' }],
                  },
                ]"
                style="width: 100%"
                addon-before="http://"
                addon-after=".com"
                placeholder="please enter url"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Owner">
              <a-select
                v-decorator="[
                  'owner',
                  {
                    rules: [{ required: true, message: 'Please select an owner' }],
                  },
                ]"
                placeholder="Please a-s an owner"
              >
                <a-select-option value="xiao">
                  Xiaoxiao Fu
                </a-select-option>
                <a-select-option value="mao">
                  Maomao Zhou
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Type">
              <a-select
                v-decorator="[
                  'type',
                  {
                    rules: [{ required: true, message: 'Please choose the type' }],
                  },
                ]"
                placeholder="Please choose the type"
              >
                <a-select-option value="private">
                  Private
                </a-select-option>
                <a-select-option value="public">
                  Public
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Approver">
              <a-select
                v-decorator="[
                  'approver',
                  {
                    rules: [{ required: true, message: 'Please choose the approver' }],
                  },
                ]"
                placeholder="Please choose the approver"
              >
                <a-select-option value="jack">
                  Jack Ma
                </a-select-option>
                <a-select-option value="tom">
                  Tom Liu
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="DateTime">
              <a-date-picker
                v-decorator="[
                  'dateTime',
                  {
                    rules: [{ required: true, message: 'Please choose the dateTime' }],
                  },
                ]"
                style="width: 100%"
                :get-popup-container="trigger => trigger.parentNode"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24">
            <a-form-item label="Description">
              <a-textarea
                v-decorator="[
                  'description',
                  {
                    rules: [{ required: true, message: 'Please enter url description' }],
                  },
                ]"
                :rows="4"
                placeholder="please enter url description"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <div
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }"
      >
        <a-button :style="{ marginRight: '8px' }" @click="onClose">
          Cancel
        </a-button>
        <a-button type="primary" @click="onClose">
          Submit
        </a-button>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      visible: false,
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf
    },
  },
};
</script>
<<<<<<< HEAD
<style lang='scss'>
.addtarget{
  padding-left: 20px;

}
</style>

=======
>>>>>>> 2296edc13c9dfbe22a6ae61788021d195174f3cf

<template>
  <div class="exam">
    <el-form
      :model="numberValidateForm"
      ref="numberValidateForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="理论"
        prop="exam"
        :rules="[
          { required: true, message: '理论成绩不能为空' },
          { type: 'number', message: '理论成绩必须为数字值' }
        ]"
      >
        <el-input
          type="exam"
          v-model.number="numberValidateForm.exam"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="技能"
        prop="result"
        :rules="[
          { required: true, message: '技能成绩不能为空' },
          { type: 'number', message: '技能成绩必须为数字值' }
        ]"
      >
        <el-input
          type="result"
          v-model.number="numberValidateForm.result"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('numberValidateForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('numberValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      numberValidateForm: {
        age: "",
        exam:'',
        result:''
      }
    };
  },
  computed: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.exam {
  width: 100%;
  height: 100%;
}
</style>

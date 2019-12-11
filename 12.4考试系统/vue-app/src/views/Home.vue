<template>
  <div class="home">
    <el-container>
      <el-header>欢迎光临</el-header>
      <el-main>
        <el-form>
          <el-form-item label="用户名">
            <el-input
              v-model="username"
              autocomplete="off"
              placeholder="请输入用户名"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              v-model="password"
              autocomplete="off"
              placeholder="请输入密码"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="身份">
            <el-input
              v-model="address"
              autocomplete="off"
              placeholder="请输入身份"
              clearable
            ></el-input>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
    <div class="dialog-footer">
      <el-button @click="login" type="primary">登录</el-button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {},
  components: {},
  data() {
    return {
      username: "",
      password: "",
      address: "",
      list: ""
    };
  },
  computed: {},
  methods: {
    succeed() {
      this.$message({
        message: "恭喜你，登录成功!",
        type: "success"
      });
    },
    login() {
      const { username, password, address } = this;
      axios.post("/api/login", { username, password, address }).then(res => {
        if (res.data.code === 1) {
          this.succeed();
          this.$router.push("/login");
        } else {
          alert(res.data.msg);
        }
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.dialog-footer {
  width: 200px;
  height: 50px;
  margin: 0 auto;
  button {
    width: 100%;
    height: 100%;
  }
}
</style>

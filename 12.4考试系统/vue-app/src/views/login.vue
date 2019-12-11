<template>
  <div class="login">
    <el-container>
      <el-aside width="200px">
        <img src="/1.gif" alt="" />
        <el-tabs
          :tab-position="tabPosition"
          style="height: 200px;"
          class="height-big"
        >
          <!-- <el-tab-pane label="开始考试">欢迎使用</el-tab-pane>
          <el-tab-pane label="查看成绩">欢迎使用2</el-tab-pane> -->
          <div class="left-left">
            <router-link to="/login/exam" class="ks">开始考试</router-link>
            <router-link to="/login/result" class="result"
              >查看成绩</router-link
            >
          </div>
        </el-tabs>
      </el-aside>
      <el-container>
        <el-header>
          <div class="header-left">
            <span>考试系统</span>
          </div>
          <div class="header-right">
            <el-button type="text" style="font-size:20px">{{
              list.address
            }}</el-button>
            ->
            <el-button type="text" style="font-size:20px">{{
              list.username
            }}</el-button>
            <el-button
              type="info"
              style="margin-left:30px;background:#b3c0d1"
              @click="bank"
            >
              <span class="bank">退出</span>
            </el-button>
          </div>
        </el-header>
        <el-main>
          <span style="font-size:30px;color:hotpink">
            <router-view />
          </span>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {},
  components: {},
  data() {
    return {
      tabPosition: "left",
      list: {},
      username: "",
      password: "",
      address: ""
    };
  },
  computed: {},
  methods: {
    bank() {
      this.$router.push("/home");
    }
  },
  created() {
    axios.post("/api/loginll").then(res => {
      this.list = res.data.data;
    });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.login,
.el-container {
  width: 100%;
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  img {
    border-radius: 10px;
    margin-top: 50px;
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-tabs {
  margin-top: 50px;
  border-top: 1px solid #cccccc;
}
.el-header {
  display: flex;
  .header-left {
    flex: 6;
  }
  .header-right {
    flex: 4;
  }
}
.bank {
  text-decoration: none;
  color: #000;
}
.left-left {
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 23px;
}
.ks {
  text-decoration: none;
  border-bottom: 1px solid red;
  width: 100%;
  height: 100%;
  line-height: 100px;
}
.result {
  text-decoration: none;
  width: 100%;
  height: 100%;
  line-height: 100px;
}
.active{
  background: #fff;
  color: skyblue;
}
</style>

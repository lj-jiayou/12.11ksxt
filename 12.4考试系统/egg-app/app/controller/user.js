"use strict";

const Controller = require("egg").Controller;
const jwt = require("jsonwebtoken");
class HomeController extends Controller {
  async login() {
    const { ctx, service } = this;
    const { username, password, address } = ctx.request.body;
    if (!username || !password || !address) {
      ctx.body = {
        code: -1,
        msg: "缺失参数"
      };
    } else {
      const loginHn = await service.user.login(username, password, address);
      if (loginHn.length) {
        const lj = {
          ...loginHn[0],
          createTime: +new Date()
        };
        const token = jwt.sign(lj, "1706b", {
          //生成token
          expiresIn: 60 * 60
        });
        ctx.cookies.set("token", token);
        try {
          ctx.body = {
            code: 1,
            token,
            loginHn,
            msg: "登录成功"
          };
        } catch (e) {
          ctx.body = {
            code: 2,
            msg: e
          };
        }
      } else {
        ctx.body = {
          code: 3,
          msg: "输入有误"
        };
      }
    }
  }
  async registry() {
    const { ctx, service } = this;
    const { username, password, roleid, address } = ctx.request.body;
    if (!username || !password || !roleid || !address) {
      ctx.body = {
        code: -1,
        msg: "缺失参数"
      };
    } else {
      const registryHn = await service.user.registry(
        username,
        password,
        roleid,
        address
      );
      if (registryHn.affectedRows > 0) {
        try {
          ctx.body = {
            code: 1,
            msg: "注册成功"
          };
        } catch (e) {
          ctx.body = {
            code: 2,
            msg: e
          };
        }
      } else {
        ctx.body = {
          code: 3,
          msg: "输入有误"
        };
      }
    }
  }
  async loginll() {
    const { ctx } = this;
    // console.log(ctx);
    ctx.body = {
      code: 1,
      data: ctx.info,
      msg: "查询token成功"
    };
  }
}

module.exports = HomeController;

const jwt = require("jsonwebtoken");
module.exports = () => {
  return async (ctx, next) => {
    const whiteList = ["/api/login", "/api/registry"];
    if (whiteList.includes(ctx.request.path)) {
      await next();
    } else {
      const token = ctx.cookies.get("token");
      if (!token) {
        ctx.body = {
          code: 3,
          msg: "没有权限"
        };
        return;
      } else {
        try {
          const info = jwt.verify(token, "1706b");
          //解密token
          ctx.info = info;
          await next();
        } catch (e) {
          console.log(e, "已经没有权限了，查看是否有人篡改");
        }
      }
    }
  };
};

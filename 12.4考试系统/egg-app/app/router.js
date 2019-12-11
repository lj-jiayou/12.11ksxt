"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.post("/api/login", controller.user.login); //登录
  router.post("/api/loginll", controller.user.loginll); //找token接口
  router.post("/api/registry", controller.user.registry); //注册
};

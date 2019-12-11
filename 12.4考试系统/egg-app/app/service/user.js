const Service = require("egg").Service;

class UserService extends Service {
  async login(username, password, address) {
    const user = await this.app.mysql.query(
      "select * from userlist where username = ? and password=? and address=?",
      [username, password, address]
    );
    return user;
  }
  async registry(username, password, roleid, address) {
    const user = await this.app.mysql.query(
      "insert into userlist (username,password,roleid,address) values (?,?,?,?)",
      [username, password, roleid, address]
    );
    return user;
  }
  // async list() {
  //   const user = await this.app.mysql.query("select * from userlist");
  //   return user;
  // }
}

module.exports = UserService;

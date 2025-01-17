var sql = require('../db/db_mariadb');

var connexion = null;

class FormAlias {
  constructor(req, res) {
    this.req = req;
    this.res = res;

    connexion = new sql();

  }
  async initialize() {
    await connexion.startConnexion();

  }

  async getFormAliasList() {
    try {
      this.formaliasList = await connexion.query("SELECT id, name, ipAddress, port FROM nat_alias");

      return this.formaliasList;
    }
    catch (anError) {
      console.log('Error to get alias list !');

      // See error from SQL Client
      //console.log(anError);
    }
  }
  getFormAlias() {
    return this.formaliasList;
  }
}

module.exports = FormAlias;
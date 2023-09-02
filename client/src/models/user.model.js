export class User {
    constructor(_id, USERNAME, EMAIL, NOM, PRENOM, PASSWORD,UserRole) {
      this._id = _id;
      this.USERNAME= USERNAME;
      this.NOM=NOM;
      this.PRENOM=PRENOM;
      this.EMAIL = EMAIL;
      this.UserRole = UserRole;
      this.PASSWORD=PASSWORD;
    }
  }
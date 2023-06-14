export default class Validator {
  validateUsername(username) {
    this.name = username;
    return /^[A-Za-z]+[A-Za-z_-]*[\d]{0,3}[A-Za-z_-]*[A-Za-z]$/.test(username);
  }
}

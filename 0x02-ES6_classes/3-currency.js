/* eslint no-underscore-dangle: 0 */
export default class Currency {
  /**
   *
   * @param {String} code
   * @param {String} name
   */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

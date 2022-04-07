/* eslint no-underscore-dangle: 0 */
/* eslint class-methods-use-this: 0 */
export default class Building {
  /**
   *
   * @param {Number} sqft
   */
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

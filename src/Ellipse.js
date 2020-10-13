/**
 * Ellipse module.
 *
 * @module src/Ellipse
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------
/**
 * An representation of an ellipse
 *
 * @class Ellipse
 */
export class Ellipse {
/**
 * Constructor taking two parameters.
 *
 * @param {number} a - The semi-major axis of the ellipse.
 * @param {number} b - The semi-minor axis of the ellipse.
 */
  constructor (a, b) {
    this.a = a
    this.b = b
  }

  /**
   * Get the area of the ellipse.
   *
   * @readonly
   * @memberof Ellipse
   * @returns {number} - The area of the ellipse.
   */
  get area () {
    return Math.PI * this.a * this.b
  }

  /**
   * Get the circumference of the ellipse.
   *
   * @readonly
   * @memberof Ellipse
   * @returns {number} - The circumference of the ellipse.
   */
  get circumference () { // Calculate the circumference using a and b
    return Math.PI * Math.sqrt(2 * this.a * this.a + 2 * this.b * this.b)
  }

  /**
   * Representation of the object.
   *
   * @memberof Ellipse
   * @returns {string} - Returns the representated object as a string.
   */
  toString () {
    return `a: ${this.a}, b: ${this.b}, area: ${this.area.toFixed(1)}, circumference: ${this.circumference.toFixed(1)}`
  }
}

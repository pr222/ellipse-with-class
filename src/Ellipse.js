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
/* TODO: ADD Block comment */
  constructor (a, b) {
    this.a = a
    this.b = b
  }

//   get a () {
//     return this.a
//   }

//   get b () {
//     return this.b
//   }

  get area () {
    return Math.PI * this.a * this.b
  }

//   calcArea () { // Calculate the area using a and b
//     return Math.PI * this.a * this.b
//   }

//   get circumference () {
//     return this._calcCircumference()
//   }

  get circumference () { // Calculate the circumference using a and b
    return Math.PI * Math.sqrt(2 * this.a * this.a + 2 * this.b * this.b)
  }

  toString () { // Method that returns the representated object as a string.
    return `a: ${this.a}, b: ${this.b}, area: ${this.area.toFixed(1)}, circumference: ${this.circumference.toFixed(1)}`
  }

  // Lägg till toString-metod
  // Objektet som string
  // Area och omkrets avrundas till en decimal
}

/**
 * Ellipse class.
 *
 * @constructs src/Ellipse
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------
export class Ellipse {
  constructor (a, b, area, circumference) {
    this.a = a
    this.b = b
    this._area = area
    this._circumference = circumference
  }

  get a () {
    return this.a
  }

  get b () {
    return this.b
  }

  get area () {
    return this._calcArea()
  }

  calcArea () { // Calculate the area using a and b
    return Math.PI * this.a * this.b
  }

  get circumference () {
    return this._calcCircumference()
  }

  calcCircumference () { // Calculate the circumference using a and b
    return Math.PI * Math.sqrt(2 * this.a * this.a * 2 * this.b * this.b)
  }

  set a (value) {
    this.a = value
  }

  set b (value) {
    this.b = value
  }

  toString () { // Method that returns the representated object as a string.
    return `a: ${this.a}, b: ${this.b}, area: ${this.area.toFixed(2)}, circumference: ${this.circumference.toFixed(2)}`
  }

  // Lägg till toString-metod
  // Objektet som string
  // Area och omkrets avrundas till en decimal
}

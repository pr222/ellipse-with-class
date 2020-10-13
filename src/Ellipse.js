export class Ellipse {
  constructor (a, b, area, circumference) {
    this.a = a
    this.b = b
  }

  get a () {
    return this.a
  }

  get b () {
    return this.b
  }

  get area () {
    return this.calcArea()
  }

  calcArea () {
    return Math.PI * this.a * this.b
  }

  get circumference () {
    return this.calcCircumference()
  }

  calcCircumference () {
    return Math.PI * Math.sqrt(2 * this.a * this.a * 2 * this.b * this.b)
  }

  set a (value) {
    this.a = value
  }

  set b (value) {
    this.b = value
  }

  // Lägg till toString-metod
  // Objektet som string
  // Area och omkrets avrundas till en decimal
}

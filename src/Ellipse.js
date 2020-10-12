class Ellipse {
  constructor (a, b, area, circumference) {
    this.a = a
    this.b = b
  }
  // Börja med egenskaper:

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

  // Lägg till toString-metod
  // Objektet som string
  // Area och omkrets avrundas till en decimal
}

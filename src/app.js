/**
 * The starting point of the application.
 *
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

import { Ellipse } from './Ellipse.js'
// Create new object an set initial values
const ellipse = new Ellipse(42.7, 13.8)
console.log(ellipse.toString()) // Present representation as a string

// Change the values of the object
ellipse.a = 63
ellipse.b = 18.4
console.log(ellipse.toString())// Present 2nd representation as a string

// Change the values of the object again
ellipse.a = 78.9
ellipse.b = 68.4
console.log(ellipse.toString()) // Present 3rd representation as a string

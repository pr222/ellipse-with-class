/**
 * The starting point of the application.
 *
 * @author Ellen Nu <en999@student.lnu.se>
 * @version 1.0.0
 */

import { Ellipse } from './Ellipse.js'

const ellipse = new Ellipse(13.8, 42.7)
console.log(ellipse.toString())

ellipse.a = 63
ellipse.b = 18.4
console.log(ellipse.toString())

ellipse.a = 78.9
ellipse.b = 68.4
console.log(ellipse.toString())

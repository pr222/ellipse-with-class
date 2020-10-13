/**
 * The starting point of the application.
 *
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

import { Ellipse } from './Ellipse.js'
const ellipse = new Ellipse(42.7, 13.8)

console.log(ellipse.toString())
// Ellipsen du skapar ska initialt ha värdet `42,7` för halva storaxelns längd (`a`), och värdet `13,8` för halva lillaxelns längd (`b`). En textbeskrivning av objektet ska presenteras

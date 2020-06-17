# Ellips med klass

## Uppgift

I denna uppgift ska du komplettera med kod så att objekt, som representerar en ellips, skapas enligt _"class syntax"_ .

Övningsuppgiften ska delas upp i två filer och du ska skriva kod i som skapar objekt enligt nämnt designmönster. Genomför uppgiften genom att arbeta med filerna, och designmönster, i tur och ordning.

1. `src/Ellipse.js` - _"Constructor/Prototype Pattern"_ (saknas)
2. `src/app.js` - instansierar och använder objekt av typen `Ellipse`. (saknas)
3. `test/Ellipse.test.js` - tester till typen `Ellipse`. (saknas)

![Beroendediagram](/.readme/dependency-graph.svg)

Genom att använda designmönstret ska den egendefinierade typen `Ellipse` skapas med egenskaper och metoder enligt nedan. Det är viktigt att du följer anvisningarna för att bifogade enhetstester ska vara meningsfulla.

### src/Ellipse.js

Du ska skriva klassen `Ellipse` där arean och omkretsen ska kunna beräknas. I samband med att objekt instansieras av klassen ska det vara möjligt att ange halva storaxelns längd, som betecknas `a`, och halva lillaxelns längd, som betecknas `b`.

![Ellips](/.readme/ellipse.gif)

En ellips area kan bestämmas med $A=\pi ab$, `Math.PI * a * b`, och dess omkrets approximativt med $O=\pi \sqrt{2a^2+2b^2}$, `Math.PI * Math.sqrt(2 * a * a + 2 * b * b)`.

#### Egenskaper

- `a`, halva storaxelns längd ska kunna ändras och läsas.
- `b`, halva lillaxelns längd kunna ändras och läsas.
- `area`, ska ge ellipsens area.
- `circumference`, ska ge ellipsens omkrets.

#### Metod

- `toString`, ska returnera en sträng representerande aktuellt objekt, med halva storaxelns längd satt till 42.7 och halva lillaxelns längd satt till 13.8, enligt `a: 42.7, b: 13.8, area: 1851.2, circumference: 199.4` där arean respektive omkretsen ska avrundas till en decimal.

Metoden ska vara gemensamma för samtliga objekt som instansieras av typen `Ellipse`.

### src/app.js

Du ska importera modulen Ellipse så du kan instansiera objekt av typen `Ellipse`.

Ellipsen du skapar ska initialt ha värdet `42,7` för halva storaxelns längd (`a`), och värdet `13,8` för halva lillaxelns längd (`b`). En textbeskrivning av objektet ska presenteras.

Vidare ska du presentera en textbeskrivning av objektet för värdena `63` och `18,4` samt `78,9` och `68,4` för halva storaxelns längd (`a`) respektive för halva lillaxelns längd (`b`).

Exempelutskrift som möter minimikraven:

```shell
a: 42.7, b: 13.8, area: 1851.2, circumference: 199.4
a: 63, b: 18.4, area: 3641.7, circumference: 291.6
a: 78.9, b: 68.4, area: 16954.4, circumference: 463.9
```

## Tips

Genom att köra enhetstesterna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt enhetstesterna...).

---
title: Introducción a SQL
description: Las bases teóricas para SQL.
---

SQL es un lenguaje de consultas estandar en el mundo de las bases de datos relacionales.
Este lenguaje es la base de todas las tecnologías SQL y tiene diferentes partes teóricas:

- Diseño de bases de datos relacionales
- Normalización de bases de datos
- Álgebra relacional
- El propio lenguaje de consultas SQL

Cada una de estas ramas es un área de conocimiento en si mismo. Y para entender cada una de estas está la sección de introducción.
La idea no es que aprendas una tecnología aquí. Para eso están los sub apartados. Lo que busco es que entiendas cómo funciona todo teoricamente.

## Diseño de bases de datos relacionales

Lo primero es que para diseñar bases de datos relacionales, lo principal es practicar. Debes dominar los conceptos de entidad, relación y los diagramas ER (entidad relación). Conocer la multiplicidad y ser capaz de identificar qué relaciones existen entre los objetos.
Para ello mi sugerencia es estudiar

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/J-zum0Z96g4"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

## Normalización

Cuando creas un diseño de bases de datos, puede ocurrir que no sea el diseño más eficiente. Para saber si el diseño es el mejor, empleamos las formas normales.
Por así decirlo, la normalización es una validación a nuestro diseño.
Existen varias formas normales, pero lo que nos interesa por lo general es que nuestra base de datos esté al menos en la 3ra forma normal

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/kvt2wE-q-yY"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

## Álgebra relacional

Este es un concepto matemático que debes dominar para saber optimizar las consultas a la base de datos. La razón de esta optimización es que SQL no es eficiente; si realizas una consulta de una manera específica, puede que tarde 10 veces menos que si haces la consulta de forma incorrecta. Ambas consultas quizá te den el mismo resultado, pero una provocará que tu base de datos colapse.

Para entender esto, puedes ver el [curso de algebra relacional](https://www.youtube.com/watch?v=vh0KMMsTGQ0&list=PLhnOQ_ypZS5UJETTsL4nfjip9UiiUl0SP) de un canal random que no es ni bueno ni malo.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/vh0KMMsTGQ0"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

## Consultas SQL

Ahora vamos al plato fuerte; el lenguaje SQL.
Soy Dalto tiene un curso completo de este lenguaje donde te explica las bases teóricas mencionadas anteriormente. Aunque a mi parecer son muy superficiales.
Mi recomendación es ver las referencias anteriores, practicar con los ejercicios de diseño y luego ver este curso adelantando a la parte de las consultas.
Esto porque así podrás ver mejor el panorama completo con una visión de experto.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/DFg1V-rO6Pg"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

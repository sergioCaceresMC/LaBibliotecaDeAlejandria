---
title: Patrones de diseño
description: Fuentes para aprender lo básico.
---

Aquí trato de condensar los patrones de diseño que suelo usar en proyectos reales. Aunque tal como mencionan en el video de la introducción, no hay patrones completamente buenos ni completamente malos.

## Patrones creacionales

Son patrones que se orientan a la creación de instancias de forma responsable. Es decir, da ideas para discernir si es necesario crear 50 objetos de un tipo o si se puede optimizar el código para solo crear 10 objetos de otro tipo

### Patron Singleton

Este patron busca asegurar que una clase solo tenga una instancia y proporciona un punto global de acceso a esa instancia. Esto lo suelo usar cuando necesito por ejemplo una arquitectura con conexión a un modelo de IA o cuando tengo un controlador global en mi aplicación que se encarga de orquestar toda la lógica de negocio.
También es bastante común verlo en programación de videojuegos porque es más sencillo manejar una sola instancia con lógica del ambiente.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/UekxC1hvurk"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

### Patron Factory

Esto es un patrón creacional, es decir, busca facilitar la creación de instancias de objetos. Esto lo consige usando "clases especializadas".

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/iPkq6s7nrus"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

### Patron Abstract Factory

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/CVlpjFJN17U"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

### Patron Builder

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/MRoZCgtQX1E"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/cXlhMjzLZBI"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

## Patrones estructurales

Me da un poco de flojera hacer la definición de qué son los patrones estructurales. Así que toma esta definición de [campusempresa.com](https://campusempresa.com/cursos/patrones-diseno/03-01-introduccion-estructurales):

Los patrones estructurales se centran en la composición de clases y objetos. Su objetivo principal es facilitar el diseño de estructuras complejas mediante la identificación de relaciones simples entre entidades. Estos patrones ayudan a garantizar que, al combinar objetos y clases, el sistema sea flexible y eficiente.

### Patron Decorator

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/nLy4x_LPPWU"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

### Patron Facade

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/6dYwdDbhpwQ"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

### Patron Proxy

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/fqQoxayXFGM"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

## Patrones Conductuales

Estos patrones son para determinar cómo interactuan las diferentes partes de nuestro código. Cómo interactuan las funciones y objetos entre si.

### Patron Observer

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/HFkZb1g8faA"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/ZRZ64sI-zJ0"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

### Patron Strategy

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/VQ8V0ym2JSo"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/j0I_hzEhfTE"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

### Patron Command

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/VwaRTaPl1eI"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

### Patron Iterator

Este patron soluciona el problema de tener que recorrer clases. Es por así decirlo, una sugerencia de implementación; si tu clase va a tener estructuras de datos en donde es necesario obtener un elemento siguiente, pues ahí es recomendable implementar un _iterador_

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/zNKUFKXVXsI"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/Lg4Cw8C6hH4"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

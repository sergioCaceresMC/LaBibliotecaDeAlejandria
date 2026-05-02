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

### Patron Builder

## Patrones estructurales

### Patron Decorator

### Patron Facade

### Patron Proxy

## Patrones Conductuales

Estos patrones son para determinar cómo interactuan las diferentes partes de nuestro código. Cómo interactuan las funciones y objetos entre si.

### Patron Observer

### Patron Strategy

### Patron Command

### Patron Iterator

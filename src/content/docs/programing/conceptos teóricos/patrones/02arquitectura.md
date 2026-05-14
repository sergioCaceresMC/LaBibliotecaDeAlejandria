---
title: Arquitecturas generales
description: Fuentes para aprender lo básico.
---

Las arquitecturas son otra forma de patrones que se orienta a la organización global del proyecto. Por ejemplo las famosas arquitecturas monolíticas o de microservicios. Aunque claro, esos ejemplos solo se centran en desarrollo web.
En esta sección no solo encontrarás arquitecturas web, también veras arquitecturas orientadas a proyectos generales o de escritorio

## Arquitectura en capas

El modelo de capas consiste en que utiliza múltiples capas para interactuar con diferentes niveles del sistema. Este patrón se basa principalmente en la idea de que un sistema puede ser representado como una estructura jerárquica de capas, donde cada capa proporciona servicios a las capas superiores. Es decir que ninguna capa inferior depende de alguna capa superior.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/V-jNdhey-w0"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

## Arquitectura Modelo Vista Controlador

Este modelo busca dividir las funcionalidades de la aplicación en 3 partes; la vista, que se encarga de lo que ve el usuario; el controlador, que comunica la vista con la base de datos (el modelo); y el modelo que encarga de las entidades de la base de datos

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/zhSDjntidws"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

## Arquitectura Dependency Injection

Esta arquitectura busca evitar _hardcodear_ dependencias en el código. Por ejemplo, si tienes una dependencia para leer un documento, busca que si en algún momento debes cambiar de dependencia, que el sistema no se rompa completamente

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/J1f5b4vcxCQ"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

## Arquitectura Monolítica

Un monolito es una app que está todo en el mismo sitio, la funcionalidad, vista, controladores, etc. todo se despliega junto.
Un monolito no necesariamente es malo. En realidad, yo suelo usarlos porque no he hecho una aplicación que necesite dividir los servicios. Además, puedes tener un monolito modular que es más rápido de crear que una arquitectura de micro servicios, pero tiene la facilidad de ser dividido si fuese necesario.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/6G2Rifsefbs"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

## Arquitectura en Micro Servicios

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/snr9kptJPLs"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

## Arquitectura Microkernel

Esto es como crear plugins pero con esteroides. Busca permitir añadir funcionalidades al propio core del sistema.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/RJb40TeDkio"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

## Arquitectura Hexagonal

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/r8-3Iv7XExE"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

## Arquitectura Master-Slave

Esta arquitectura es muy necesaria para diseño de bases de datos distribuidas porque permite hacer replicas y tener nodos maestros que se enfocan en orquestar el resto de nodos.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/_kZF4UoypvI"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/EBUcOwwXIxk"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

## Arquitectura Broker

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/39i8lw9D9aQ"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

## Arquitecturas para sistemas de IOT

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/pa94uXNEJp4"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

### Arquitectura P2P

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/Q8AtHmZQXzA"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

Información de [Referencia P2P](https://es.wikipedia.org/wiki/Peer-to-peer)

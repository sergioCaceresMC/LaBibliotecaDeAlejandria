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

## Arquitectura en Micro Servicios

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

## Arquitectura Master-Slave

Esta arquitectura es muy necesaria para diseño de bases de datos distribuidas porque permite hacer replicas y tener nodos maestros que se enfocan en orquestar el resto de nodos.

## Arquitectura Broker

## Arquitecturas para sistemas de IOT

### Arquitectura P2P

[Referencia](https://es.wikipedia.org/wiki/Peer-to-peer)

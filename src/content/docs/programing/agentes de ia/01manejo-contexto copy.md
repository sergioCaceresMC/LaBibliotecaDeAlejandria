---
title: Introducción a la teoría de contexto
description: Fuentes para aprender lo básico.
---

Los LLM tiene un gran problema; el contexto. Al ser en esencia autocompletados muy buenos, necesitan saber qué cosa deber autocompletar.
De normal asumimos que eso va dentro de una query donde le especificamos las cosas que queremos que haga. Algunos también incluyen el fragmento del código que deben modificar. Pero a la ia no le basta eso; en ocasiones es necesario conocer archivos extra porque necesitan información de una api que usan en una línea en específico.

Esto a día de hoy ha producido una nueva "rama" de ingeniería que se dedica a optimizar los contextos. Eso no es más que mucha gente tratando de decidir si deben meter toda la información a la ia (y saturar la ventana de contexto) o solo ir pasando fragmentos.
A mi parecer a niveles bajos es muy absurdo, si tu sabes donde está el fallo específico, sabes qué cosas debes de saber para arreglarlo, por lo que debes saber qué contexto pasarle a la ia.
En caso contrario, si tu no sabes qué está fallando, entonces no debes decirle a la ia "arregla X cosa". El procedimiento correcto sería enviar un scout a revisar los documentos para analizar las dependencias, luego con ese contexto adquirido puedes pedir el cambio.

El problema del segundo caso es que saturas la ventana de contexto y luego debes usar herramientas para compactarlo. Y todo esto se traduce en gastar dinero (_tokens_) por lo que para mi lo mejor siempre es hacer uso de tu experticia para descubrir el error. Si es un error pequeño, arreglalo tu, y si es un error que te llevará horas porque es un error repetitivo, entonces arma una planificación y usa un agente pero diciendole exactamente los pasos que debe seguir (porque sino se vuelven locos).

## Teoría de la ventana de contexto

Aquí hay algunas cosas para que entiendas cómo funciona la ventana de contexto y por qué digo que usar la segunda opción es un gasto inecesario que se puede evitar

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/0E-p4DlDysE"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/aCi0iSf4zN8"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

## Teoría de manejo de la ventana de contexto

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/jLuwLJBQkIs"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

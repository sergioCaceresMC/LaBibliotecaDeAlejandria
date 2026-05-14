---
title: Introducción a la teoría de herramientas
description: Fuentes para aprender lo básico.
---

## MCP: Model Context Protocol

La forma en que un LLM puede interactuar con el exterior, es lo que lo convierte en un agente. Esto se logra usando unos protocolos que OpenAI, Anthropic, Microsoft, etc (por sus huevos bien gordos) decidieron que iba a ser un estandar. Estos son los MCP: Model Context Protocol.

Luego evolucionaron e integraron el MCP de bash (el protocolo que permite al llm interactuar con la terminal) de forma nativa. De esa forma el agente puede usar la terminal. Y así tiene acceso casi completo a la computadora. Esto luego generó el desarrollo de Skills específicas para eso.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/wu5Bk8v7NOw"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

## Skills

Una Skill, para que entiendas, es una plantilla de prompt que le dice al LLM algunas reglas que debe seguir. Es decir, gente ha probado instrucciones para que actue de cierta forma y le ha gustado el resultado que ha obtenido, así que guardó el prompt y ahora, cuando al LLM se le pide una tarea, este se encarga de recuperar el Skill, lo agrega a su ventana de contexto y luego genera el resultado como si a la petición inicial le hubieses añadido la skill.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/hXgunHDwMR8"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

## Comparativa MCP vs Skills

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/eWY6bHtid1o"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

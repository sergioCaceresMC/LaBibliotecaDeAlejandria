---
title: Seguridad de login
description: Cómo implementar un sistema de logeo seguro.
---

## ¿Qué hay que tener en cuenta?

A la hora de hacer un login debemos saber que por la red va a viajar información muy sensible. Si se hace de forma incorrecta podemos arriesgarnos a un hackeo y que nuestros usuarios estén comprometidos.

Esto pasa en el login como en algunos sitios específicos de las páginas, como datos personales, etc.

Para solucionarlo se usan sesiones encriptadas

### Sesiones con tokens JWT

La idea es que el backend (flask) cree un token temporal con una duración predeterminada de 5min, 10min o lo que veamos convenientes.
El backend le envia este token al usuario y de esa forma, todos los mensajes que envie el usuario necesitan el token para comprobar su identidad

Estos token se hacen de diferente forma, lo más sencillo es un JWT (Json Web Token)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/FX0lMm_Qj10"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

## Login con sistema de roles

En caso de aplicaciones con roles administrativos, usuarios, etc. Es necesario diferentes niveles de seguridad

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/pkotA0tvewQ"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

## Encriptar contraseñas

En la base de datos, no podemos guardar contraseñas con texto plano, lo que debemos hacer es un método de encriptación que evita que un lector externo descubra la contraseña.

Para ello se usan métodos matemáticos. Algunos los podrás encontrar en la sección de matemática, por si te interesa.

El que usaremos son los métodos en base un hash o una clave secreta:

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/1837MqHlbfc"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

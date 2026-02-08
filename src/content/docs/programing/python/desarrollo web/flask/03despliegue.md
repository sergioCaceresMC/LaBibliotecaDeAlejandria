---
title: Despliegue de aplicación
description: Cómo desplegar la aplicación de flask.
---

## Exponer la aplicación de flask al público

Por defecto la aplicación de flask solo es visible de forma interna en nuestra computadora. Si quieres crear una aplicación y publicarla en un servidor o incluso en un contenedor de docker, en la parte donde inicias la app debes agregar que el host="0.0.0.0".

El host en 0.0.0.0 significa que la aplicación escucha todas las comunicaciones que entran en la computadora, contenedor o servidor.

```py
import sys
sys.path.append('./src')

from app import app
from utils.db import db

with app.app_context():
    db.create_all()
    pass

if __name__=="__main__":
    app.run(host="0.0.0.0",port=5000, debug=False) #<-- Aquí podemos especificar el host y el puerto
```

## Cómo desplegar con docker

Aquí asumo que ya sabes de docker. Cosas que es importante saber:

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/YENw-bNHZwg"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

### Ejemplos de aplicaciones para desplegar con docker

Estos son unos proyectos para un curso del club CEEIBIS de la Universidad Politécnica de Madrid. Están configurados con los archivos docker necesarios para levantar las aplicaciones.

[Aplicación simple de flask](https://github.com/sergioCaceresMC/CEEIBIS-taller-flask.git)

[Aplicación con conexión a base de datos](https://github.com/sergioCaceresMC/CEEIBIS-users-flask-taller.git)

## Desplegar flask en railway

Railway es una plataforma de despliegue sencillo. Ideal para practicar, el problema es que si quieres hacer un proyecto grande pues tendrás que pagar bastante más que con un vps o un servicio de amazon.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/hysMCwX08sI"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

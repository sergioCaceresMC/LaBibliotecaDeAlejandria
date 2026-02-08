---
title: Ejemplo de implementación de seguridad
description: Cómo implementar un sistema de logeo seguro.
---

## Código desarrollado

Hace tiempo cree una api de prueba donde necesitaba crear endpoints al que solo un usuario logeado podía entrar. Para ello desarrollé este modulo que genera un token y lo verifica

```py
import jwt
from datetime import datetime, timedelta, timezone

SECRET_KEY = "tu_clave_secreta_segura"  # Usa una ENV VAR en producción

def generate_token(user_id, expires_in=3000):#21600):
    payload = {
        "user_id": user_id,
        "exp": datetime.now(timezone.utc) + timedelta(seconds=expires_in)
    }
    token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
    return token

def verify_token(token):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return payload["user_id"]
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None

```

Sin embargo, esto no es interesante (En realidad puede que lo sacara de un video)
Lo interesante es el desarrollo de un decorador:

```py
from functools import wraps
from flask import request, jsonify
from utils.token import verify_token

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        # Espera que el token venga en el header Authorization: Bearer <token>
        if 'Authorization' in request.headers:
            token = request.headers['Authorization'].replace("Bearer ", "")

        if not token:
            return jsonify({'message': 'Token is missing'}), 401

        user_id = verify_token(token)
        if not user_id:
            return jsonify({'message': 'Invalid or expired token'}), 401

        return f(user_id=user_id, *args, **kwargs)

    return decorated

```

De esta forma podía añadir de forma fácil la verificación de inicio de sesión a mis rutas de flask.

### Ejemplo de ruta segura con el token

```py
from utils.auth_decorator import *

#...

@publication.route("/editor/publication/delete", methods=['POST'])
@token_required # <--- Decorador desarrollado
def del_proyect(user_id):
    # Tu código aquí
```

### Estructura de proyecto

Si tienes curiosidad de la estructura de mi proyecto implementado, es la siguiente:

```
|   app.py
|
+---models
|   |   event_model.py
|   |   image_model.py
|   |   publication_model.py
|   |   relations.py
|   |   researcher_model.py
|   |   tag_model.py
|   |   user_model.py
|   |   __init__.py
|
+---routes
|   |   auth_route.py
|   |   event_route.py
|   |   images_route.py
|   |   links_route.py
|   |   publication_clean_route.py
|   |   publication_route.py
|   |   tags_route.py
|   |   user_route.py
|   |   __init__.py
|
+---schemas
|   |   schemas_clean.py
|   |   __init__.py
|
+---seed
+---services
|       __init__.py
|
+---test
|       __init__.py
|
+---uploads
|       fa887c0b-2915-43f8-88d9-be83ebf5000f.webp
|
\---utils
    |   auth_decorator.py
    |   db.py
    |   orphans.py
    |   token.py
    |   __init__.py
```

El archivo del autenticador está en la carpeta utils, dentro está "auth_decorator.py"

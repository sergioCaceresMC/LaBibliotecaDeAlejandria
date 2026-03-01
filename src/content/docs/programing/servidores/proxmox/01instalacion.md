---
title: Instalación y configuración
description: Aprende cómo instalar y configurar PROXMOX.
---

Algunas cosas necesarias a tener en cuenta:

1. La PC que quieres configurar debe estar conectada a un punto de red por medio de ethernet. Esto si no quieres configurar luego la dirección IP.

2. Puedes conectar tu PROXMOX instalado por wifi, pero antes de eso necesitas instalar algunos paquetes y para eso debes conectarte primero por ethernet.

## Instalación

Necesitas una memoria, una pc para cargar la iso y la pc donde colocaras proxmox.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/sw-JuDbxV7A"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

### Instalación de otros scripts

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/klqSeI_Wc5M"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

Todos los helper scripts los puedes encontrar en [ommunity-scripts.github.io](https://community-scripts.github.io/ProxmoxVE/scripts?id=post-pve-install). He colocado el enlace al script que debes ejecutar justo después de instalar PROXMOX para que no te preguntes ¿Cuál debo instalar?

### Instalación de Portainer

Esto es para gestionar contenedores docker. El enlace al helper script está [aquí](https://community-scripts.github.io/ProxmoxVE/scripts?id=docker-vm)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/VDYhQ9ujlN4"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

### Instalación de TAILSCALE con PROXMOX

Si quieres exponer tus servicios al exterior (es decir poder conectarte sin estar en tu casa), una forma es con TAILSCALE. No lo he usado, pero entiendo que crea una especie de VPN a tu red local. Es más sencillo que el siguiente punto de NGINX, pero yo prefiero NGINX; es más educativo.

El enlace al helper script está [aquí](https://community-scripts.github.io/ProxmoxVE/scripts?id=add-tailscale-lxc)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/U5rhdQ8uWRE"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

#### HEADSCALE

Esta es la versión gratuita de TAILSCALE, tampoco lo he usado, pero es gratis.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/OECp6Pj2ihg"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

### Instalación de NGINX con PROXMOX

Esto es para poder exponer tu Proxmox al mundo y poder conectarte desde cualquier parte.
Aunque puede haber problemas.
Si tu router no tiene una ip pública no podras usar este tutorial, por lo que te sugiero usar Cloudflare tunels para conectar un dominio con tu NGINX. Puedes ver el siguiente apartado.

### Configuración si tienes ip pública

El enlace al helper script está [aquí](https://community-scripts.github.io/ProxmoxVE/scripts?id=nginxproxymanager).

Y el enlace para el docker está [aquí](https://github.com/favonia/cloudflare-ddns).

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/0ghEc_R6png"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

### Configuración si debes usar Cloudflare Tunels

Para seguir este tutorial, debes combinarlo con el de "Configuración si tienes ip pública". Lo que vas a hacer es crear el lxc de NPM y luego, en su consola vas a ejecutar los comandos para iniciar el tunel de cloudflare como se muestra a continuación.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/etluT8UC-nw"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

## Otra configuración de PROXMOX

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/moA54tp9AFY"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

---
title: ¿Qué es PROXMOX?
description: Aprende qué es PROXMOX.
---

Te pongo en situación. Imagina que tienes una computadora que quieres convertir en un servidor. En este servidor quieres crear diferentes máquinas virtuales, contenedores lxc o contenedores Docker. Si usas un sistema ubuntu puedes crear un servidor, pero va a ser más complicado de gestionar.

## ¿Qué es PROXMOX?

**Proxmox Virtual Environment**, según la definición de la web ATLANTIC (porque me dio flojera definirlo yo). Es un software de virtualización de código abierto basado en Debian que combina KVM (Kernel-based Virtual Machine) y LXC (Linux Containers) en una sola plataforma. Permite gestionar máquinas virtuales (VMs) y contenedores desde una interfaz web intuitiva, con herramientas avanzadas de gestión de almacenamiento, redes y backup.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/lyz19tYyS8g"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

### Requisitos de sistema para PROXMOX

Si tienes una tostadora de computadora, quizá te preguntes si la puedes usar para un servidor. Posiblemente sí, ya que PROXMOX corre sobre debian, una distribución ligera de linux.

Según la página oficial de PROXMOX, el hardware recomendado es:

#### Mínimo

- Procesador x86_64 (64 bits) con 2 núcleos y soporte Intel VT-x o AMD-V
- 4 GB de memoria RAM
- Almacenamiento 32 GB HDD o SSD
- 1 tarjeta de red (NIC)

#### Recomendado

- Procesador multinúcleo (4 cores o más) con soporte Intel VT-x/VT-d o AMD-V/AMD-Vi
- 8 GB de memoria RAM o más
- Almacenamiento 64 GB mínimo SSD o NVMe. 256 GB o más para laboratorio o uso intensivo
- 1 tarjeta de red (NIC)

## Instalación de PROXMOX

sw-JuDbxV7A

## Alternativas a PROXMOX

En otras instituciones pueden usar programas como **VMware** que es muy similar.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
  <iframe
    src="https://www.youtube.com/embed/x7BMjQL6a3k"
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

De momento no he usado VMware, así que en la biblioteca solo colocaré PROXMOX, al menos de momento.

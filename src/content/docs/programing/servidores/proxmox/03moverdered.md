---
title: Cambiar de red al sistema PVE
description: Aprende lo básico de PROXMOX.
---

Cuando cree el servidor lo hice en la universidad. Luego me llevé el servidor a casa para seguir trabajando, pero fue necesario cambiar la dirección ip manualmente. Esto porque no se actualiza con solo conectarlo al nuevo router. Para eso necesitas:

1. Conectar tu servidor al router nuevo
2. Conectarle pantalla y teclado para configurarlo manualmente
3. En otro dispositivo debes averiguar la gateway del router. Esto es tarea tuya, pero sugiero hacerlo con el comando `arp -a` desde un pc o laptop conectado al router. Luego buscas una ip terminada en ".1". Por lo general es 192.168.1.1

## Cómo cambiar la ip.

Si ves las explicaciones un poco redactadas como si fuese IA... sí, es IA. Lo siento, me siento sucio de haberlo usado, pero pasé casi 2 días buscando info y no encontraba nada concluyente.

En Proxmox **no hay que “decirle” a Proxmox la IP del router** como tal; lo que normalmente cambia es **la IP del propio servidor Proxmox** o **la puerta de enlace (gateway)**. Depende de cómo tengas la red configurada.

---

### 1) Caso más común: Proxmox tenía IP fija y el router ahora usa otra red

Ejemplo típico, la gateway cambió:

- Antes: `192.168.1.1`
- Ahora: `192.168.0.1`

Primero vas a tener que compruobar la IP actual

En la consola local de Proxmox (pantalla física o consola del host. host = pc con el proxmox) ingresa el comando: `ip a`
Si ves algo como `192.168.1.x`, ahí está el problema. La ip no está actualizada

Si no sabes cómo entrar a la consola, tu usuario es _root_

---

### 2 Cambiar la IP y el gateway en Proxmox

Edita el archivo de red:
en el host ejecuta:

```bash
nano /etc/network/interfaces
```

Ejemplo típico con bridge (`vmbr0`):
Las flechas las puse yo, es lo que debes cambiar a la red nueva

```bash
auto lo
iface lo inet loopback

auto enp3s0
iface enp3s0 inet manual

auto vmbr0
iface vmbr0 inet static
    address 192.168.0.50/24 <--- aquí es lo mismo del arp-a pero cambiando el 1 y colocando la máscara correcta
    gateway 192.168.0.1 <--- lo que obtuviste del arp -a
    bridge-ports enp3s0
    bridge-stp off
    bridge-fd 0

```

**Cambia**:

- `address` → una IP válida del nuevo router
- `gateway` → IP del nuevo router

Guarda (`Ctrl+O`, Enter) y sal (`Ctrl+X`).
Reinicia la red:

### 3 También hay que configurar el DNS

Si no configuras esto no podras usar los helper scripts ni instalar nada, porque no podras conectarte a internet desde el host.

Ejecuta en la terminal:

```bash
nano /etc/resolv.conf
```

Hay que colocar el punto de acceso del router. Es decir, la ip que colocaste en el punto 2 para el _gateway_:

```bash
search local
nameserver 192.168.0.1
```

### 4 Reiniciar la configuración

Ejecuta el comando:

```bash
systemctl restart networking
```

Si estás conectado por SSH, **mejor reinicia el host**:

```bash
reboot
```

### 5 Si usas DHCP (menos común en Proxmox)

**NOTA:** El DHCP es el protocolo para que un equipo se conecte por wifi (de forma inhalambrica).

Busca algo como: `iface vmbr0 inet dhcp`

En ese caso, normalmente basta con: `systemctl restart networking`

o reiniciar el servidor.

---

### 5 Acceso a la interfaz web

Después del cambio:
`https://NUEVA_IP:8006`
Ejemplo:
`https://192.168.0.50:8006`

---

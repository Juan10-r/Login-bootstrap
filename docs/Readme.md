# 🔐 Sistema de Autenticación Web (Inicio de Sesión, Recuperar Contraseña, Registro)

Este proyecto es una interfaz web simple para gestionar el inicio de sesión, recuperación de contraseña y registro de nuevos usuarios utilizando HTML, CSS (Bootstrap 5) y JavaScript. Ideal como base para conectar con un backend en PHP, Node.js, Python u otra tecnología.

## 🖼️ Vista General
![login-preview](./img/inicioSesion.png)
![login-preview](./img/reestaurarcontraseña.png)
![login-preview](./img/registrousuario.png)

El proyecto incluye tres páginas principales:

- **Inicio de sesión**: Formulario para que el usuario acceda a su cuenta.
- **Recuperación de contraseña**: Envía un correo para restablecer la contraseña (interfaz).
- **Registro**: Permite a los usuarios registrarse ingresando datos personales y credenciales.
**Estructura modular** dividida por carpetas: `css`, `html`, `js` e `img`.

## 📁 Estructura del Proyecto
```plainet
PROYECTO_J/
│
├── css/
│ ├── principal.css # Estilos para la página principal
│ └── styles.css # Estilos generales del proyecto
│
├── html/
│ ├── login.html # Página de inicio de sesión
│ ├── paginap.html # Página principal (acceso autorizado)
│ └── recuperar.html # Página para recuperar contraseña
│
├── img/
│ └── (imágenes utilizadas en la interfaz)
│
├── Js/
│ ├── aprender.js # Lógica adicional (posiblemente educativa o de pruebas)
│ └── login.js # Lógica de validación de usuario
│
├── index.html # Punto de entrada del proyecto (puede redirigir a login)
└── README.md # Documentación del proyecto

## 🚀 Tecnologías Utilizadas

- HTML5
- CSS3 (con [Bootstrap 5.3](https://getbootstrap.com/))
- JavaScript (para futura lógica)
- [SweetAlert2](https://sweetalert2.github.io/) (incluido para mejorar la UX con alertas)

## 📦 Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Juan10-r/Login-bootstrap.git

🙋‍♂️ Autor
Desarrollado por "Juan Rincon"
GitHub: @Juan10-r
Correo: juandarinconclavijo1007l@ejemplo.com
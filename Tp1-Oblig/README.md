# Página MyPost

Esta es una aplicación de página simple basada en React, construida con Tailwind CSS y Bootstrap Icons. La aplicación cuenta con un encabezado responsivo con navegación, una sección principal que muestra servicios con detalles que se pueden mostrar u ocultar, y un pie de página con enlaces a redes sociales. A continuación, se detalla la estructura del proyecto y el propósito de cada archivo.

## Estructura del Proyecto

El proyecto consta de los siguientes archivos clave, todos escritos en React (JSX) y estilizados con clases de Tailwind CSS:

- `App.jsx`: Punto de entrada principal de la aplicación, estructura el diseño general.
- `Header.jsx`: Componente de encabezado con un menú de navegación responsivo.
- `Footer.jsx`: Componente de pie de página con información de derechos de autor y enlaces a redes sociales.
- `Main.jsx`: Sección principal que muestra una lista de servicios con descripciones que se pueden alternar.

## Prerrequisitos

Antes de ejecutar la aplicación, me asegure de tener lo siguiente instalado:

- **Node.js** y **npm**
- Un proyecto de React configurado
- **Tailwind CSS** configurado en el proyecto (consulta [Instalación de Tailwind CSS](https://tailwindcss.com))
- **Bootstrap Icons** para los íconos usados en el encabezado y pie de página (inclúyelos mediante CDN o instalando el paquete: `npm install bootstrap-icons`)

## Descripción de los Archivos

### 1. `App.jsx`

**Propósito**: Es el componente raíz de la aplicación, encargado de estructurar el diseño general al renderizar los componentes `Header`, `Main` y `Footer`.

**Estructura**:

- Utiliza un `div` con clases de Tailwind CSS (`flex`, `flex-col`, `min-h-screen`, `bg-gray-100`) para crear un diseño flexible de columna que ocupa al menos la altura completa de la pantalla.
- Renderiza el componente `Header` en la parte superior, `Main` como contenido principal con la propiedad `flex-grow` para que ocupe el espacio restante, y `Footer` en la parte inferior.

**Funcionalidad**:

- Proporciona la estructura base de la página, asegurando que el encabezado, el contenido principal y el pie de página estén organizados en un diseño responsivo.

### 2. `Header.jsx`

**Propósito**: Implementa un encabezado fijo (sticky) con un menú de navegación que es responsivo, mostrando un menú desplegable en dispositivos móviles.

**Estructura**:

- Utiliza el hook `useState` para gestionar el estado del menú móvil (`isMenuOpen`).
- Define un arreglo `navItems` con los elementos de navegación (`Inicio`, `Servicios`, `Nosotros`, `Contacto`) y sus enlaces correspondientes importados de la carpeta utils.
- En pantallas grandes (`md` y superiores), muestra un menú horizontal con enlaces. En pantallas pequeñas, muestra un botón de hamburguesa (`bi-list`) que alterna a un ícono de cierre (`bi-x-lg`) cuando el menú está abierto.
- Cuando el menú móvil está abierto, renderiza un menú vertical con los mismos enlaces.

**Funcionalidad**:

- El menú es fijo en la parte superior (`sticky`, `top-0`, `z-50`) para permanecer visible al hacer scroll.
- Los enlaces tienen un efecto de hover (`hover:text-blue-400`) para mejorar la interactividad.
- En dispositivos móviles, el menú se oculta y se muestra al hacer clic en el botón de hamburguesa, cerrándose automáticamente al seleccionar un enlace.

### 3. `Main.jsx`

**Propósito**: Muestra el contenido principal de la página, que incluye un título de bienvenida y una cuadrícula de tarjetas de servicios con descripciones que se pueden mostrar u ocultar.

**Estructura**:

- Se define un arreglo `services` con tres servicios importado de carpeta utils: `Diseño Web`, `Desarrollo de Apps` y `SEO`, etc, cada uno con un título y una descripción.
- Utiliza el hook `useState` para gestionar el estado `showDetails`, que determina qué tarjeta de servicio muestra su descripción.
- Renderiza un título principal (`h1`) y una cuadrícula responsiva (`md:grid-cols-3`) con tarjetas para cada servicio.
- Cada tarjeta tiene un botón (`Ver más`/`Ocultar`) que alterna la visibilidad de la descripción del servicio.

**Funcionalidad**:

- La cuadrícula se adapta al tamaño de la pantalla, mostrando una columna en dispositivos móviles y tres columnas en pantallas más grandes.
- Las tarjetas tienen un diseño estilizado con sombras (`shadow-lg`) y un botón con efectos de hover (`hover:bg-blue-700`).
- Al hacer clic en el botón de una tarjeta, se muestra u oculta la descripción correspondiente, asegurando que solo una descripción esté visible a la vez (si se selecciona otra tarjeta, la anterior se oculta).

### 4. `Footer.jsx`

**Propósito**: Proporciona un pie de página con información de derechos de autor y enlaces a redes sociales.

**Estructura**:

- Contiene un contenedor centrado con un texto de copyright (`© 2025 MyPost. Todos los derechos reservados.`).
- Muestra tres íconos de redes sociales (Facebook, Twitter, Instagram) usando Bootstrap Icons (`bi bi-facebook`, etc.) dentro de enlaces.
- Los íconos tienen un efecto de hover (`hover:text-blue-400`) para mejorar la interactividad.

**Funcionalidad**:

- El pie de página tiene un fondo oscuro (`bg-gray-900`) y texto blanco, con un diseño centrado y espaciado (`space-x-4`) para los íconos.
- Los enlaces de redes sociales están configurados con `href="/"`, pero deben actualizarse con las URL reales de las redes sociales.

## Notas de Estilo

- **Tailwind CSS**: Se utilizan clases de Tailwind para estilizar los componentes, proporcionando un diseño responsivo y moderno.
- **Bootstrap Icons**: Los íconos se implementan mediante la clase `bi` de Bootstrap Icons, asegurando un diseño consistente.
- **Responsividad**: El diseño es completamente responsivo, adaptándose a dispositivos móviles y de escritorio mediante clases como `md:hidden`, `md:flex`, y `md:grid-cols-3`.

## Motion - Animaciones

1. El título principal aparece con un desvanecimiento y desplazamiento desde abajo.

2. Las tarjetas de servicios entran con un efecto escalonado, desplazándose desde abajo con un retraso para cada tarjeta.

3. Las descripciones de las tarjetas se animan con un desvanecimiento y expansión al mostrarse.

4. Los botones tienen efectos de escala al hacer hover y clic.

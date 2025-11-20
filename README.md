# 🍷 Belnuit - React + Vite

Esta aplicación es un **ecommerce desarrollado en React**, que permite a
los usuarios navegar productos, agregarlos al carrito y completar una
orden de compra.\
Utiliza **React**, **Context API**, **Firestore** y componentes
reutilizables para mantener un código limpio, modular y escalable.

------------------------------------------------------------------------

# ✨ Funcionalidades principales

## 🧭 Navegación de productos

-   Lista de productos obtenida desde Firestore.
-   Cada producto muestra: imagen, título, precio y stock.
-   Acceso al detalle individual de cada producto.

------------------------------------------------------------------------

## 🛒 Carrito de compras

-   Implementado con **React Context** para un estado global accesible
    desde toda la app.
-   Permite:
    -   Agregar productos desde cualquier vista.
    -   Evitar mutaciones directas (siempre se trabaja con copias del
        estado).
    -   Ver detalles completos del carrito:
        -   Imagen del producto\
        -   Título\
        -   Precio\
        -   Cantidad seleccionada\
    -   Eliminar productos individualmente (`removeItem(id)`).
    -   Vaciar el carrito por completo (`clearCart()`).
    -   Calcular el total automáticamente (`getTotalPrice()`).

------------------------------------------------------------------------

## 🧮 Cálculo dinámico del total

-   El total se recalcula automáticamente cada vez que se modifica el
    carrito.
-   La lógica está centralizada en funciones puras dentro del contexto.

------------------------------------------------------------------------

## 🧾 Checkout y generación de orden

-   Formulario donde el cliente ingresa:
    -   Nombre y apellido\
    -   Email\
    -   Teléfono\
-   Validación básica de inputs.
-   Al confirmar:
    -   Se construye el objeto `orderData` con cliente, productos y
        total.
    -   Se envía la orden a Firestore mediante `createBuyOrder()`.
    -   Se muestra un mensaje con el **ID de la orden generada**.
    -   Se vacía el carrito automáticamente.

------------------------------------------------------------------------

## 🔥 Integración con Firestore

Cada orden guardada incluye: - Datos del comprador\
- Productos del carrito\
- Total\
- Timestamp

Los productos también se obtienen desde Firestore para mostrarlos en la
tienda.

------------------------------------------------------------------------

## 📱 Responsive y modular

-   Componentes desacoplados y fáciles de mantener.
-   Estilos simples pero adaptables a distintos dispositivos.
-   Flujo claro:\
    **Productos → Carrito → Checkout → Confirmación**

------------------------------------------------------------------------

## 🧩 Características técnicas

-   React + Vite\
-   Context API como manejador global del estado\
-   Firestore como base de datos NoSQL\
-   Hooks personalizados y componentes reutilizables\
-   Uso de async/await para interacción con Firebase\
-   Estructura organizada en carpetas: `components/`, `context/`,
    `services/`, etc.

------------------------------------------------------------------------

# 🔧 Guía de Instalación

### 1. Abrir una terminal

(Win + R → escribir `cmd` → Enter)

### 2. Clonar el repositorio

``` bash
git clone https://github.com/SebastianMClark/eCommerce.git
```

### 3. Acceder al directorio

``` bash
cd eCommerce
```

### 4. Instalar dependencias

``` bash
npm install
```

### 5. Iniciar el servidor

``` bash
npm run dev
```

### 6. Abrir el proyecto

    http://localhost:5173/

------------------------------------------------------------------------

# 🧬 Comandos GIT útiles

``` bash
git init
git add .
git commit -m "Primer entrega"
git branch -M main
git remote add origin <url-repo>
git push -u origin main
```

------------------------------------------------------------------------

# ⚡ Guía rápida para crear proyectos con Vite

### 1. Crear el proyecto

``` bash
npm create vite@latest nombre-del-proyecto
```

### 2. Seleccionar opciones

-   **Framework**: React\
-   **Variant**: JavaScript

### 3. Acceder al proyecto

``` bash
cd nombre-del-proyecto
```

### 4. Instalar dependencias

``` bash
npm install
```

### 5. Iniciar servidor

``` bash
npm run dev
```

### 6. Abrir en el navegador

    http://localhost:5173/

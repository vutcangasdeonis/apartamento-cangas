# Apartamento Carretera Cañu — sitio web

Contenido de esta carpeta, listo para subir a GitHub:

```
index.html          → la página completa
css/styles.css       → todos los estilos
js/script.js         → menú móvil + galería con lightbox
images/               → fotos a tamaño completo (usadas al hacer clic)
images/thumbs/        → versiones pequeñas (usadas en la galería, cargan más rápido)
```

## Cómo añadir o cambiar fotos

1. Añade la foto nueva dentro de `images/` (a ser posible ya redimensionada,
   máximo 1920 px de ancho, para que la web vaya rápida).
2. Añade una copia más pequeña (máx. 640 px de ancho) con el mismo nombre
   dentro de `images/thumbs/`.
3. En `index.html`, dentro de la sección `<div class="gallery">`, copia un
   bloque `<button class="gallery__item">...</button>` existente y cambia
   las rutas y el texto `alt`.

## Cómo cambiar el teléfono de reservas

El número aparece en varios sitios de `index.html`: búscalo con Ctrl+F por
`626352687` (o `626 352 687`) y sustitúyelo en todos los sitios, incluidos
los enlaces `tel:+34626352687` y `wa.me/34626352687`.

Instrucciones completas para publicar los cambios en GitHub Pages están en
la respuesta del chat donde se generó este paquete.

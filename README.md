# Traffic Light Project

Este es un proyecto simple de un semáforo creado con React y CSS. El semáforo tiene tres luces (roja, amarilla, y verde) que cambian de color cuando se hace clic en ellas o al presionar un botón.

## Captura de Pantalla

![Traffic Light](https://github.com/edwinmoreno77/Traffic_ligth_/blob/main/src/assets/traffic_ligth_img.jpg?raw=true)

## Tecnologías Utilizadas

- React
- CSS

## Funcionalidad

El semáforo tiene tres luces:

- **Roja**
- **Amarilla**
- **Verde**

Puedes cambiar el color actual del semáforo haciendo clic en cualquiera de las luces o presionando el botón "Change color".

### `useState` Hook

El estado del color se maneja utilizando el hook `useState` de React, que permite que la interfaz se actualice cuando cambia el color.

### Función `changeColor`

La función `changeColor` cambia el color del semáforo de acuerdo con el color actual:

- De rojo a verde
- De verde a amarillo
- De amarillo a rojo

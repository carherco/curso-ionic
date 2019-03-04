# UI Components

En las siguientes páginas podemos encontrar todos los componentes de interfaz de Ionic:

<https://ionicframework.com/docs/components/>

<https://ionicframework.com/docs/api/>

## ion-app

El elemento **ion-app** es el elemento contenedor de una aplicación Ionic.

En un proyecto Ionic solamente puede existir un elemento ion-app.

Dentro de ion-app podremos utilizar el resto de elementos de interfaz.

## Componentes de interfaz

Hay muchos componentes de interfaz, pero se pueden dividir en dos grandes grupos:

- Componentes que se incluyen desde el html (Button, Badge, Card, Checkbox...)
- Componentes que se incluyen desde el javascript (Alert, Action Sheet...)

## Shadow Dom

La mayoría de componentes de interfaz de Ionic son **Web Components**, por lo que solamente podremos modificar mediante CSS aquellas propiedades que expresamente hayan indicado

Por ejemplo, si tenemos este botón:

```html
<ion-button shape="round">Round Button</ion-button>
```

Y queremos cambiar de color el borde del botón, no funciona ni esto

```css
button {
  border-color: red;
  border-width: 3px;
  border-style: solid;
}
```

ni esto

```css
ion-button {
  border-color: red;
  border-width: 3px;
  border-style: solid;
}
```

Ni nada parecido.

Los estilos de un Web Component no se pueden modificar desde fuera. De igual manera los estilos de un Web Component no pueden afectar al html externo.

Solamente podremos modificar aquellas propiedades que se hayan configurado como modificables en el Web Component.

```css
ion-button {
  --border-color: red;
  --border-width: 3px;
  --border-style: solid;
}
```

Enlaces de interés:

- Web Components: https://developer.mozilla.org/es/docs/Web/Web_Components

- Shadow DOM: https://developer.mozilla.org/es/docs/Web/Web_Components/Using_shadow_DOM

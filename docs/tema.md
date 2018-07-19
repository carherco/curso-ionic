# Diseñar un tema para la app

Los estilos en Ionic están definidos con Sass.

## CSS Utilities

<https://ionicframework.com/docs/theming/css-utilities/>

## Setting Attributes Dynamically

```html
<div [attr.text-center]="value ? '' : null">Este div tendrá el atributo text-center si value es true.</div>
```

## Responsive Grid

<https://ionicframework.com/docs/theming/responsive-grid/>

## Customizing the grid

Número de columnas y padding:

```scss
$grid-columns:               12 !default;

$grid-padding-width:         10px !default;

$grid-padding-widths: (
  xs: $grid-padding-width,
  sm: $grid-padding-width,
  md: $grid-padding-width,
  lg: $grid-padding-width,
  xl: $grid-padding-width
) !default;
```

## Custom Breakpoints

Para personalizra los valores de los breakpoints, hay que sobreescribir las variables **$grid-breakpoints** y **$grid-max-widths**.

Por ejemplo:

```scss
$grid-breakpoints: (
  sm: 0,
  md: 768px,
  lg: 1024px
);

$grid-max-widths: (
  sm: 420px,
  md: 720px,
  lg: 960px
);
```


## Custom Colors

Para cambiar los colores del tema, basta con cambiar el mapa de colores.


En src/theme/variables.scss

```scss
$colors: (
  primary:    #488aff,
  secondary:  #32db64,
  danger:     #f53d3d,
  light:      #f4f4f4,
  dark:       #222,
  twitter:    #55acee
);
```

Podemos inventar más colores e incluso indicar color de background (base) y color de texto (contrast)

```scss
$colors: (
  primary:    #488aff,
  secondary:  #32db64,
  danger:     #f53d3d,
  light:      #f4f4f4,
  dark:       #222,
  otrocolor: (
    base: #55acee,
    contrast: #ffffff
  )
);
```

La variable $colors está disponible como propiedad en muchos componentes. Por ejemplo, podemos utilizar el color *otrocolor* en un botón:

```html
<button ion-button color="otrocolor">I'm a button</button>
```

También existe una función *color* para acceder al mapa de colores:

```scss
my-component {
  background: color($colors, otrocolor, base);
}
```

En este caso, la salida compilada sería:

```css
my-component {
  background: #55acee;
}
```

## Platform Specific Styles

<https://ionicframework.com/docs/theming/platform-specific-styles/>


## Overriding Ionic Sass Variables

En este link se pueden consultar todas las variables de Ionic que se pueden sobreescribir

<https://ionicframework.com/docs/theming/overriding-ionic-variables/>


## Platform Specific Styles

Ionic añade a la etiqueta raíz &lt;ion-app> una class que identifica el tipo de dispositivo. 

Por ejemplo en Android:

```html
<ion-app class="md">
```

Identificadores: 

- ios: **ios** => Para iphone, ipad, or ipod.
- android: **md**	=> Para dispositivos Android
- windows: **wp** => Dispositivos windows ejecutando Cordova

Cualquier otro tipo de dispositivo distinto de los anteriores tendrá el identificador **md**.

Esto quiere decir que podemos aplicar estilos que afecten únicamente a una plataforma:

```scss
.md .button {
  text-transform: capitalize;
}
```


<https://ionicframework.com/docs/theming/platform-specific-styles/>


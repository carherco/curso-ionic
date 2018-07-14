# Diseñar un tema para la app

Ionic is built on top of Sass,

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

Breakpoints

To customize the breakpoints and their values, override the values of $grid-breakpoints and $grid-max-widths. For example, to only use 3 breakpoints, the following could be written:

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


## Custom Colors

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

There are many variables you can override with Ionic. Any of the following variables can be overridden from your src/theme/variables.scss file, just add a new value to the file:

```scss
$text-color: #000099;

$colors(
  ...
)
```

En este link se pueden consultar todas las variables:

<https://ionicframework.com/docs/theming/overriding-ionic-variables/>

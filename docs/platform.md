# Platform

El servicio **Platform** permite obtener información sobre el dispositivo utilizado, la orientación actual del mismo, la dirección del lenguaje (left-to-right o right-to-left), etc.

Atención: Este servicio a cambiado entre la versión 3 y la 4.

Para disponer del servicio basta con inyectarlo.

```typescript
import { Platform } from '@ionic/angular';

@Component({...})
export MyPage {
  constructor(public platform: Platform) {
    if (this.platform.is('ios')) {
      // This will only print when on iOS
      console.log('I am an iOS device!');
    }
  }
}
```

## Platform.ready()

El método **ready()** devuelve una promesa que se resolverá cuando el dispositivo esté listo.

Es buena práctica utilizarlo en las llamadas a librerías nativas. 

```typescript
this.platform.ready().then(() => {
  if (this.platform.is('cordova')) {
    // make your native API calls
  } else {
    // fallback to browser APIs
  }
});
```

## Platform.is()

El método **is()** nos devuelve un booleano indicando si la plataforma en la que se está ejecutando la aplicación es del tipo que hemos preguntado:

```
import { Platform } from '@ionic/angular';

@Component({...})
export MyPage {
  constructor(public platform: Platform) {
    if (this.platform.is('ios')) {
      // This will only print when on iOS
      console.log('I am an iOS device!');
    }
  }
}
```

```
| Platform Name   | Description                        |
|-----------------|------------------------------------|
| android         | on a device running Android.       |
| cordova         | on a device running Cordova.       |
| ios             | on a device running iOS.           |
| ipad            | on an iPad device.                 |
| iphone          | on an iPhone device.               |
| phablet         | on a phablet device.               |
| tablet          | on a tablet device.                |
| electron        | in Electron on a desktop device.   |
| pwa             | as a PWA app.   |
| mobile          | on a mobile device.                |
| desktop         | on a desktop device.               |
| hybrid          | is a cordova or capacitor app.     |
```

## Platform.platforms()

El método **platforms()** devuelve un array de strings con las plataformas en las que se está ejecutando la app.

Por ejemplo, en un iPhone, el método devolverá 'cordova', mobile', 'ios' y 'iphone'.

```typescript
import { Platform } from '@ionic/angular';

@Component({...})
export MyPage {
  constructor(private platform: Platform) {
    console.log(this.platform.platforms());
  }
}
```

## Platform.isRTL

La propiedad isRTL es un booleano que nos indica si el dispositivo en el que se está ejecutando la app está configurado en modo RTL (Right-to-left).

## Platform.isLandscape() y Platform.isPortrait()

Los métodos isLandscape() e isPortrait() devuelven booleanos que nos indican si el dispositivo está en horizontal o en vertical.

## Platform.width() y Platform.height()

Los métodos **width()** y **height()** nos devuelven el ancho y el alto de la pantalla respectivamente.

## Platform.pause, Plaform.resume y Plaform.resize

Las propiedades **pause**, **resume** y **resize** son *Subjects*. Por lo tanto, nos podremos suscribir a ellas con *subscribe()*.

- pause: este subject emite cuando la app pasa a segundo plano. Normalmente cuadno el usuario cambia a otra aplicación. No aplica a navegadores.

- resume: este subject emite cuando la app vuelve a primer plano. No aplica a navegadores.

- resize: este subject emite cuando la ventana del navegador cambia de dimensiones. o en un dispositivo móvil, cuando el usuario cambia la orientación.

```typescript
this.platform.pause.subscribe(
  () => this.saveState()
);

this.platform.resume.subscribe(
  () => this.restoreState()
);

this.platform.resize.subscribe(
  () => {
  	this.width = this.platform.width();
  	this.height = this.platform.height();
  }
);
```

## Platform.backButton

La propiedad **backButton** es un *Emitter* al que nos podemos suscribir con *subscribe()* para programar el comportamiento del botón de volver atrás. 

```typescript
this.platform.backButton.subscribe(
  () => // ...
);
```

## Enlaces de interés

- https://github.com/carherco/curso-angular/blob/master/docs/subject.md
- http://reactivex.io/documentation/subject.html
- https://github.com/carherco/curso-angular/blob/master/docs/event-emitters.md

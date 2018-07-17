# Platform

El servicio **Platform** permite obtener información sobre el dispositivo utilizado, la orientación actual del mismo, la dirección del lenguaje (left-to-right o right-to-left), etc.

Para disponer del servicio basta con inyectarlo.

```typescript
import { Platform } from 'ionic-angular';

@Component({...})
export MyPage {
  constructor(public plt: Platform) {

  }
}
```

Instance Members

- **dir()**

Devuele la dirección del lenguaje. 

- **getQueryParam()**

Devuelve la query string.

- **height()**

Devuelve el window.innerHeight.

- **is(platformName)**

Devuelve un booleano.

Ejemplo:

```typescript
import { Platform } from 'ionic-angular';

@Component({...})
export MyPage {
  constructor(public plt: Platform) {
    if (this.plt.is('ios')) {
      // This will only print when on iOS
      console.log('I am an iOS device!');
    }
  }
}
```

Nombres de plataformas:

- android: en un dispositivo que ejecuta Android.
- cordova: en un dispositivo que ejecuta Cordova.
- core: en un dispositivo de escritorio (desktop device).
- ios: en un dispositivo que ejecuta iOS.
- ipad: en un iPad.
- iphone: en un iPhone.
- mobile: en un móvil.
- mobileweb: en un navegador en un dispositivo móvil.
- phablet: en una phablet.
- tablet: en una tablet.
- windows:en un dispositivo que ejecuta Windows.


- **isLandscape()**

Devuelve true si el dispositivo está en horizontal.

- **isPortrait()**

Devuelve true si el dispositivo está en vertical.

- **isRTL()**

Devuelve true si la dirección del texto de la app es right-to-left.

- **lang()**

Devuelve el lenguaje de la app.

- **pause**

El evento *pause* emite cuando la plataforma nativa pone la aplicación en background, normalmente cuando el usuario cambia a otra aplicación. Emite en aplicaciones Cordova pero no en navegadores estándar.

- **platforms()**

Devuelve un array de valores de platforms

- **ready()**

Devuelve una promesa cuando la plataforma está lista y las funcionalidades nativas pueden ser llamadas. Si es un navegador web, entonces la promesa se resuelve cuando el DOM está listo.

```typescript
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({...})
export MyApp {
  constructor(public plt: Platform) {
    this.plt.ready().then((readySource) => {
      console.log('Platform ready from', readySource);
      // Platform now ready, execute any required native code
    });
  }
}
```

- **registerBackButtonAction(fn, priority)**

El evento *back button* se dispara cuando el usuario presiona el botón físico de volver del dispositivo (se le suele conocer como *"hardware back button"*). Este evento solamente se utilizar en apps que se ejecutan en dispositivos Android o Windows. iOs no tiene botón físico de volver como tal.

Registrar una acción para el botón de volver nos permite controlar lo que ocurre cuando se utilice dicho botón. Si se registran varias funciones, se utilizará la que tenga mayor prioridad.

Parámetros de entrada:

- fn	(Function)	

- priority	(number)	

Retorno: (Function) 

El método devuelve una función. Si dicha función es llamada, se desregistrará la acción.

- **resize**

El evento *resize* emite cuando la plataforma nativa recupera la aplicación del background. Emite en aplicaciones Cordova pero no en navegadores estándar.

- **resume**

El evento *resize* emite cuando la plataforma nativa recupera la aplicación del background. Emite en aplicaciones Cordova pero no en navegadores estándar.

```typescript
constructor( private platform: Platform ) {
    platform.ready().then(() => {
        this.platform.pause.subscribe(() => {
            console.log('[INFO] App paused');
        });

        this.platform.resume.subscribe(() => {
            console.log('[INFO] App resumed');
        });
    });
}
```

- **setDir(dir, updateDocument)**

Establece la dirección del lenguaje. Si update document es *true* se actualiza también la etiqueta html. 

```html
<html dir="ltr">
```

- **setLang(language, updateDocument)**

Establece el lenguaje de la aplicación. Si el segundo parámetro es *true* actualiza también la etiqueta html.

```html
<html lang="es-MX">
```

- **testUserAgent()**

- **url()**

Devuelve la url actual.

- **versions()**

Devuelve un objeto con información sobre la versión de todas las plataformas.

```typescript
import { Platform } from 'ionic-angular';

@Component({...})
export MyPage {
  constructor(public plt: Platform) {
    // This will print an object containing
    // all of the platforms and their versions
    console.log(plt.versions());
  }
}
```

- **width()**

Devuelve el ancho del viewport utilizando (window.innerWidth)

<https://ionicframework.com/docs/api/platform/Platform/>


## ShowWhen

El atributo showWhen permite añadir elementos al DOM únicamente en plataformas u orientaciones de pantalla específicas.

```html
<div showWhen="android">
 I am visible on Android!
</div>

<div showWhen="ios">
 I am visible on iOS!
</div>

<div showWhen="android,ios">
 I am visible on Android and iOS!
</div>

<div showWhen="portrait">
 I am visible on Portrait!
</div>

<div showWhen="landscape">
 I am visible on Landscape!
</div>
```

## HideWhen

El complementario de showWhen.

```html
<div hideWhen="android">
 I am hidden on Android!
</div>

<div hideWhen="ios">
 I am hidden on iOS!
</div>

<div hideWhen="android,ios">
 I am hidden on Android and iOS!
</div>

<div hideWhen="portrait">
 I am hidden on Portrait!
</div>

<div hideWhen="landscape">
 I am hidden on Landscape!
</div>
```

Si se utiliza showWhen y hideWhen en el mismo atributo, el elemento NO se mostrará si hideWhen es true o si showWhen es false. 

Si además se añade el attribute hidden, el elemento no se mostrará si hidden es true.


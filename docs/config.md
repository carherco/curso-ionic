# Config

La clase **Config** (inyectable) permite configurar nuestra aplicación de forma completa o particularizada para una plataforma.


```typescript
import { IonicApp, IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [ MyApp ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Go Back',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    }, {}
  )],
  bootstrap: [IonicApp],
  entryComponents: [ MyApp ],
  providers: []
})
```

En el ejemplo siguiente, se sobreescribe un valor general para la plaraforma ios:

```typescript
import { IonicModule } from 'ionic-angular';

@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom',
      platforms: {
        ios: {
          tabsPlacement: 'top',
        }
      }
    }, {}
  )],
  ...
})
```

Y podemos también personalizar dichos valores en componentes concretos:

```html
<ion-tabs tabsPlacement="top">
  <ion-tab tabTitle="Dash" tabIcon="pulse" [root]="tabRoot"></ion-tab>
</ion-tabs>
```

Por último, Ionic permite pasar un valor de configuración por url para testear en el navegador. Simplemente hay que añadir  **?ionic&lt;PROPERTYNAME>=&lt;value>** a la url. 

```
http://localhost:8100/?ionicTabsPlacement=bottom
```

Por programación, se puede añadir cualquier valor al config, y recuperarlo después en algún otro componente.

```typescript
config.set('ios', 'favoriteColor', 'green');

// from any page in your app:
config.get('favoriteColor'); // 'green' when iOS
```

Un valor de config puede venir de cualquier sitio y tener cualquier valor, pero hay algunos valores ya definidos con valores concretos dependiendo de la plataforma:

<https://ionicframework.com/docs/api/config/Config/>

# Config

La clase **Config** (inyectable) permite configurar nuestra aplicación de forma completa o particularizada para una plataforma.

La configuración de la aplicación se realiza en el módulo, concretamente en el método **forRoot()** de **IonicModule**.

```typescript
import { IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    BrowserModule, 
    IonicModule.forRoot({
      rippleEffect: false,
      mode: 'ios'
    }), 
    AppRoutingModule
  ],
  ...
})
```

La lista completa de opciones de configuración está disponible en la documentación oficial.


## Enlace a la documentación oficial

https://ionicframework.com/docs/utilities/config


NOTA: Probar si esto sigue vigente en versión 4.

Por último, Ionic permite pasar un valor de configuración por url para testear en el navegador. Simplemente hay que añadir  **?ionic&lt;PROPERTYNAME>=&lt;value>** a la url. 

```
http://localhost:8100/?ionicTabsPlacement=bottom
```


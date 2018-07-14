# Manejo de errores

La clase **IonicErrorHandler** intercepta el manejador de errores de consola por defecto y  intercepts the default Console error handling and displays runtime errors as an overlay when using Ionic's Dev Build Server.

IonicErrorHandler Example

```typescript
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';

@NgModule({
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
class AppModule {}
```

## Custom Error Handlers

Podemos programar nuestro propio manejador de errores para sustituir el de por defecto o incluso extender el de Ionic.

```typescript
class MyErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    // do something with the error
  }
}

@NgModule({
  providers: [{ provide: ErrorHandler, useClass: MyErrorHandler }]
})
class AppModule {}
```

https://ionicframework.com/docs/api/util/IonicErrorHandler/

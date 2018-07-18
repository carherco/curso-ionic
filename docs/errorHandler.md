# Manejo de errores

## ErrorHandler

La implementación por defecto de **ErrorHandler** saca los mensajes de error en la consola.

Para interceptar el manejo de errores, tenemos que crearnos un manejador personalizado que reemplace el comportamiento original.

```typescript
content_copy
class MyErrorHandler implements ErrorHandler {
  handleError(error) {
    // do something with the exception
  }
}

@NgModule({
  providers: [{provide: ErrorHandler, useClass: MyErrorHandler}]
})
class MyModule {}
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

https://angular.io/api/core/ErrorHandler


## IonicErrorHandler

La clase **IonicErrorHandler** intercepta el manejador de errores de consola por defecto y muestra los errores de tiempo de ejecución en el dashboard de Ionic.

```typescript
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';

@NgModule({
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
class AppModule {}
```

## Custom Ionc Error Handlers

Podemos programar nuestro propio manejador de errores para sustituir el de por defecto o incluso extender el de Ionic.

```typescript
class MyErrorHandler extends IonicErrorHandler {
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

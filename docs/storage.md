# Storage

El servicio de storage es una manera muy fácil de almacenar parejas de key/value y objetos JSON.

Es capaz de manejar varios sistemas de almacenamiento, eligiendo el mejor dependiendo de cada plataforma.

En apps nativas se prioriza SQLite, en web o PWAs la prioridad es IndexedDB, WebSQL, y localstorage, en ese orden.

## Instalación y uso

Si queremos utilizar SQLite, hay que instalar el plugin de cordova **cordova-sqlite-storage**:

> ionic cordova plugin add cordova-sqlite-storage

Y también @ionic/storage, aunque ya viene instalado por defecto a partir de Ionic V2:

> npm install --save @ionic/storage

Para utilizarlos, hay que importarlos en nuestro módulo, por ejemplo en src/app/app.module.ts:

```typescript
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    // ...
  ],
  providers: [
    // ...
  ]
})
export class AppModule {}
```

E inyectarlos en nuestros componentes o páginas:

```typescript
import { Storage } from '@ionic/storage';

export class MyApp {
  constructor(private storage: Storage) { }

  ...

  // set a key/value
  storage.set('name', 'Max');

  // Or to get a key/value pair
  storage.get('age').then((val) => {
    console.log('Your age is', val);
  });
}
```

## Configuración

El Storage puede configurarse al importarlo en el módulo.

Se pueden ver las opciones en el siguiente enlace: <https://github.com/localForage/localForage#configuration>

```typescript
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [...],
  imports: [
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [...],
  entryComponents: [...],
   providers: [...]
})
export class AppModule { }
```

<https://ionicframework.com/docs/storage/>


## API

- driver: Devuleve el nombre del driver que se está utilizando

- ready(): Devuelve una promesa cuando el store esté listo

- get(key): Devuelve una pomesa con el valor

- set(key, value): Devuelve una promesa cuando se establezca el valor en el storage.

- remove(key): Devuelve una promesa cuando el valor haya sido eliminado

- clear(): Limpia por completo el store. Devuelve una promesa cuando el store se haya limpiado

- length(): Devuelve una promesa con el número de claves almacenadas

- keys(): Devuelve una promesa con las claves del store

- forEach(iteratorCallback): Itera sobre cada para clave, valor. Los parámetros de la función de callback son (value, key, iterationNumber). Devuelve una promesa cuando la iteración ha terminado.

## Almacenes disponibles en los navegadores

- Cookies: El único sistema disponible antes de HTML5. El menos seguro y el más limitado de todos.

- Session Storage: permite almacenar parejas de clave/valor. Los datos están disponibles únicamente mientras dure la sesión.

- Local Storage: permite almacenar parejas de clave/valor. Los datos están disponibles incluso si se cierra el navegador y se vuelve a abrir.

- IndexedDB: Permite almacenar incluso imágenes y archivos. Permite indexar los datos para mejorar la rapidez en las consultas.

- Web SQL: Base de datos basada en SQLite

- Cache Storage: Almacena parejas de objetos Request/Response

Application Cache: Almacena recursos. 

https://developer.mozilla.org/es/docs/Web/HTML/Recursos_offline_en_firefox


https://www.arkaitzgarro.com/html5/capitulo-8.html

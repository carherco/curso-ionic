# IonicPage (v3)

El elemento **Ionic Page** maneja el registro y visualización de páginas en base a URLs. 

En Ionic las URLs no dictan la navegación de las apps. En vez de eso, ayudan a enlazar contenidos específicos de código como un breadcrumb. La URL actual se actualiza mientras navegamos, pero lo que utilizamos para movernos son los métodos push y pop del NavController o NavPush y NavPop. 

El sistema de URL se denomina *deep link system* en vez de *routing* para animar a los desarrolladores a pensar en las URLs como breadcrumbs. 

## Modo de uso

El primer paso para configurar *deep links* es añadir la página que debería ser un deep link en el import del **IonicPageModule.forChild** del módulo de dicha página.

```typescript
@NgModule({
  declarations: [
    MyPage
  ],
  imports: [
    IonicPageModule.forChild(MyPage)
  ],
  entryComponents: [
    MyPage
  ]
})
export class MyPageModule {}
```

Después, se añade el decorador **@IonicPage** al componente.

```typescript
@IonicPage()
@Component({
  templateUrl: 'main.html'
})
export class MyPage {}
```

Y con eso se creará automáticamente un link al componente MyPage utilizando el mismo nombre que la clase.

A este página se puede navegar utilizando dicho nombre. Por ejemplo:

```typescript
@Component({
  templateUrl: 'another-page.html'
})
export class AnotherPage {
  constructor(public navCtrl: NavController) {}

  goToMyPage() {
    // go to the MyPage component
    this.navCtrl.push('MyPage');
  }
}
```

El decorador @IonicPage acepta un objeto de metadatos de tipo DeepLinkMetadataType. Este objeto tiene 4 propiedades opcionales: name, segment, defaultHistory, y priority.

### Cambiar el nombre del link

Con la propiedad **name** se puede cambiar el nombre del enlace:

```typescript
@IonicPage({
  name: 'my-page'
})
```

Esto creará un enlace al componente *MyPage* utilizando el nombre "my-page". Por lo tanto la navegación a esta página sería como muestra el siguiente código.

```typescript
goToMyPage() {
  // go to the MyPage component
  this.navCtrl.push('my-page');
}
```

### Establecer el path

La propiedad **segment** se utiliza para establecer la URL de la página. Si no se establece esta propiedad, se utiliza el valor del *name*. Cuando una página se convierte en la página activa, se añade el segment a la URL.

Por ejemplo, con esta configuración

```typescript
@IonicPage({
  name: 'my-page',
  segment: 'some-path'
})
```

Al navegar a esta página la URL será:

http://localhost:8100/#/some-path

### Enlaces con parámetros

La propiedad segment se puede parametrizar utilizando la sintaxis *:parametro*.

```typescript
@IonicPage({
  name: 'detail-page',
  segment: 'detail/:id'
})
```

Solamente son válidos parámetros de tipo string.

```typescript
@IonicPage({
  name: 'list'
})
export class ListPage {
  constructor(public navCtrl: NavController) {}

  pushPage(detailInfo) {
    // Push an `id` to the `'detail-page'`
    this.navCtrl.push('detail-page', {
      'id': detailInfo.id
    })
  }
}
```

Si el valor de *detailInfo.id* es 12, por ejemplo, la URL acabaría siendo algo así:

http://localhost:8101/#/list/detail/12

### Default History

A una página se puede llegar directamente a través de una URL. En este caso, a veces se necesita que el historial de navegación sea el mismo que si hubiéramos navegado desde dentro de la aplicación.

El historial puede establecerse a través de la propiedad **defaultHistory**.
Este historial solamente se utiliza si no existe ningún historial.

Es un array de strings.

```typescript
@IonicPage({
  name: 'detail-page',
  segment: 'detail/:id',
  defaultHistory: ['list']
})
```

En el ejemplo anterior, si la app se lanza en http://localhost:8101/#/detail/12, la página mostrada será la 'detail-page' con un valor de id igual a 12 y habilitará el botón de volver, el cual si se pulsa llevará a la página 'list'.

### Priority

La propiedad **priority** solamente se utiliza durante el *preloading*. Si no está el preloading activado, se ignora.

Para habilitar el preloading, se debe establecer a **true** la propiedad **preloadModules** del módulo principal de la aplicación:

```typescript
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      preloadModules: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ]
})
export class AppModule { }
```

Cuando el preloading está activado, cargará los módulos basándose en el valor de la propiedad *priority*. Dicha propiedad puede tomar 3 valores:  "high", "low", and "off". Si no se indica prioridad, se considera "low".

Todos los *deep links* (pages) con priority "high" se cargarán primero. Después se cargarán los "low". Los que tengan "off" no se cargarán.

```typescript
@IonicPage({
  name: 'my-page',
  priority: 'high'
})
```

Normalmente configuraremos con prioridad "high" las páginas que se vayan a mostar al usuario al cargar la aplicación.

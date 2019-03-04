# Layout

El html de cualquier app de ionic debe comenzar con el elemento **ion-app**. 

A partir de ese elemento, podemos elegir entre uno de los siguientes layouts.

- Página con contenido
- Tabs
- Menú
- Split Pane

## Navegación

En cuanto a la navegación, utilizaremos la librería @angular/router de Angular.

Eso quiere decir que tenemos los servicios y directivas de la librería @angular/router

- Rutas simples
- Rutas con parámetros
- Redirecciones
- Rutas anidadas con *children*
- Lazy loading de módulos con *loadChildren*
- El servicio ActivatedRoute para obtener información de la ruta
- El servicio Router para navegar
- La directiva router-outlet para indicar dónde aparecen las páginas
- La directiva routerLink para crear enlaces
- La directiva routerLinkActive para marcar el menú/enlace activo
- Guards para proteger el acceso a las páginas

etc.

### Enlaces de interés sobre routing de Angular

- https://ionicframework.com/docs/navigation/angular
- https://github.com/carherco/curso-angular/blob/master/docs/routing.md
- https://angular.io/guide/router

## Layout de página

```html
<ion-header>
  <ion-toolbar>
    <ion-title>
      Ionic Blank
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content padding>
  The world is your oyster.
  <p>If you get lost, the <a target="_blank" rel="noopener" href="https://ionicframework.com/docs/">docs</a> will be your guide.</p>
</ion-content>

<ion-footer>Pie de página</ion-footer>
```

## Layout de tabs

Aunque se pueden utilizar como componenes únicamente de interfaz, los Tabs suelen ser utilizados como uno de los posibles layouts de navegación.

Se componen de varios elementos:

- ion-tabs: https://ionicframework.com/docs/api/tabs
- ion-tab-bar: https://ionicframework.com/docs/api/tab-bar
- ion-tab-button: https://ionicframework.com/docs/api/tab-button


```html
<ion-tabs>

  <ion-tab-bar slot="bottom">

    <ion-tab-button tab="page1">
      <ion-icon name="flash"></ion-icon>
      <ion-label>Page 1</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="page2">
      <ion-icon name="apps"></ion-icon>
      <ion-label>Page 2</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="page3">
      <ion-icon name="send"></ion-icon>
      <ion-label>Page 3</ion-label>
    </ion-tab-button>
    
  </ion-tab-bar>

</ion-tabs>
```

```typescript
const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'page1',
        children: [
          {
            path: '',
            loadChildren: '../page1/page1.module#Page1PageModule'
          }
        ]
      },
      {
        path: 'page2',
        children: [
          {
            path: '',
            loadChildren: '../page2/page2.module#Page2PageModule'
          }
        ]
      },
      {
        path: 'page3',
        children: [
          {
            path: '',
            loadChildren: '../page3/page3.module#Page3PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'page1',
        pathMatch: 'full'
      }
    ]
  }
];
```

### Enlace a la documentación oficial de tabs

https://ionicframework.com/docs/api/tabs

## Layout de menu lateral

El menú es otro de los componentes de interfaz que se utilizan para navegación.

Es un menú lateral que se abre y se cierra.

Normalmente se utiliza para navegación, pero podría contener cualquier otro tipo de contenido.

```html
<ion-app>
  <ion-menu>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-list-header>
          Navigate
        </ion-list-header>
        <ion-menu-toggle auto-hide="false">
          <ion-item button>
            <ion-icon slot="start" name='home'></ion-icon>
            <ion-label>
              Home
            </ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-router-outlet main></ion-router-outlet>
</ion-app>
```

### Enlace a la documentación oficial de menu

https://ionicframework.com/docs/api/menu

## Layout Split Pane

Un layout *Split Pane* es una estructura más compleja porque puede combinar 2 layouts.

Mientras el viewport permanezca por encima de un breakpoint específico, serán visibles ambos layouts.

Cuando el viewport sea inferior al breakpoint, solamente será visible el layout que tenga el atributo **main**.

En el siguiente ejemplo tenemos un split pane con un *ion-menu* y un *ion-router-outlet*.

```html
<ion-app>
  <ion-split-pane when="sm">
    <ion-menu>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list>
          <ion-list-header>
            Navigate
          </ion-list-header>
          <ion-menu-toggle auto-hide="false">
            <ion-item button>
              <ion-icon slot="start" name='home'></ion-icon>
              <ion-label>
                Home
              </ion-label>
            </ion-item>
          </ion-menu-toggle>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-router-outlet main></ion-router-outlet>

  </ion-split-pane>
</ion-app>
```


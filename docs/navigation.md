# Navigation

Hay varias formas de navegar por una aplicación Ionic

## Basic Navigation

La navegación se gestiona a través del componente &lt;ion-nav> que funciona como una pila simple sobre la cual se realizan operaciones push y pop de las páginas.

Todo empieza con una **root page** que carga el componente Nav.

```typescript
import { StartPage } from 'start'

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
class MyApp {
  // First page to push onto the stack
  rootPage = StartPage;
}
```

## NavController

NavController la clase base de los componentes de navegación como Nav y Tab. Básicamente, un navigation controller es un array de páginas que representa un historial de navegación.

Este array se puede manipular para navegar or la aplicación o bien haciendo push o bien haciendo pop de páginas.

Podemos acceder al **NavController** en cada página a la que naveguemos inyectando el servicio en el constructor de la página.

```typescript
@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Login</ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content>Hello World</ion-content>`
})
export class StartPage {
  
  constructor(public navCtrl: NavController) { }
  
}
```

El componente &lt;ion-nav> extiende la clase NavController class.

## Push

Para navegar de una página a otra, simplemente hacemos **push** en la pila.

```typescript
@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Login</ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content>
    <button (click)="goToOtherPage()">
      Go to OtherPage
    </button>
  </ion-content>`
})
export class StartPage {
  
  constructor(public navCtrl: NavController) { }

  goToOtherPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(OtherPage);
  }
}
```

```typescript
@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Other Page</ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content>I'm the other page!</ion-content>`
})
class OtherPage { }
```

## NavParams

Se le puede pasar datos a la vista a través del método push. Esos datos serán accesibles a través de la clase **NavParams**.

```typescript
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OtherPage } from './other-page';
@Component({
   template: `
   <ion-header>
     <ion-navbar>
       <ion-title>Login</ion-title>
     </ion-navbar>
   </ion-header>

   <ion-content>
     <button ion-button (click)="pushPage()">
       Go to OtherPage
     </button>
   </ion-content>
   `
})
export class StartPage {
  constructor(public navCtrl: NavController) {
  }

  pushPage(){
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(OtherPage, {
      id: "123",
      name: "Carl"
    });
  }
}

import { NavParams } from 'ionic-angular';

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Other Page</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>I'm the other page!</ion-content>`
})
class OtherPage {
  constructor(private navParams: NavParams) {
     let id = navParams.get('id');
     let name = navParams.get('name');
  }
}
```

## Navigation Bar

Si nuestra página tiene un &lt;ion-navbar>, aparecerá automáticamente un botón de volver si la página actual no es la root page. También aparecerá el título de la Nav Bar.

## Pop

El método **Pop** del NavController también sirve para ir hacia atrás.

```typescript
@Component({
  template: `
  <ion-content>
    <button (click)="goBack()">
      There's no place like home
    </button>
  </ion-content>`
})
class OtherPage {
  
  constructor(public navCtrl: NavController) { }

  goBack() {
    this.navCtrl.pop();
  }
}
```


## Navigating from the Root Component

Si queremos acceder al NavController desde el componente en el que se declaró el &lt;ion-nav> (normalmente nuestro app.component) tenemos que hacerlo mediante una **template reference variable** y el decorador **@ViewChild**.

```typescript
@Component({
  template: '<ion-nav #myNav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  @ViewChild('myNav') nav;
  rootPage = TabsPage;

  // Wait for the components in MyApp's template to be initialized
  // In this case, we are waiting for the Nav identified by
  // the template reference variable #myNav
  ngAfterViewInit() {
    // Let's navigate from TabsPage to Page1
    this.nav.push(LoginPage);
  }
}
```

## Navigating from an Overlay Component

A veces necesitamos navegar desde un componente superpuesto (popover, modal, alert, etc). Para estos casos, podemos conseguir una referencia al NavController a través del método **getRootNav()** del servicio **App**.

```typescript
import { Component } from '@angular/core';
import { App, ViewController } from 'ionic-angular';

@Component({
    template: `
    <ion-content>
      <h1>My PopoverPage</h1>
      <button ion-button (click)="pushPage()">Call pushPage</button>
     </ion-content>
    `
  })
  class PopoverPage {
    constructor(
      public viewCtrl: ViewController
      public appCtrl: App
    ) {}

    pushPage() {
      this.viewCtrl.dismiss();
      this.appCtrl.getRootNav().push(SecondPage);
    }
  }
```

## View creation

Las vistas (views) son creadas cuando se añaden a la pila de navegación. Por ejemplo, al utilizar el método push(), el NavController compila el componente indicado en el método, lo añade a la pila y lo introduce en la vista.

Por defecto, las páginas se cachean y se dejan en el DOM cuando navegamos a otra vista mediante push(). Se destruyen cuando dejan de existir en la pila de navegación a causa de un pop() o de un setRoot().


## Lifecycle events

Los eventos de ciclo de vida se disparan durante varias etapas de la navegación. Podemos definir funciones para estos eventos en cualquier componente página.

```typescript
import { Component } from '@angular/core';

@Component({
  template: 'Hello World'
})
class HelloWorld {
  ionViewDidLoad() {
    console.log("I'm alive!");
  }
  ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");
  }
}
```


- **ionViewDidLoad: void** => Se ejecuta cuando la página se ha cargado. Solamente ocurre una vez por página.
- **ionViewWillEnter: void** => Se ejecuta cuando la página está a punto de entrar y convertirse en la página activa.
- **ionViewDidEnter: void** => Se ejecuta cuando la página se ha cargado y es ya la página activa. Este evento se ejecuta tanto si es la primara carga como si se ha cargado de la cache.
- **ionViewWillLeave: void** => Se ejecuta cuando la página está a punto de salir y dejar de ser la página activa.
- **ionViewWillUnload	void** => Se ejecuta cuando la página está a punto de ser destruida.


## Nav Guards

En algunos casos, el desarrollador necesita controlar la salida y/o la entrada en las vistas. Para permitir esto, NavController tiene los métodos **ionViewCanEnter** e **ionViewCanLeave**. Son similares a los guards de Angular.

- **ionViewCanEnter	boolean/Promise&lt;void>**	Se ejecuta para decidir si se puede entrar a una página.
- **ionViewCanLeave	boolean/Promise&lt;void>**	Se ejecuta para decidir si se puede salir de una página.


```typescript
export class MyClass{
 constructor(
   public navCtrl: NavController
  ){}

  pushPage(){
    this.navCtrl.push(DetailPage);
  }

  ionViewCanLeave(): boolean{
   // here we can either return true or false
   // depending on if we want to leave this view
   if(isValid(randomValue)){
      return true;
    } else {
      return false;
    }
  }
}
```


```typescript
export class MyClass{
 constructor(
   public navCtrl: NavController
  ){}

  pushPage(){
    this.navCtrl.push(DetailPage);
  }

}

export class DetailPage(){
  constructor(
    public navCtrl: NavController
  ){}
  ionViewCanEnter(): boolean{
   // here we can either return true or false
   // depending on if we want to leave this view
   if(isValid(randomValue)){
      return true;
    } else {
      return false;
    }
  }
}
```


## NavOptions

Algunos métodos del NavController permiten personalizar la transición pasando un objeto con las siguietes propiedades:

- animate (boolean) => Si se debe animar o no la transición.
- animation (string) => Tipo de transición.
- direction (string) => Si el usuario está (conceptualmente) navegando hacia delante o hacia atrás.
- duration (number) => La duración de la animación en milisegundos.
- easing (string) => La relajación (easing) de la animación.

La propiedad *animation* permite estos tres valores: *md-transition*, *ios-transition* y *wp-transition*.

## Métodos

<https://ionicframework.com/docs/api/navigation/NavController/#instance-members>


## Tabbed Navigation

Para inicializar el componente Tabas, se utiliza &lt;ion-tabs> con un &lt;ion-tab para cada pestaña.

```typescript
import { Component } from '@angular/core';
import { Tab1 } from './tab1-page';
import { Tab2 } from './tab2-page';
  
@Component({
  template: `
    <ion-tabs>
      <ion-tab tabIcon="heart" [root]="tab1"></ion-tab>
      <ion-tab tabIcon="star" [root]="tab2"></ion-tab>
    </ion-tabs>`
})
class MyApp {

  tab1: any;
  tab2: any;

  constructor() {
    this.tab1 = Tab1;
    this.tab2 = Tab2;
  }
}
```

Cada pestaña individual es un @Component

```typescript
import { Component } from '@angular/core';

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Heart</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>Tab 1</ion-content>`
})
export class Tab1 { }

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Star</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>Tab 2</ion-content>`
})
export class Tab2 { }
```

Cada &lt;ion-tab tiene una propiedad [root], como el &lt;ion-nav>. Esto es porqeu cada pestaña es en sí un componente de navegación y tiene su propia pila de navegación.

```typescript
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
...
})
class Tab1 {
  
  constructor(public navCtrl: NavController) {
    // nav refers to Tab1
    console.log(this.nav.id)
  }
}

@Component({
...
})
class Tab2 {
  
  constructor(public navCtrl: NavController) {
    // nav refers to Tab2
    console.log(this.nav.id)
  }
}
```

https://ionicframework.com/docs/components/#tabs





## Menu

El componente **Menu** aparece y desaparece por un lateral. Por defecto por está a la izquierda, pero se puede cambiar.

El menú se mostrará diferente según el **display type** elegido.

El menú &lt;ion-menu> debe ser hermano (sibling) del contenido al que pertenece, es decir, del &lt;ion-nav>. Además, al menú se le debe pasar una variable con la referencia al contenido. Esto es para poder manejar los gestos para hacer aparecer y desaparecer el menú.

```typescript
<ion-menu [content]="mycontent">
  <ion-content>
    <ion-list>
      <p>some menu content, could be list items</p>
    </ion-list>
  </ion-content>
</ion-menu>

<ion-nav #mycontent [root]="rootPage"></ion-nav>
```


## Menu Types

El menú soporta tres tipos de display: overlay, reveal y push.

EL display por defecto depende de la plataforma, pero se puede cambiar.

- Material Design and Windows => overlay
- iOS => reveal

## Persistent Menus

Los menús persistentes muestran el botón de *toggle* en todas las páginas de la pila de navegación. Para convertir un menú en persistente hay que establecer a **true** la propiedad **persistent** en el &lt;ion-menu>.

## Menu Side

Para poner el menú en la derecha basta con indicarlo en el atributo **side**

```html
<ion-menu side="right" [content]="mycontent">...</ion-menu>
```

## Menu Type

El tipo de menú se puede cambiar a través del atributo **type**.

```html
<ion-menu type="overlay" [content]="mycontent">...</ion-menu>
```

Aunque también se puede configurar en el módulo.

```typescript
// in NgModules

imports: [
  IonicModule.forRoot(MyApp,{
    menuType: 'push',
    platforms: {
      ios: {
        menuType: 'overlay',
      }
    }
  })
],
```

## Displaying the Menu

Para hacer toggle desde la plantilla basta con añadir un *button* con la directiva **menuToggle** en cualquier lugar de la página.

```typescript
<button ion-button menuToggle>Toggle Menu</button>
```

Para cerrar el menú tenemos la directiva **menuClose**

```typescript
<ion-menu [content]="mycontent">
  <ion-content>
    <ion-list>
      <ion-item menuClose detail-none>Close Menu</ion-item>
    </ion-list>
  </ion-content>
</ion-menu>
```

El menú también se puede controlar desde el componente a través de métodos del **MenuController**.

```typescript
import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({...})
export class MyPage {
 constructor(public menuCtrl: MenuController) {}

 openMenu() {
   this.menuCtrl.open();
 }
}
```


## Propiedades

- content (any)

- enabled (boolean)

- id (string)

- persistent (boolean)

- side (string)

- swipeEnabled (boolean)

- type (string)


## Eventos

- **ionClose**: Se emite cuando el menú ha sido cerrado

- **ionDrag**: Se emite cuando se está arrastrando el menú para abrirlo.	

- **ionOpen**: Se emite cuando el menú ha sido abierto.	

# Ionic CLI

El **cli** es una herramienta consistente en un conjunto de comandos que nos facilitan el desarrollo de aplicaciones con Ionic.

## Requisitos

- Node 6 LTS
- NPM 3+

## Instalación

> npm install -g ionic@latest

> ionic --version

> ionic --help

<https://ionicframework.com/docs/cli/commands.html>

## Actualización a la última versión

> npm update -g ionic.

## Crear una aplicación Ionic

El comando **ionic start** crea una nueva aplicación ionic.

> ionic start myNewProject

El comando es interactivo y te va preguntando el nombre de proyecto, la plantilla que quieres utilizar, etc.

<https://ionicframework.com/docs/cli/start/>

## Servir la aplicación en el navegador

Ionic serve compila y sirve la apliación.

> cd ./myNewProject

> ionic serve

La aplicación estará disponible por defecto en http://localhost:8100.

Admite el modificador --prod para servir la aplicación con la configuración de producción.

> ionic serve --prod

Tiene además un modo **lab** que se puede lanzar con el modificador --lab.

> ionic serve --lab

Para servir la aplicación y tenerla disponible para verla en Ionic DevApp se debe lanzar con el modificador --devapp

> ionic serve --devapp

<https://ionicframework.com/docs/cli/serve/>

## Generar elementos

El comando **ionic generate** nos permite crear nuevos elementos de angular:

- page
- component
- service
- module
- class
- directive
- guard
- pipe
- interface
- enum

> ionic generate [type] [name]

<https://ionicframework.com/docs/cli/generate/>


## Ionic Cordova

El comando ionic start ya pregunta si queremos instalar Cordova.

De no haberlo instalado, tendríamos que instalarlo con npm.

> npm install -g cordova

> ionic cordova --help

El comando **ionic cordova** es un wrapper del comando **cordova**. De forma que ejecutar

> ionic cordova build android

Es lo mismo que ejecutar

> cordova build android

pero ejecutando previamente el build de angular (ng run app:build) para compilar la aplicación a HTML-CSS-JAVASCRIPT.

### Subcomandos de ionic cordova

- ionic cordova platform add
- ionic cordova platform remove
- ionic cordova build
- ionic cordova run
- ionic cordova resources

<https://cordova.apache.org/docs/en/latest/reference/cordova-cli/>

### Añadir una plataforma al proyecto

> ionic cordova platform add android

> ionic cordova platform add ios

NOTA: NO SE PUEDE CAMBIAR EL NOMBRE DE LA APP en config.xml después de añadir la plataforma de ios.

### Ejecutar una aplicación en el móvil

> ionic cordova run android

> ionic cordova run ios

<https://ionicframework.com/docs/cli/cordova/run>

### Construir el binario de una aplicación

> ionic cordova build android

> ionic cordova build ios

<https://ionicframework.com/docs/cli/build/>

## Modo verbose

El modificador --verbose mostrará mensajes de DEBUG por pantalla.

<https://ionicframework.com/docs/cli/>

## Otros comandos

### Ionic info

El comando **ionic info** nos da información sobre el proyecto actual.

> ionic info

La salida puede ser en formato json:

> ionic info --json

### Ionic config

El comando config sirve para leer/escribir variables de configuración.

Ejemplos

> ionic config set name MyApp

> ionic config get name

> ionic config unset name


### Ionic build

Ionic build es un alias de 

> ng run app:build

Compila la aplicación Angular.

### Ionic cordova resources

El comando **ionic cordova resources**, a partir de un icono y una pantalla de carga situados en /resources, genera todos los tamaños de iconos y de pantallas de carga necesarios para compilar la aplicación según los distintos tamaños y resoluciones de dispositivos ios y android.

> ionic cordova resources

Documentación relacionada:

- Icons: https://cordova.apache.org/docs/en/latest/config_ref/images.html
- Splash Screens: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/

### Ionic doctor

El comando **ionic doctor check** revisa la "salud" de nuestro proyecto ionic.

> ionic doctor check

Con el subcomando **treat** se pueden corregir algunas de las "incidencias" de forma automática

> ionic doctor treat

El subcomando **list** nos da el listado de todas la cosas que revisa el comando *doctor*.

> ionic doctor list

### Ionic capacitor

Ionic capacitor tiene subcomandos que nos permiten manipular la aplicación de forma nativa.

https://ionicframework.com/docs/cli/commands/capacitor-add

### Ionic integrations

El comando ionic integrations nos informa de las integraciones activas en nuestro proyecto.

> ionic integrations list

Se pueden habilitar y deshabilitar con los subcomandos **enable** y **disable**.

### Ionic repair

El comando ionic **repair** elimina y vuelve a incluir todas las dependencias de nuestro proyecto.

https://ionicframework.com/docs/cli/commands/repair

### Ionic ssl y ssh

Los comandos **ionic ssl** e **ionic ssh** sirven para generar certificados y conectarse con AppFlow.

Veremos AppFlow más adelante en el curso.

## Enlace a la documentación oficial

<https://ionicframework.com/docs/cli/commands.html>

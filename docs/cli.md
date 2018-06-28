# Ionic CLI

Requisitos:

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

> ionic start myNewProject

<https://ionicframework.com/docs/cli/start/>

## Servir la aplicación en el navegador

> cd ./myNewProject
> ionic serve

<https://ionicframework.com/docs/cli/serve/>

## Generar elementos

> ionic generate [type] [name]

<https://ionicframework.com/docs/cli/generate/>


## Instalar Cordova CLI

El comando ionic start ya pregunta si queremos instalar Cordova

> npm install -g cordova
> ionic cordova --help

El comando *ionic cordova* es un wrap del comando *cordova*.

<https://cordova.apache.org/docs/en/latest/reference/cordova-cli/>

## Añadir una plataforma al proyecto

> ionic cordova platform add android ios

## Ejectuar una aplicación en el móvil

> ionic cordova run android
> ionic cordova run ios

<https://ionicframework.com/docs/cli/cordova/run>

## Construir el binario de una aplicación

> ionic cordova build android
> ionic cordova build ios

<https://ionicframework.com/docs/cli/build/>


## Modo verbose

El modificador --verbose mostrará mensajes de DEBUG por pantalla.


<https://ionicframework.com/docs/cli/>




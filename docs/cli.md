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



    config <subcommand> ...... Manage CLI and project config values (subcommands: get, set)
    docs ..................... Open the Ionic documentation website
    info ..................... Print system/environment info
    login .................... Login with your Ionic ID
    signup ................... Create an Ionic account
    ssh <subcommand> ......... Commands for configuring SSH keys (subcommands: add, delete, generate, list, setup, use)
    start .................... Create a new project
    telemetry ................ (deprecated) Opt in and out of telemetry

    build .................... Build web assets and prepare your app for any platform targets
    cordova <subcommand> ..... Cordova functionality (subcommands: build, compile, emulate, platform, plugin, prepare, 
                               requirements, resources, run)
    doctor <subcommand> ...... Commands for checking the health of your Ionic project (subcommands: check, ignore, list)
    generate ................. Generate pipes, components, pages, directives, providers, and tabs (ionic-angular >= 
                               3.0.0) (alias: g)
    git <subcommand> ......... Commands relating to git (subcommands: remote)
    integrations <subcommand>  Add or disable various integrations in your app (subcommands: disable, enable)
    link ..................... Connect your local app to Ionic
    monitoring <subcommand> .. Commands relating to Ionic Pro error monitoring (subcommands: syncmaps)
    serve .................... Start a local dev server for app dev/testing

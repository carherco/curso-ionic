# Instalación

Para trabajar con Ionic hay que instalarse el Command Line Interface (CLI).

## Requisitos

- Node 6 LTS
- NPM 3+

## Instalación Ionic CLI

> npm install -g ionic@latest
> ionic --version
> ionic --help

## Creación de un proyecto Ionic

> ionic start myNewProject

<https://ionicframework.com/docs/cli/start/>

### Starter templates

-**blank**: Un proyecto en blanco

-**tabs**: Un proyecto con un layout de tabs

-**sidemenu**: Un proyecto con un menú lateral

## Servir la aplicación en el navegador

> cd ./myNewProject
> ionic serve

```
Local: http://localhost:8100
External: http://192.168.0.243:8100
DevApp: curso@8100 on MacBook-Pro-de-Carlos.local
```

## Modo lab

> ionic serve --lab

## Ionic DevApp

<https://ionicframework.com/docs/pro/devapp/>

Para ver por el terminal los logs ocurridos en el móvil (con Ionic DevApp)

> ionic serve -c

Revisar la lista de Native Cordova Plugin Support de DevApp al final del link anterior.

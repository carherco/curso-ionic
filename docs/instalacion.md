# Instalación

Requisitos:

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

-**tabs**: A starting project with a simple tabbed interface
blank: A blank starter project.

-**sidemenu**: A starting project with a side menu with navigation in the content area.

-**super**: A starting project complete with pre-built pages, providers and best practices for Ionic development.

-**conference**: A project that demonstrates a realworld application.

-**tutorial**: A tutorial based project that goes along with the Ionic documentation.

-**aws**: AWS Mobile Hub Starter.



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

Para ver por el terminal los logs ocurridos en el móvil

> ionic serve -c

Revisar la lista de Native Cordova Plugin Support de DevApp al final del link anterior.

# Deploy

## Para Android:

1) Generar una key (solamente una vez)

> keytool -genkey -v -keystore carherco.keystore -alias carherco -keyalg RSA -keysize 2048 -validity 10000

2) Hacer el build

> ionic cordova build android --release --prod

3) Firmar
> jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore carherco.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk carherco

4) Zipalign

> cd platforms/android/build/outputs/apk/

> ~/Library/Android/sdk/build-tools/25.0.1/zipalign -v 4 android-release-unsigned.apk BuscaTuTerraza.apk


## Para IOS:

1) ionic cordova build ios --release --prod

(--release no es necesario en ios)

2) Abrir proyecto con xcode firmar y todo eso

3) En xcode: Product => Archive

4) En xcode: Upload to apple store.


## Deploy contínuo (con Ionic Pro)

> sudo npm install -g ionic@latest

> ionic link --pro-id 7009e6ff

En Code => Channels => Crear y Set up los Channels que queramos

```
cordova plugin add cordova-plugin-ionic --save \
--variable APP_ID="7009e6ff" \
--variable CHANNEL_NAME="Production" \
--variable UPDATE_METHOD="auto" \
--variable MAX_STORE="2" \
--variable WARN_DEBUG="false"
```

<https://ionicframework.com/docs/pro/deploy/setup/#usage>

Asignar commits nuevos a canales

Solamente funcionará si no necesitamos permisos nuevos.

## Monitorización

<https://ionicframework.com/docs/pro/monitoring/>

```
Pro.monitoring.exception(new Error('error'));

Pro.monitoring.log('This happens sometimes', { level: 'error' });

Pro.monitoring.call(() => {
  throw new Error('error');
});

const newFn = Pro.monitoring.wrap(() => {
  throw new Error('error');
});
newFn();
```

Configurar monitorización

<https://ionicframework.com/docs/pro/basics/getting-started/#pro-client-setup>

## Ionic View 

Ionic View deja de tener soporte y de estar operativo el 1 de septiembre de 2018

## Planes de Ionic Pro

<https://ionicframework.com/pro/pricing>

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

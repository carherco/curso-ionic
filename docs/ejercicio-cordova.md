# Ejercicio Cordova

1) Al entrar en la app, comprobar si la localización (el gps) está activada (plugin **Diagnostic**).

2) Si no está activada, sacar un alert (componente **Alerts**) con un mensaje que diga que esta app necesita que el gps esté activado para funcionar y preguntar al usuario si quiere activarlo. El alert tendrá dos botones SÍ o NO para responder a la pregunta.

3) Si responde NO, cerramos el alert y sacamos mensaje en la página de que no se puede utilizar la app.

4) Si responde SÍ, le enviamos a los ajustes del móvil.

5) Cuando el GPS esté activado, en la página aparecerán las coordenadas de posición del usuario (plugin **Geolocation**) y dos botones: "Ir a la Puerta del Sol" e "Ir al Parque del Retiro" y "Compartir mi posición"

6) Si el usuario "Compartir mi posición" se le mostrará la lista de apps instaladas que permiten compartir mensajes (plugin **SocialSharing**).

7) Si el usuario pulsa alguno de los otros dos botones, se abrirá la app de mapas del móvil (plugin **LaunchNavigator**) con el mapa indicando la posición elegida.

```typescript
platform.ready().then( 

  
);
```




```typescript
    var that = this;
    this.diagnostic.registerLocationStateChangeHandler(function (state) {
        if ((that.platform.is('android') && state !== that.diagnostic.locationMode.LOCATION_OFF)
                || (that.platform .is('ios')) && (state === that.diagnostic.permissionStatus.GRANTED
                || state === that.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE
                )) {
            console.log("Location is available");
        } else {
            console.log("Location is not available");
        }
    });

    this.checkLocation();
```

```typescript
if (this.platform.is('cordova')) {
    var that = this;
    this.diagnostic.isLocationAvailable().then(function (available:any) {
        console.log('available:'+available);
        if (!available) {

          let confirm = that.alertCtrl.create({
            title: 'Aviso',
            message: 'Esta aplicación no funciona si no activa el GPS.',
            buttons: [
              {
                text: 'Cancelar',
                handler: () => {
                  console.log('Cancelar clicked');
                }
              },
              {
                text: 'Activar GPS',
                handler: () => {
                  console.log('Activar GPS clicked');
                  that.diagnostic.switchToLocationSettings();
                }
              }
            ]
          });
          confirm.present();

        } else {
            console.log('available');
            that.getLocation();
        }
    }, function (error) {
        console.error("The following error occurred: " + error);
    });
}
```

```typescript
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
      this.userpos.lat = resp.coords.latitude;
      this.userpos.lng = resp.coords.longitude;
      console.log(this.userpos);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((resp) => {
      console.log('subscribe del watchPosition()');
      console.log(resp);
      this.userpos.lat = resp.coords.latitude;
      this.userpos.lng = resp.coords.longitude;
    });
```

```typescript
    dest = [39.48, -0.40];
    let options: LaunchNavigatorOptions = {
      start: 'London, ON',
      app: LaunchNavigator.APPS.GOOGLE_MAPS
    };
    this.launchNavigator.navigate(dest, options);
```




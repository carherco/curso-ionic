import { Component } from '@angular/core';
import { NavController, Platform, AlertController, Config } from 'ionic-angular';
import { Pro } from '@ionic/pro';
import { Diagnostic } from '@ionic-native/diagnostic';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private platform: Platform,
    private diagnostic: Diagnostic,
    private alertCtrl: AlertController,
    ) {

    this.platform.ready().then( (state) => {


          let that = this;
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
              }
          }, function (error) {
              console.error("The following error occurred: " + error);
          });



    });


    //Pro.monitoring.exception(new Error('error'));
    //Pro.monitoring.log('This happens sometimes', { level: 'error' })
  }

}

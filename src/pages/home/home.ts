import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pro } from '@ionic/pro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    //Pro.monitoring.exception(new Error('error'));
    Pro.monitoring.log('This happens sometimes', { level: 'error' })
  }

}

import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
declare var cordova;


import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  hms: boolean;
  gms: boolean;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public alertCtrl: AlertController) {
    platform.ready().then(async () => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.checkservices();
    });  
  }

  async checkservices() {
    this.hms = await cordova.plugins.CordovaServiceChecker.isHmsAvailable();
    this.gms = await cordova.plugins.CordovaServiceChecker.isGmsAvailable();

    if (this.hms && this.gms){
      const alert = this.alertCtrl.create({
        title: 'Available Services',
        subTitle: 'this phone has Google Services and Huawei Services Installed',
        buttons: ['OK']
      });
      alert.present();
    }
    if (this.hms && !this.gms){
      const alert = this.alertCtrl.create({
        title: 'Available Services',
        subTitle: 'this phone has only Huawei Services Installed',
        buttons: ['OK']
      });
      alert.present();
    }
    if (!this.hms && this.gms){
      const alert = this.alertCtrl.create({
        title: 'Available Services',
        subTitle: 'this phone has only Google Services Installed',
        buttons: ['OK']
      });
      alert.present();
    }
    if (!this.hms && !this.gms){
      const alert = this.alertCtrl.create({
        title: 'Available Services',
        subTitle: 'any Services have been detected',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}


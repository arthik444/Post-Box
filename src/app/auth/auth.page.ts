import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from './login/login.page';
import { SignupPage} from './signup/signup.page';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  option = {
    slidesPerView: 1.0,
    centeredSlides: true,
    loop: false,
    spaceBetween: 10,
    // autoplay:true,
  }
  constructor(public modCtrl: ModalController) { }

  ngOnInit() {
  }
  async login() {
    const modal = await this.modCtrl.create({
      component: LoginPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'login-modal',
    })

    return await modal.present();
  }

  async register() {
    const modal = await this.modCtrl.create({
      component: SignupPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'register-modal',
    })

    return await modal.present();
  }

}

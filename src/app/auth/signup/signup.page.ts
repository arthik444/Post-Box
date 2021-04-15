import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(public modCtrl:ModalController) { }

  ngOnInit() {
  }
  async dismiss(){
    return await this.modCtrl.dismiss();
  }
}

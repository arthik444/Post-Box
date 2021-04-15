import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isMenuNavbarOpen = false;
  public animationSlideIn = false;

  constructor() { }

  ngOnInit(): void {
  }

  manageMenuNavbar(isMenuOpening: boolean) {
    this.animationSlideIn = isMenuOpening;
    setTimeout(() => {
      this.isMenuNavbarOpen = isMenuOpening;
    },!isMenuOpening ? 500 : 0)
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isMenuNavbarOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  manageMenuNavbar(isMenuOpening: boolean) {
    this.isMenuNavbarOpen = isMenuOpening;
  }
}

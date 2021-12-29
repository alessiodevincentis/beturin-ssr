import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {LoaderService} from "../../services/loader-service/loader.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private rooms: any;

  constructor(private firestore: AngularFirestore, private loaderService: LoaderService) { }

  ngOnInit(): void {
  }

  findRooms() {
    this.loaderService.showLoader();
    setTimeout( () => {
      this.firestore.collection<any[]>('reservations').snapshotChanges().subscribe(data => {
        this.loaderService.hideLoader();
        this.rooms = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          }
        });
      });
    },3000);
  }

  sendMessage() {

  }
}

import { Component, OnInit } from '@angular/core';
import {LoaderService} from "../../services/loader-service/loader.service";

@Component({
  selector: 'app-loader-screen',
  templateUrl: './loader-screen.component.html',
  styleUrls: ['./loader-screen.component.css']
})
export class LoaderScreenComponent implements OnInit {

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
  }

  get isLoading() {
    return this.loaderService.isLoaderWorking;
  }

}

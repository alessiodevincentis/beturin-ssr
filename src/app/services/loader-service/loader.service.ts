import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public isLoading = false;

  constructor() { }

  showLoader() {
    this.isLoading = true;
  }

  hideLoader() {
    this.isLoading = false;
  }

  get isLoaderWorking() {
    return this.isLoading;
  }
}

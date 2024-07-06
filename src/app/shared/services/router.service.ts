
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  navigationStack: Array<String> = []

  constructor(private router: Router) { }

  back() {
    if (this.canGoBack()) {
      this.router.navigate([this.navigationStack.pop()])
    }
  }

  canGoBack(): Boolean {
    return this.navigationStack.length > 0;
  }

  navigate(route: String) {
    this.navigationStack.push(route)
    this.router.navigate([
      route
    ])
  }
}

import { Component, HostListener } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isScrolledDown = false;

  @HostListener('window:scroll', ['$event'])
  setShadow(event) {
    this.isScrolledDown = window.pageYOffset > 80;
  }

  constructor() {}

  scrollTo(elementName) {
    const el = document.getElementById(elementName);
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

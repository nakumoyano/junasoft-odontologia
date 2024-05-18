import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  open: boolean = false;
  isScrolled: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onScroll() {
    if (window.pageYOffset > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  openMenu() {
    this.open = !this.open;
  }
}

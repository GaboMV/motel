import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuShortcutActive: boolean = false;
  notifyShortcutActive: boolean = false;
  emailShortcutActive: boolean = false;
  langShortcutActive: boolean = false;
  proShortcutActive: boolean = false;

  constructor(
  ) { }

  ngOnInit(): void {
    this.loadUserDetails();
  }

  loadUserDetails(): void {
  }

  shortmenu() {
    this.menuShortcutActive = !this.menuShortcutActive;
    this.emailShortcutActive = false;
    this.notifyShortcutActive = false;
    this.langShortcutActive = false;
    this.proShortcutActive = false;
  }

  notifydropdown() {
    this.menuShortcutActive = false;
    this.emailShortcutActive = false;
    this.notifyShortcutActive = !this.notifyShortcutActive;
    this.langShortcutActive = false;
    this.proShortcutActive = false;
  }

  emaildropdown() {
    this.menuShortcutActive = false;
    this.emailShortcutActive = !this.emailShortcutActive;
    this.notifyShortcutActive = false;
    this.langShortcutActive = false;
    this.proShortcutActive = false;
  }

  langdropdown() {
    this.menuShortcutActive = false;
    this.emailShortcutActive = false;
    this.notifyShortcutActive = false;
    this.langShortcutActive = !this.langShortcutActive;
    this.proShortcutActive = false;
  }

  prodropdown() {
    this.menuShortcutActive = false;
    this.emailShortcutActive = false;
    this.notifyShortcutActive = false;
    this.langShortcutActive = false;
    this.proShortcutActive = !this.proShortcutActive;
  }
}

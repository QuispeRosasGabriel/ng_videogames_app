import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() public toggleMenu: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  public toggledValue: boolean;
  public constructor() {
    this.toggledValue = true;
  }

  public toggleSidebar(): void {
    this.toggledValue = !this.toggledValue;
    this.toggleMenu.emit(this.toggledValue);
  }
}

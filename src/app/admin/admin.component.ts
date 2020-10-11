import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  public toggleValue: boolean;

  public constructor(private cd: ChangeDetectorRef) {}

  public toggle(ev) {
    this.toggleValue = ev;
    this.cd.detectChanges();
  }
}

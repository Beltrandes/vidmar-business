import { Component } from '@angular/core';

@Component({
  selector: 'app-side-tab',
  templateUrl: './side-tab.component.html',
  styleUrls: ['./side-tab.component.sass']
})
export class SideTabComponent {

  fastAddMenuIsOpened: boolean = false

  openFastAddMenu() {
    this.fastAddMenuIsOpened = !this.fastAddMenuIsOpened
  }
}

import {Component, Input} from '@angular/core';
import {GlobalClasses} from "../../constants/Global-Classes";

@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.scss']
})
export class HeaderTitleComponent {
  @Input() title: string = '';
  classes = GlobalClasses;

  onDoubleClick() {
    alert('Double Clicked! You need to edit it!')
  }

  onClick() {
    alert('Clicked!')
  }
}

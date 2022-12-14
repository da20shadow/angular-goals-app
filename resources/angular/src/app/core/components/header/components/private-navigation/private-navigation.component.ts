import { Component } from '@angular/core';
import {DarkLightModeService} from "../../../../services/dark-light-mode.service";
import {navBar} from "../../../../data/nav-links";

@Component({
  selector: 'app-private-navigation',
  templateUrl: './private-navigation.component.html',
  styleUrls: ['./private-navigation.component.scss']
})
export class PrivateNavigationComponent {
  darkMode!: boolean;
  privateNavLinks = navBar.privateNavLinks;

  constructor(private darkModeService: DarkLightModeService) {
    this.darkMode = this.darkModeService.checkUserPreferredMode();
  }

  toggleDarkMode() {
    if (this.darkMode){
      this.darkModeService.enableLightTheme()
      this.darkMode = false;
    }else{
      this.darkModeService.enableDarkTheme()
      this.darkMode = true;
    }
  }
}

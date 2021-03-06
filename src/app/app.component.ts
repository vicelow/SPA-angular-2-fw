import { Component } from '@angular/core';

import { FrameworkConfigService, FrameworkConfigSettings} from '../fw/services/framework-config.service';
import { MenuService } from '../fw/services/menu.service';
import { initialMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor (private frameworkConfigService: FrameworkConfigService,
               private menuService: MenuService) {
    let config : FrameworkConfigSettings = {
        socialIcons: [
            {imageFile: 'assets/facebook.png', alt: 'Facebook', link:'http://www.facebook.com'}
        ],
        showLenguageSelector:false
    };
    
    frameworkConfigService.configure(config);
    menuService.items = initialMenuItems;
  }
}

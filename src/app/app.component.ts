import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { Section } from './models/section'
import { ConfigService } from './services/config.service'
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navItems: Array<Section> = []

  constructor(
    translate: TranslateService, 
    private configService: ConfigService, 
    private swUpdate: SwUpdate) {
      translate.setDefaultLang('es')
      translate.use('es')
      
      this.swUpdate.available.subscribe(event => {
        console.log('A newer version is now available. Refresh the page now to update the cache');
      });
      this.swUpdate.checkForUpdate()
      
      this.loadNavItems()
    }

  async loadNavItems() {
    this.navItems = await this.configService.getNavBarItems()
  }
}

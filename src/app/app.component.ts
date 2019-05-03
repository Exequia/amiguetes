import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { Section } from './models/section'
import { ConfigService } from './services/config.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navItems: Array<Section> = []

  constructor(translate: TranslateService, private configService: ConfigService) {
    translate.setDefaultLang('es')
    translate.use('es')
    this.loadNavItems()
  }

  async loadNavItems() {
    this.navItems = await this.configService.getNavBarItems()
  }
}

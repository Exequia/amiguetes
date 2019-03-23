import { Component, OnInit } from '@angular/core';
import { RouterLink } from '../../models/routerLink';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  sections: Array<RouterLink> = []

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.loadNavItems();
  }

  async loadNavItems() {
      this.sections = await this.configService.getNavBarItems();
  }

}

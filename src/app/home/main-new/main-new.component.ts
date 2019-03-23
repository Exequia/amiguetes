import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-main-new',
  templateUrl: './main-new.component.html',
  styleUrls: ['./main-new.component.scss']
})
export class MainNewComponent implements OnInit {

  noticeName: string;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.loadMainNew();
  }

  async loadMainNew() {
    this.noticeName = await this.configService.getMainNewName();
  }

}

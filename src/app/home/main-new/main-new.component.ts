import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { New } from '../../models/news';

@Component({
  selector: 'app-main-new',
  templateUrl: './main-new.component.html',
  styleUrls: ['./main-new.component.scss']
})
export class MainNewComponent implements OnInit {

  newMain: New = undefined;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.loadMainNew();
  }

  async loadMainNew() {
    this.newMain = await this.configService.getMainNewName();
  }

}

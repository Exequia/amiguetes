import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { New } from '../../models/news';

@Component({
  selector: 'app-news-wrapper',
  templateUrl: './news-wrapper.component.html',
  styleUrls: ['./news-wrapper.component.scss']
})
export class NewsWrapperComponent implements OnInit {
  
  allNews: Array<New>;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.loadAllNews()
  }

  async loadAllNews() {
    this.allNews = await this.configService.getAllNews();
  }

}

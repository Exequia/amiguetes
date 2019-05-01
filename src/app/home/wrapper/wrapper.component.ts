import { Component, OnInit } from '@angular/core';
import { Section, Item } from '../../models/section';
import { ConfigService } from '../../services/config.service';
import { New } from '../../models/news';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  sections: Array<Section> = []
  latestNews: Array<New>;
  items: Array<Item> = new Array<Item>()

  constructor(private configService: ConfigService, private translate: TranslateService) { }

  ngOnInit() {
    this.loadNavItems();
    this.completeSections();
    this.getLastesNews()
    const item: Item = {id:'0', title: 'test', date: new Date(), link: 'news'}
    this.items.push(item)
  }

  async loadNavItems() {
      this.sections = await this.configService.getNavBarItems();
  }

  completeSections(){
    this.sections.forEach(section=>{
      switch (section.key) {
        case 'news':
          section.items = this.getLastesNews();
          break;
      }
    })
  }

  getLastesNews(): Array<Item> {
    let latestNews: Array<New> = this.configService.getLastesNews();
    return this.createNewItems(latestNews)
  }
  
  createNewItems(latestNews): Array<Item> {
    let items = new Array<Item>()
    if (latestNews && latestNews.length>0){
      latestNews.forEach(n => {
        items.push(this.createNewItem(n))
      });
    }
    return items;
  }

  createNewItem(n: New): Item {
    let title = ''
    this.translate.get('news.' + n.id + '.title').subscribe(value => { title = value; } );
    const item: Item = {
      id: n.id,
      date: n.date,
      title: title,
      link: n.id
    }
    return item;
  }
}

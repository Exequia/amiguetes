import { Component, OnInit } from '@angular/core'
import { Section, Item } from '../../models/section'
import { ConfigService } from '../../services/config.service'
import { New } from '../../models/news'
import { Quiz } from '../../models/quiz'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {
  sections: Array<Section> = []
  latestNews: Array<New>

  constructor(private configService: ConfigService, private translate: TranslateService) {}

  ngOnInit() {
    this.loadNavItems()
  }

  async loadNavItems() {
    this.sections = await this.configService.getNavBarItems()
    this.completeSections()
  }

  completeSections() {
    this.sections.forEach(section => {
      switch (section.key) {
        case 'news':
          this.setLastesNews(section)
          break
        case 'quiz':
          this.setLastesQuiz(section)
          break
      }
    })
  }

  async setLastesNews(section) {
    const latestNews: Array<New> = await this.configService.getLastesNews()
    section.items = this.createNewItems(latestNews)
  }

  createNewItems(latestNews): Array<Item> {
    let items = new Array<Item>()
    if (latestNews && latestNews.length > 0) {
      latestNews.forEach(n => {
        items.push(this.createNewItem(n))
      })
    }
    return items
  }

  createNewItem(n: New): Item {
    let title = ''
    this.translate.get('news.' + n.id + '.title').subscribe(value => {
      title = value
    })
    let summary = ''
    this.translate.get('news.' + n.id + '.summary').subscribe(value => {
      summary = value
    })
    const item: Item = {
      id: n.id,
      date: n.date,
      title: title,
      link: n.id,
      summary: summary,
    }
    return item
  }

  async setLastesQuiz(section) {
    const latestQuiz: Array<Quiz> = await this.configService.getLastesQuiz()
    section.items = this.createQuizItems(latestQuiz)
  }

  createQuizItems(quizs: Array<Quiz>): Array<Item> {
    let items = new Array<Item>()
    if (quizs && quizs.length > 0) {
      quizs.forEach(q => {
        items.push(this.createQuizItem(q))
      })
    }
    return items
  }

  createQuizItem(q: Quiz): Item {
    let title = ''
    this.translate.get('quiz.' + q.name + '.title').subscribe(value => {
      title = value
    })
    let summary = ''
    this.translate.get('quiz.' + q.name + '.summary').subscribe(value => {
      summary = value
    })
    const item: Item = {
      id: q.name,
      date: q.finish,
      title: title,
      link: 'quiz',
      summary: summary,
    }
    return item
  }
}

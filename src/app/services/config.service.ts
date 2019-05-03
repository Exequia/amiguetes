import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { News, New } from '../models/news'
import { Quiz } from '../models/quiz'
import { Section } from '../models/section'

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private navBarMenu: Array<Section>
  private news: News
  private quizs: Array<Quiz>

  constructor(private http: HttpClient) {}

  getFile(filePath) {
    return this.http.get(filePath)
  }

  readNavBarMenu() {
    return this.getFile('./assets/files/navbar.json')
  }

  readNews() {
    return this.getFile('./assets/files/news.json')
  }

  readQuizs() {
    return this.getFile('./assets/files/quiz.json')
  }

  async getNavBarItems(): Promise<Array<Section>> {
    if (!this.navBarMenu) {
      this.navBarMenu = <Array<Section>>await this.readNavBarMenu().toPromise()
    }
    return this.navBarMenu
  }

  async getMainNewName(): Promise<New> {
    if (!this.news) {
      this.news = <News>await this.readNews().toPromise()
    }
    const mainId = this.news.main

    let newMain: New = undefined

    this.news.news.forEach(n => {
      if (n.id === mainId) {
        newMain = n
      }
    })

    return newMain
  }

  async getAllNews(): Promise<Array<New>> {
    if (!this.news) {
      this.news = <News>await this.readNews().toPromise()
    }
    return this.news.news
  }

  async getNew(newName: string): Promise<New> {
    if (!this.news) {
      this.news = <News>await this.readNews().toPromise()
    }

    let newToReturn
    let index = 0
    while (newToReturn == null && index < this.news.news.length) {
      const newToCheck: New = this.news.news[index]
      if (newName === newToCheck.id) {
        newToReturn = newToCheck
      }
      index++
    }
    return newToReturn
  }

  async getAllQuiz(): Promise<Array<Quiz>> {
    if (!this.quizs) {
      this.quizs = <Array<Quiz>>await this.readQuizs().toPromise()
    }
    return this.quizs
  }

  async getLastesNews(): Promise<Array<New>> {
    if (!this.news) {
      this.news = <News>await this.readNews().toPromise()
    }
    return this.news.news.slice(0, 2)
  }

  async getLastesQuiz(): Promise<Array<Quiz>> {
    if (!this.quizs) {
      this.quizs = <Array<Quiz>>await this.readQuizs().toPromise()
    }
    return this.quizs.slice(0, 2)
  }

  async getQuiz(quizName: string): Promise<Quiz> {
    if (!this.quizs) {
      this.quizs = <Array<Quiz>>await this.readQuizs().toPromise()
    }

    let quizToReturn
    let index = 0
    while (quizToReturn == null && index < this.quizs.length) {
      const quizToCheck: Quiz = this.quizs[index]
      if (quizName === quizToCheck.name) {
        quizToReturn = quizToCheck
      }
      index++
    }
    return quizToReturn
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../models/news';
import { RouterLink } from '../models/routerLink';
import { Quiz } from '../models/quiz';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private navBarMenu: Array<RouterLink>;
  private news: News;

  constructor(private http: HttpClient) { }

  getFile(filePath) {
    return this.http.get(filePath);
  }

  readNavBarMenu() {
    return this.getFile('./assets/files/navbar.json');
  }

  readNews() {
    return this.getFile('./assets/files/news.json');
  }

  async getNavBarItems() :Promise<Array<RouterLink>> {
    if (!this.navBarMenu) {
      this.navBarMenu = <Array<RouterLink>> await this.readNavBarMenu().toPromise();
    }
    return this.navBarMenu;
  }

  async getMainNewName() :Promise<string> {
    if (!this.news) {
      this.news = <News> await this.readNews().toPromise();
    }
    return this.news.main
  }

  getAllQuiz() {
    return this.getFile('./assets/files/quiz.json')
  }
}

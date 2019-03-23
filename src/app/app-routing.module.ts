import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WrapperComponent } from './home/wrapper/wrapper.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewsWrapperComponent } from './news/news-wrapper/news-wrapper.component';
import { FilmographyWrapperComponent } from './filmography/filmography-wrapper/filmography-wrapper.component';
import { RumorWrapperComponent } from './rumor/rumor-wrapper/rumor-wrapper.component';
import { FakeNewsWrapperComponent } from './fakeNews/fake-news-wrapper/fake-news-wrapper.component';
import { QuizWrapperComponent } from './quiz/quiz-wrapper/quiz-wrapper.component';


const routes: Routes = [
  {
    path: '',
    component: WrapperComponent
  },
  {
    path: 'news',
    component: NewsWrapperComponent
  },
  {
    path: 'filmography',
    component: FilmographyWrapperComponent
  },
  {
    path: 'rumor',
    component: RumorWrapperComponent
  },
  {
    path: 'fakeNews',
    component: FakeNewsWrapperComponent
  },
  {
    path: 'quiz',
    component: QuizWrapperComponent
  },
  { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

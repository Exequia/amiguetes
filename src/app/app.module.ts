import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewComponent } from './news/new/new.component';
import { WrapperComponent } from './home/wrapper/wrapper.component';
import { MainNewComponent } from './home/main-new/main-new.component';
import { SectionComponent } from './home/section/section.component';
import { NewsWrapperComponent } from './news/news-wrapper/news-wrapper.component';
import { FilmographyWrapperComponent } from './filmography/filmography-wrapper/filmography-wrapper.component';
import { RumorWrapperComponent } from './rumor/rumor-wrapper/rumor-wrapper.component';
import { QuizWrapperComponent } from './quiz/quiz-wrapper/quiz-wrapper.component';
import { QuizComponent } from './quiz/quiz/quiz.component';
import { QuizOptionComponent } from './quiz/quiz-option/quiz-option.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NewComponent,
    WrapperComponent,
    MainNewComponent,
    SectionComponent,
    NewsWrapperComponent,
    FilmographyWrapperComponent,
    RumorWrapperComponent,
    QuizWrapperComponent,
    QuizComponent,
    QuizOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

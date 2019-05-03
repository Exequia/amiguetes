import { Component, OnInit } from '@angular/core'
import { Quiz } from '../../models/quiz'
import { ConfigService } from '../../services/config.service'

@Component({
  selector: 'app-quiz-wrapper',
  templateUrl: './quiz-wrapper.component.html',
  styleUrls: ['./quiz-wrapper.component.scss'],
})
export class QuizWrapperComponent implements OnInit {
  allQuiz: Array<Quiz>

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.loadAllQuiz()
  }

  async loadAllQuiz() {
    this.allQuiz = await this.configService.getAllQuiz()
  }
}

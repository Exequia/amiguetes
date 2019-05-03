import { Component, OnInit, Input } from '@angular/core'
import { Quiz, Option } from '../../models/quiz'
import { ActivatedRoute } from '@angular/router'
import { ConfigService } from '../../services/config.service'
import { Location } from '@angular/common'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  @Input() quiz: Quiz
  private voted: boolean

  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.voted = false

    let quizName
    this.route.params.subscribe(params => (quizName = params['quizName']))

    this.invokeGetQuiz(quizName)
  }

  async invokeGetQuiz(quizName) {
    if (quizName) {
      this.quiz = <Quiz>await this.configService.getQuiz(quizName)
    }
    this.manageQuiz()
  }

  manageQuiz() {
    let countVotes = 0
    this.quiz.options.forEach(option => {
      countVotes += option.votes
    })
    this.quiz.totalVotes = countVotes
  }

  processVote(votedOption) {
    this.quiz.totalVotes++
    votedOption.votes++
    this.quiz.options.forEach(option => {
      const value = (option.votes / this.quiz.totalVotes) * 100
      option.percent = Math.round(value * 100) / 100
    })
    this.voted = true
  }
}

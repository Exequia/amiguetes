import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../models/quiz';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-quiz-wrapper',
  templateUrl: './quiz-wrapper.component.html',
  styleUrls: ['./quiz-wrapper.component.scss']
})
export class QuizWrapperComponent implements OnInit {

  allQuiz: Array<Quiz>;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.loadAllQuiz();
  }

  loadAllQuiz() {
    this.configService.getAllQuiz()
    .subscribe(
      (response:Array<Quiz>) => {
        this.allQuiz = response
        this.manageQuiz()
      },
      error => console.error(error)
    );
  }

  manageQuiz() {
    this.allQuiz.forEach(quiz => {
      let countVotes = 0
      quiz.options.forEach(option => {
        countVotes += option.votes
      })
      quiz.totalVotes = countVotes;
    });
  }

  processVote(event) {
    this.addVote(event.q, event.votedOption)
  }

  addVote(quiz, votedOption) {
    quiz.totalVotes++
    votedOption.votes++
    quiz.options.forEach(option => {
      const value = ( option.votes / quiz.totalVotes ) * 100
      option.percent =  Math.round(value * 100) / 100
    });
  }

}

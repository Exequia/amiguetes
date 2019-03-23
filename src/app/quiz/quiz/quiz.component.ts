import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quiz, Option } from '../../models/quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  
  @Input() quiz:Quiz;
  @Output() outputVote = new EventEmitter<any>()
  private voted:boolean

  constructor() { }

  ngOnInit() {
    this.voted = false
  }

  processVote(votedOption:Option){
    const q: Quiz = this.quiz
    this.outputVote.emit({q, votedOption})
    this.voted = true
  }
}

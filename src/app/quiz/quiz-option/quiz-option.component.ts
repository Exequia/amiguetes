import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Option } from '../../models/quiz';

@Component({
  selector: 'app-quiz-option',
  templateUrl: './quiz-option.component.html',
  styleUrls: ['./quiz-option.component.scss']
})
export class QuizOptionComponent implements OnInit {

  @Input() quizName:string;
  @Input() option:Option;
  @Input() voted:boolean;
  @Output() outputVote = new EventEmitter<Option>();

  constructor() { }

  ngOnInit() {
  }

  toggleVote() {
    this.outputVote.emit(this.option)
  }

}

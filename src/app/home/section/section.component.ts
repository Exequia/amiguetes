import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/section';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() sectionName:string;
  @Input() sectionItems:Array<Item>;

  constructor() { }

  ngOnInit() {
  }
}
